import Head from "next/head"
import { useRouter } from "next/router"

import { ReactElement, useEffect } from "react"

import type { NextPageWithLayout } from "pages/_app"

import { useGetVerifyToken } from "api/password/getVerifyToken"

import { Hero } from "components/Hero"
import { LayoutDefault } from "components/Layouts/LayoutDefault"
import { Spinner } from "components/Spinner"

import { ResetPassowordForm } from "forms/forgot-password/reset"
import { Box } from "components/Box"

const ResetPassword: NextPageWithLayout = () => {
	const router = useRouter()

	const { token } = router.query
	const tokenTransformed = token as string | undefined

	const { data, refetch } = useGetVerifyToken(tokenTransformed, {
		onError() {
			router.push("/")
		},
		refetchOnWindowFocus: false,
		retry: 1,
	})

	useEffect(() => {
		if (tokenTransformed) {
			refetch()
		}
	}, [tokenTransformed, refetch])

	return data ? (
		<>
			<Head>
				<title>Fly Embraer - Reset Password</title>
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
						height: "calc(100vh - 146px)",
						backdropFilter: "blur(6.5px)",
					},
				}}
			/>
			<ResetPassowordForm userData={data} />
		</>
	) : (
		<Box css={{ minHeight: "560px", height: "calc(100vh - 146px)" }}>
			<Spinner centralize />
		</Box>
	)
}

export default ResetPassword

ResetPassword.getLayout = function getLayout(page: ReactElement) {
	return <LayoutDefault>{page}</LayoutDefault>
}
