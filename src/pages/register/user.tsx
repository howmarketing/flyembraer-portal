import Head from "next/head"
import { useRouter } from "next/router"

import { ReactElement } from "react"

import type { NextPageWithLayout } from "pages/_app"

import { LayoutDefault } from "components/Layouts/LayoutDefault"
import { RegisterLayout } from "components/Layouts/RegisterLayout"

import { CompanyData, PersonalData } from "forms/register/user"

import { useCurrentStepsStore } from "stores/steps"

const RegiserUser: NextPageWithLayout = () => {
  const router = useRouter()

  const { ctx } = router.query

  const currentStep = useCurrentStepsStore((state) => state.currentStep)

  if (currentStep <= 1) {
    if (router.isReady) {
      router.push("/register")
    }
  }

  function getFormStep() {
    switch (currentStep) {
      case 3:
        return <CompanyData />
      case 4:
        return <PersonalData />
      default:
        break
    }
  }

  return (
    <>
      <Head>
        <title>Fly Embraer - User Registration</title>
      </Head>
      {ctx === "executive" ? <PersonalData /> : getFormStep()}
    </>
  )
}

export default RegiserUser

RegiserUser.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDefault>
      <RegisterLayout title="USER REGISTRATION">{page}</RegisterLayout>
    </LayoutDefault>
  )
}
