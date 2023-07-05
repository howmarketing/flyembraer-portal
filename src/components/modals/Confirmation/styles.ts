import { styled } from "../../../../stitches.config"

export const WrapperModal = styled("div", {
	width: "100%",
	maxWidth: "400px",
	height: "fit-content",
	backgroundColor: "$white",
	borderRadius: "8px",
	position: "relative",
	padding: "32px 24px",
	display: "flex",
	flexDirection: "column",
	textAlign: "center",

	"@media (max-width: 640px)": {
		borderRadius: "0",
		padding: "32px 24px",
	},
})

export const ButtonClose = styled("button", {
	all: "unset",
	position: "absolute",
	top: "20px",
	right: "20px",
	cursor: "pointer",
	borderRadius: "15px",
	width: "30px",
	height: "29px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "all 0.2s ease-in-out",
	outline: "none",

	"&:focus, &:hover": {
		boxShadow: "0 0 0 2px $colors$blue",
	},
})

export const Title = styled("h2", {
	whiteSpace: "break-spaces",
	fontWeight: 500,
	fontSize: "20px",
	lineHeight: "23px",
	color: "$brand-primary",
})

export const Description = styled("p", {
	marginTop: "8px",
})

export const WrapperButtons = styled("div", {
	display: "flex",
	justifyContent: "center",
	marginTop: "24px",
	alignContent: "end",
	gap: "8px",
})
