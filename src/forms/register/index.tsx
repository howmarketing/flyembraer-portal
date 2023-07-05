import { useRouter } from "next/router"

import { useEffect, useState } from "react"

import Button from "components/Button"
import { Flex } from "components/Flex"
import Text from "components/Text"

import { useCurrentStepsStore, useTotalStepsStore } from "stores/steps"

import { SearchCompany } from "./SearchCompany"

import { styled } from "../../../stitches.config"

export const RegisterForm = () => {
  const router = useRouter()

  const [showSearchCompany, setShowSearchCompany] = useState(false)
  const [showRegisterOptions, setShowRegisterOptions] = useState({
    context: "",
    show: false
  })

  const setStep = useCurrentStepsStore((state) => state.setStep)
  const setTotalSteps = useTotalStepsStore((state) => state.setTotalSteps)

  setStep(1)
  setTotalSteps(4)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleSelectMarket(context: string) {
    if (context === "executive") {
      setShowRegisterOptions({
        context,
        show: true
      })
      return
    }
    setShowSearchCompany(true)
  }

  function handleSelectUserRegistration() {
    if (showRegisterOptions.context === "executive") {
      setStep(2)
      setTotalSteps(2)
      router.push(`/register/user?ctx=${showRegisterOptions.context}`)
    }
  }

  function handleSelectCompanyRegistration() {
    if (showRegisterOptions.context === "executive") {
      setStep(2)
      setTotalSteps(3)
      router.push("/register/company?ctx=executive")
    }
  }

  function onGoBack() {
    setShowSearchCompany(false)
  }

  return showSearchCompany ? (
    <SearchCompany onGoBack={onGoBack} context={showRegisterOptions.context} />
  ) : (
    <Flex css={{ flexDirection: "column", gap: "38px" }}>
      <Text as="p" css={{ textAlign: "center" }}>
        Please, choose your market segment.
      </Text>

      <Flex css={{ flexDirection: "column", alignItems: "center", gap: "24px", width: "fit-content", m: "auto" }}>
        <ReestyledButton onClick={() => handleSelectMarket("commercial")}>Commercial Aviation</ReestyledButton>
        <ReestyledButton onClick={() => handleSelectMarket("defense")}>Defense & Security Aviation</ReestyledButton>
        <ReestyledButton onClick={() => handleSelectMarket("executive")}>Executive Aviation</ReestyledButton>
      </Flex>

      {showRegisterOptions.show && (
        <Flex css={{ flexDirection: "column", gap: "38px" }}>
          <Text as="p" css={{ textAlign: "center" }}>
            What would you like to register?
          </Text>

          <Flex css={{ flexDirection: "column", alignItems: "center", gap: "24px" }}>
            <Button
              onClick={handleSelectCompanyRegistration}
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50px",
                p: "18px 28px"
              }}
            >
              New Company
            </Button>
            <Button
              onClick={handleSelectUserRegistration}
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50px",
                p: "18px 28px"
              }}
            >
              New User
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

const ReestyledButton = styled(Button, {
  width: "100%",
  height: "auto",
  p: "18px 28px"
})
