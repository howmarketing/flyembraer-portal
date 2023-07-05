import { styled } from "../../../../stitches.config"

export const WrapperModal = styled("div", {
	width: "100%",
	maxWidth: "800px",
	height: "100%",
	maxHeight: "90vh",
	backgroundColor: "$white",
	borderRadius: "20px",
	position: "relative",
	padding: "48px",
	display: "flex",
	flexDirection: "column",

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

export const TitleMessage = styled("h2", {
	whiteSpace: "break-spaces",
})

export const WrapperMessage = styled("div", {
	marginTop: "48px",
	flex: 1,
	overflowY: "auto",
	whiteSpace: "initial",
})

export const WrapperButton = styled("div", {
	display: "flex",
	justifyContent: "center",
	marginTop: "48px",
	alignContent: "end",
})
