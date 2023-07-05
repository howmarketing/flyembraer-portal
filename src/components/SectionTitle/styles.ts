import { styled } from "../../../stitches.config"

export const Wrapper = styled("div", {
	py: "$16",
	borderBottom: "1px solid $blue",
})

export const Title = styled("h4", {
	textTransform: "uppercase",
	fontSize: "$lg",
	fontWeight: "$medium",
	lineHeight: "32px",
	color: "$gray500",
})
