import { HelpPopoverButton } from "components/HelpPopoverButton"
import { LogoEmbraer } from "components/Icons/LogoEmbraer"
import Text from "components/Text"

import { styled } from "../../../stitches.config"

const Footer = () => {
	return (
		<FooterWrapper>
			<div>
				<a href="https://embraer.com/" target="_blank" rel="noreferrer">
					<LogoEmbraer width="142" height="24" />
				</a>
			</div>

			<div>
				<Text weight={"normal"} size={"sm"} color="gray300" css={{ justifySelf: "center" }}>
					ICP License: 京ICP备18062466号-1
				</Text>
			</div>

			<div>
				<HelpPopoverButton color="dark" />
			</div>
		</FooterWrapper>
	)
}

export default Footer

const FooterWrapper = styled("footer", {
	display: "flex",
	flexDirection: "column",
	height: "fit-content",
	minHeight: "90px",
	padding: "0.75rem 1.75rem",
	alignItems: "center",
	gap: "2rem",
	backgroundColor: "$black100",

	"@tablet": {
		height: "auto",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: "2.75rem",
	},
})
