import Head from "next/head"
import { useRouter } from "next/router"

import { ReactElement, Suspense } from "react"

import type { NextPageWithLayout } from "pages/_app"

import { LayoutDefault } from "components/Layouts/LayoutDefault"
import { RegisterLayout } from "components/Layouts/RegisterLayout"

import { useCurrentStepsStore } from "stores/steps"

import { CompanyData, CompanyAdministrator } from "forms/register/company"

import { RegisterCompanyContextProvider } from "contexts/RegisterCompanyContext"
import { Spinner } from "components/Spinner"

const Company: NextPageWithLayout = () => {
  const router = useRouter()
  const { ctx } = router.query

  const currentStep = useCurrentStepsStore((state) => state.currentStep)

  if (currentStep <= 1) {
    if (router.isReady) {
      router.push("/register")
    }
  }

  function getFormStep() {
    if (ctx === "executive") {
      switch (currentStep) {
        case 2:
          return <CompanyData />
        case 3:
          return <CompanyAdministrator />
        default:
          break
      }
      return
    }
    switch (currentStep) {
      case 3:
        return <CompanyData />
      case 4:
        return <CompanyAdministrator />
      default:
        break
    }
  }

  return (
    <>
      <Head>
        <title>Fly Embraer - Register As A Company</title>
      </Head>
      <RegisterCompanyContextProvider>
        <Suspense fallback={<Spinner />}>{getFormStep()}</Suspense>
      </RegisterCompanyContextProvider>
    </>
  )
}

export default Company

Company.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDefault>
      <RegisterLayout title="REGISTER AS A COMPANY">{page}</RegisterLayout>
    </LayoutDefault>
  )
}
