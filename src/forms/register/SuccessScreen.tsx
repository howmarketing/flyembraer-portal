import { useRouter } from "next/router"

import Button from "components/Button"
import { Flex } from "components/Flex"
import { Success } from "components/Icons/Success"
import Text from "components/Text"

import { useCurrentStepsStore } from "stores/steps"

export const SuccessScreen = () => {
  const router = useRouter()
  const setStep = useCurrentStepsStore((state) => state.setStep)

  function handleReturnToHomePage() {
    router.push("/")
    setTimeout(() => {
      setStep(1)
    }, 1000)
  }
  return (
    <Flex
      css={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "24px"
      }}
    >
      <Success />
      <Text size={"xxl"} color={"black"} weight={"thin"}>
        Your register is complete.
      </Text>
      <Button as="a" onClick={handleReturnToHomePage}>
        Back to home page
      </Button>
    </Flex>
  )
}
