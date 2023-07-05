import { styled } from "../../../stitches.config"

export const StyledPagination = styled("div", {
	marginTop: "20px",
	display: "grid",
	placeItems: "center",
	fontSize: "12px",
})

export const StyledBox = styled("div", {
	justifySelf: "flex-start",
	fontSize: "12px",
	color: "#777",
})

export const StyledSelect = styled("select", {
	width: "48px",
	height: "24px",
	borderRadius: "4px",
	border: "solid 1px #c4c4c4",
	fontSize: "12px",
	color: "#777",
})

export const StyledOption = styled("option", {
	textAlign: "center",
})

export const StyledNav = styled("nav", {
	marginTop: "20px",
	display: "grid",
	gridAutoFlow: "column",
	placeItems: "center",
	gap: "4px",
	userSelect: "none",
})

export const StyledButton = styled("button", {
	width: "24px",
	height: "24px",
	display: "grid",
	placeItems: "center",
	border: "none",
	borderRadius: "4px",
	backgroundColor: "transparent",
	color: "#444",

	"&:first-child": {
		marginRight: "-7px",
	},

	"&:last-child": {
		marginLeft: "-7px",
	},
})
