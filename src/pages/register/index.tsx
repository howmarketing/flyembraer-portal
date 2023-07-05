import Head from "next/head"

import { ReactElement, useEffect } from "react"

import type { NextPageWithLayout } from "pages/_app"

import { LayoutDefault } from "components/Layouts/LayoutDefault"
import { RegisterLayout } from "components/Layouts/RegisterLayout"

import { RegisterForm } from "forms/register"

import { useCurrentStepsStore } from "stores/steps"

const Register: NextPageWithLayout = () => {
	const setStep = useCurrentStepsStore((state) => state.setStep)

	useEffect(() => {
		setStep(1)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<Head>
				<title>Fly Embraer - Register</title>
			</Head>
			<RegisterForm />
		</>
	)
}

export default Register

Register.getLayout = function getLayout(page: ReactElement) {
	return (
		<LayoutDefault>
			<RegisterLayout title="ACCOUNT REGISTRATION">{page}</RegisterLayout>
		</LayoutDefault>
	)
}
