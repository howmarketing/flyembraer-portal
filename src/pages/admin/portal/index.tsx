import Link from "next/link"
import { ReactElement } from "react"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { NextPageWithLayout } from "pages/_app"
import { styled } from "../../../../stitches.config"

const Portal: NextPageWithLayout = () => {
	return (
		<>
			<StyledWrapper>
				<Link href={"/admin/portal/aircraft"}>
					<StyledLink>Aircraft</StyledLink>
				</Link>
				<Link href={"/admin/portal/application"}>
					<StyledLink>Application</StyledLink>
				</Link>
				<Link href={"/admin/portal/association"}>
					<StyledLink>Association</StyledLink>
				</Link>
				<Link href={"/admin/portal/category"}>
					<StyledLink>Category</StyledLink>
				</Link>
				<Link href={"/admin/portal/company-type"}>
					<StyledLink>Company Type</StyledLink>
				</Link>
				<Link href={"/admin/portal/job-function"}>
					<StyledLink>Job Function</StyledLink>
				</Link>
				<Link href={"/admin/portal/market-type"}>
					<StyledLink>Market Type</StyledLink>
				</Link>
			</StyledWrapper>
		</>
	)
}

const StyledWrapper = styled("div", {
	marginBottom: "4rem",
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	gap: "2rem",
	justifyContent: "flex-start",

	"@maxDesktop": {
		gridTemplateColumns: "1fr 1fr",
	},

	"@maxWeb": {
		gridTemplateColumns: "1fr",
	},
})

const StyledLink = styled("a", {
	padding: "1.5rem",
	display: "grid",
	gridTemplateColumns: "auto 1fr",
	gap: "0.75rem",
	alignItems: "center",
	borderRadius: "1rem",
	border: "1px solid #005AAF65",
	textAlign: "left",
	fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
	backgroundColor: "transparent",
	color: "$brand-primary",

	"&:hover": {
		border: "1px solid #005AAFBB",
	},
})

export default Portal

Portal.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
