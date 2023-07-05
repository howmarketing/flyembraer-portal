import { styled } from "../../../stitches.config"

export const Wrapper = styled("div", {})

export const WrapperInput = styled("div", {
	marginTop: "$4",
	display: "flex",
	alignItems: "center",
	boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",
	px: "$16",
	height: "2.0625rem",
	background: "$white",
	border: "1px solid $gray100",
	borderRadius: "$2",
	maxWidth: "200px",
	width: "100%",

	input: {
		width: "100%",
		height: "100%",
		display: "inline-block",

		color: "$gray200",
		border: "none",
		fontSize: "$sm",

		"&:disabled": {
			background: "$gray100",
			cursor: "not-allowed",
		},

		"&:focus": {
			border: "none",
			boxShadow: "none",
		},
	},

	"> svg": {
		flexShrink: 0,
	},
})

export const Label = styled("label", {
	fontFamily: "$rubik",
	fontSize: "$sm",
	fontWeight: "$thin",
	display: "flex",
	flexDirection: "column",
	gap: "$4",
})

export const Error = styled("span", {
	fontSize: "$sm",
	lineHeight: "14px",
	color: "$error",
})
