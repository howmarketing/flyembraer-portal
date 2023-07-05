import Head from "next/head"
import { ReactElement } from "react"

import type { NextPageWithLayout } from "pages/_app"

import { Hero } from "components/Hero"
import { LayoutDefault } from "components/Layouts/LayoutDefault"

import { ForgotPasswordForm } from "forms/forgot-password"

const ForgotPassword: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Forgot Password</title>
			</Head>
			<Hero
				css={{
					minHeight: "560px",
					height: "calc(100vh - 146px)",
					zIndex: "-1",

					"&::after": {
						content: "",
						position: "absolute",
						width: "100%",
						height: "100%",
						backdropFilter: "blur(6.5px)",
					},
				}}
			/>
			<ForgotPasswordForm />
		</>
	)
}

export default ForgotPassword

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
	return <LayoutDefault>{page}</LayoutDefault>
}
