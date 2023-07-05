import { styled } from "../../../stitches.config"

export const Wrapper = styled("div", {
	maxWidth: "840px",

	"& .ck-content": {
		minHeight: "400px",
		height: "400px",
	},
})

export const Error = styled("span", {
	fontSize: "$sm",
	lineHeight: "14px",
	color: "$error",
	marginBottom: "$4",
	display: "inline-block",
})

export const Label = styled("label", {
	fontFamily: "$rubik",
	fontSize: "$sm",
	fontWeight: "$thin",
	marginBottom: "$4",
	display: "block",
})
