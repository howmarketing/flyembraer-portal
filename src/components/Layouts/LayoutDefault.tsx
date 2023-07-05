import { ReactNode } from "react"

import { QueryClientProvider } from "react-query"

import Footer from "components/Footer"
import { NavbarDefault } from "components/Navbar/NavbarDefault"

import { queryClient } from "services/queryClient"

import { styled } from "../../../stitches.config"

type LayoutDefaultProps = {
	children: ReactNode
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<NavbarDefault />
			<StyledMain>{children}</StyledMain>
			<Footer />
		</QueryClientProvider>
	)
}

const StyledMain = styled("main", {
	position: "relative",
	minHeight: "100vh",
	overflow: "hidden",
})
