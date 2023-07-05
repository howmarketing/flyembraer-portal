import { useRouter } from "next/router"

import { ComponentPropsWithoutRef, ReactNode, useEffect, useState } from "react"

import { QueryClientProvider } from "react-query"

// import { AuthProvider } from "react-oauth2-code-pkce"

import { useGetProfile } from "api/profile/getProfile"

// import { Box } from "components/Box"
import { Breadcrumbs } from "components/Breadcrumbs"
// import Button from "components/Button"
import { Flex } from "components/Flex"
import Footer from "components/Footer"
import { Navbar } from "components/Navbar"
import { Sidebar } from "components/Sidebar"
import { Spinner } from "components/Spinner"
// import Text from "components/Text"

// import { useAuth } from "hooks/useAuth"
import { useGetBreakpoint } from "hooks/useGetBreakpoint"

// import { authConfig } from "services/authConfig"
import { queryClient } from "services/queryClient"

import { styled } from "../../../stitches.config"

type LoggedLayoutProps = {
	children: ReactNode
	borderedPanel?: boolean
} & ComponentPropsWithoutRef<typeof Main>

const Layout = ({ children, borderedPanel = true, ...props }: LoggedLayoutProps) => {
	const router = useRouter()

	// const { error, loginInProgress, login, token } = useAuth()

	const { isSuccess } = useGetProfile({
		onError() {
			router.push("/")
		},
		retry: 0,
		cacheTime: 1000 * 60 * 15,
		staleTime: 1000 * 60 * 15 /* 15 minutes */,
	})

	const isTablet = useGetBreakpoint("web")

	const [sidebarOpened, setToggleSidebar] = useState(true)

	// If for some reason the user hides the sidebar and increases the
	// device screen width, the sidebar is "forced" to appear
	useEffect(() => {
		if (isTablet) {
			setToggleSidebar(true)
		}
	}, [isTablet])

	// if (isLoading) {
	//   return (
	//     <Box css={{ width: "100%", height: "100vh", display: "grid", placeContent: "center" }}>
	//       <Spinner />
	//     </Box>
	//   )
	// }

	// if (error) {
	//   return (
	// <Flex
	//   style={{
	//     flexDirection: "column",
	//     width: "100%",
	//     height: "100vh",
	//     justifyContent: "center",
	//     alignItems: "center"
	//   }}
	// >
	//   <Text color={"error"}>An error occurred during authentication: {error}</Text>
	//   <Button onClick={() => router.reload()}>Reload</Button>
	// </Flex>
	//   )
	// }

	// if (!token) {
	//   login()
	// }

	function handleToggleSidebar(toggle: boolean) {
		setToggleSidebar(toggle)
	}

	return isSuccess ? (
		<>
			<Navbar handleToggleSidebar={handleToggleSidebar} sidebarOpened={sidebarOpened} />

			<Wrapper sidebarOpened={sidebarOpened && isTablet}>
				<Sidebar sidebarOpened={sidebarOpened} handleToggleSidebar={handleToggleSidebar} />
				<div>
					<Breadcrumbs />
					<Main borderedPanel={borderedPanel} {...props}>
						{children}
					</Main>
				</div>
				<Footer />
			</Wrapper>
		</>
	) : (
		<Flex
			css={{
				flexDirection: "column",
				width: "100%",
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Spinner />
		</Flex>
	)
}

export const LoggedLayout = ({ children, ...props }: LoggedLayoutProps) => {
	return (
		// <AuthProvider authConfig={authConfig}>
		<QueryClientProvider client={queryClient}>
			<Layout {...props}>{children}</Layout>
		</QueryClientProvider>
		// </AuthProvider>
	)
}

const Wrapper = styled("div", {
	height: "fit-content",
	// height: "calc(100vh - 56px)",
	display: "grid",
	gridTemplateColumns: "0 1fr",
	gridTemplateRows: "1fr 90px",
	transition: "0.15s",
	backgroundColor: "#F7F8FA",

	// Footer
	"& > :nth-child(3)": {
		gridArea: "2 / 1 / 3 / 3",
	},

	variants: {
		sidebarOpened: {
			true: {
				transition: "0.15s",
				gridTemplateColumns: "200px 1fr",
			},
		},
	},
})

const Main = styled("main", {
	padding: "2rem 1rem",
	borderRadius: "4px",
	bg: "#FFFFFF",

	"@largeMobile": {
		padding: "2rem",
	},

	"@maxLargeMobile": {
		margin: "2rem 1rem",
	},

	variants: {
		borderedPanel: {
			true: {
				margin: 0,
				"@largeMobile": {
					margin: "2rem calc(3.5rem - 5px) 4rem 3.5rem",
				},
			},
			false: {
				margin: 0,
			},
		},
	},
})
