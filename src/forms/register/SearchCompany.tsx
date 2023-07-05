import { useRouter } from "next/router"

import { useContext, useEffect, useState } from "react"

import { useGetCompanyName } from "api/company/getCompanyName"

import Button from "components/Button"
import { Flex } from "components/Flex"
import { AngleRight } from "components/Icons/AngleRight"
import Text from "components/Text"
import TextField from "components/TextField"

import { RegisterUserContext } from "contexts/RegisterUserContext"

import { useCurrentStepsStore, useTotalStepsStore } from "stores/steps"

import { styled } from "../../../stitches.config"

type SearchCompanyProps = {
  onGoBack: () => void
  context: string
}

export const SearchCompany = ({ onGoBack, context }: SearchCompanyProps) => {
  const router = useRouter()

  const { reset } = useContext(RegisterUserContext)

  const [companyName, setCompanyName] = useState("")

  const { data, isLoading, isError, refetch } = useGetCompanyName(companyName, { enabled: false, retry: 1 })

  const setTotalSteps = useTotalStepsStore((state) => state.setTotalSteps)
  const { nextStep, setStep, previousStep } = useCurrentStepsStore((state) => ({
    nextStep: state.nextStep,
    setStep: state.setStep,
    previousStep: state.previousStep
  }))

  useEffect(() => {
    reset()
    nextStep()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearchCompany = () => {
    refetch()
  }

  function handleGoBack() {
    previousStep()
    onGoBack()
  }

  function handleNextStep(embCompanyCode?: string) {
    if (!embCompanyCode) {
      alert("Something gone wrong, please try again.")
      return
    }
    nextStep()
    router.push(`/register/user?ctx=${context}&compid=${embCompanyCode}`)
  }

  function handleRegisterCompany() {
    setStep(3)
    setTotalSteps(4)
    router.push(`/register/company?ctx=ne`)
  }

  return (
    <Flex css={{ flexDirection: "column", gap: "1rem" }}>
      <Text as="p" css={{ textAlign: "center", mb: "1rem" }}>
        Please, choose your company.
      </Text>

      <Flex css={{ width: "100%", gap: "10px", m: "auto" }}>
        <TextField
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          disabled={isLoading}
        />
        <Button
          onClick={handleSearchCompany}
          isLoading={isLoading}
          disabled={isLoading}
          css={{ width: "fit-content", height: "auto", p: "0.5rem 1rem", fontWeight: "400" }}
        >
          Search
        </Button>
      </Flex>

      {data?.companies && (
        <StyledTable>
          <thead>
            <tr>
              <th style={{ flex: 2 }}>
                <Text weight="medium" size="xsm" color="black">
                  Name
                </Text>
              </th>
              <th style={{ flex: 1 }}>
                <Text weight="medium" size="xsm" color="black">
                  City
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.companies.map(({ displayName, location, embCompanyCode }) => (
              <tr key={displayName}>
                <td style={{ flex: 2 }}>
                  <Text
                    weight="normal"
                    color="black"
                    css={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontSize: "12px"
                    }}
                  >
                    {displayName}
                  </Text>
                </td>
                <td style={{ flex: 1 }}>
                  <Text weight="normal" color="black" css={{ fontSize: "9px" }}>
                    {location}
                  </Text>
                </td>
                <td>
                  <Button
                    css={{ width: "fit-content", height: "9px", p: "1rem 1rem", fontWeight: "400" }}
                    onClick={() => handleNextStep(embCompanyCode)}
                  >
                    <AngleRight width="45" height="10" fill="white" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}

      {isError ? (
        <Text weight="thin" size="xsm" css={{ textAlign: "center" }}>
          Can&apos;t find your company? Register your company now.
        </Text>
      ) : (
        <Text weight="thin" size="xsm" css={{ textAlign: "center" }}>
          Company not registered?{" "}
          <Button
            variant="tertiary"
            onClick={handleRegisterCompany}
            css={{ fontWeight: "$normal", fontSize: "$xsm", color: "$brand-primary" }}
          >
            Register now
          </Button>
        </Text>
      )}

      <Flex css={{ gap: "10px", justifyContent: "center", height: "auto" }}>
        <Button variant="secondary" onClick={handleGoBack}>
          BACK
        </Button>
        {isError && <Button onClick={handleRegisterCompany}>New Company</Button>}
      </Flex>
    </Flex>
  )
}

const StyledTable = styled("table", {
  width: "100%",
  m: "auto",
  display: "flex",
  flexDirection: "column",

  "& thead > tr": {
    display: "flex",
    pb: "2px",
    borderBottom: "1px solid #C0C0C0",

    "& > th": {
      textAlign: "start"
    }
  },

  "& tbody > tr": {
    p: "16px 4px 15px",
    display: "flex",
    position: "relative",
    backgroundColor: "$white",

    "&:nth-child(odd)": {
      backgroundColor: "#E7E7E7"
    },

    "& td:last-child": {
      position: "absolute",
      top: "50%",
      right: "-1px",
      transform: "translateY(-50%)"
    }
  }
})
