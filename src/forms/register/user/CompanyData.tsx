import { useRouter } from "next/router"

import { useContext } from "react"

import shallow from "zustand/shallow"

import { useGetCompanyByCode } from "api/company/getCompanyCode"

import Button from "components/Button"
import { Flex } from "components/Flex"
import Select from "components/Select"
import { Spinner } from "components/Spinner"
import Text from "components/Text"
import TextField from "components/TextField"

import { RegisterUserContext } from "contexts/RegisterUserContext"

import { useCurrentStepsStore, useTotalStepsStore } from "stores/steps"
import { AngleRight } from "components/Icons/AngleRight"

export const CompanyData = () => {
  const router = useRouter()

  const { ctx, compid } = router.query

  const { data, setData } = useContext(RegisterUserContext)

  const { nextStep, setStep, previousStep } = useCurrentStepsStore(
    (state) => ({
      nextStep: state.nextStep,
      setStep: state.setStep,
      previousStep: state.previousStep
    }),
    shallow
  )

  if (ctx === "executive") {
    nextStep()
  }

  if (!compid || Array.isArray(compid)) {
    router.push("/register")
    previousStep()
  }

  const compIdAsString: string = compid as string

  const { isSuccess } = useGetCompanyByCode(compIdAsString, {
    onSuccess(data) {
      setData((prevState) => ({
        ...prevState,
        embNameCompany: data.displayName ?? "",
        country: data.co ?? "",
        state: data.st ?? "",
        city: data.location ?? "",
        address: data.streetAddress ?? "",
        embNameCompanyAdmin: data.embCompanyRepresentant ?? "",
        embCompanyCode: (compid as string) ?? ""
      }))
    }
  })

  const setTotalSteps = useTotalStepsStore((state) => state.setTotalSteps)
  setTotalSteps(4)

  function handleOnSubmit() {
    nextStep()
  }

  function handleBack() {
    setStep(1)
    router.push("/register")
  }

  return (
    <Flex as="form" onSubmit={handleOnSubmit} css={{ flexDirection: "column", gap: "40px" }}>
      <Text as="p">
        To subscribe for FlyEmbraer services, simply fill in the form below by searching for your company, which must be
        previously registered and approved by Embraer
      </Text>
      {!isSuccess ? (
        <Spinner centralize />
      ) : (
        <Flex css={{ flexDirection: "column", gap: "24px" }}>
          <TextField
            id="embNameCompany"
            defaultValue={data?.embNameCompany}
            autoFocus
            required
            disabled
            css={{ width: "50%" }}
          >
            Company Name
          </TextField>

          <Select
            id="country"
            label="Country"
            options={[{ value: data?.country ?? "N/A", displayValue: data?.country ?? "N/A" }]}
            required
            disabled
            css={{ width: "50%" }}
          />

          <Select
            id="state"
            label="State/Province"
            options={[{ value: data?.state ?? "N/A", displayValue: data?.state ?? "N/A" }]}
            required
            disabled
            css={{ width: "50%" }}
          />

          <Select
            id="city"
            label="City"
            options={[{ value: data?.city ?? "N/A", displayValue: data?.city ?? "N/A" }]}
            required
            disabled
            css={{ width: "50%" }}
          />

          <TextField id="address" defaultValue={data?.address ?? "N/A"} required disabled>
            Address
          </TextField>

          <TextField id="embNameCompanyAdmin" defaultValue={data?.embNameCompanyAdmin ?? ""} required disabled>
            Company Administrator
          </TextField>

          <Flex
            css={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "8px",
              mt: "20px"
            }}
          >
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>

            <Button type="submit">
              Next <AngleRight width="6" height="11" fill="white" />
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
