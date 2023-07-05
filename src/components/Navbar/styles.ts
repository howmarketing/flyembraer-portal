import { styled } from "../../../stitches.config"

export const StyledNav = styled("nav", {
	height: "56px",
	padding: "0 1.75rem",
	display: "grid",
	gridTemplateColumns: "auto 1fr",
	alignItems: "center",
	backgroundColor: "$brand-primary",

	"@maxLargeMobile": {
		padding: "0 1rem",
	},
})

export const StyledBox = styled("div", {
	display: "grid",
	gridTemplateColumns: "auto 1fr",
	alignItems: "center",
	gap: "15px",
})

export const StyledAction = styled("div", {
	py: "3px",
	display: "flex",
	alignItems: "center",
	gap: "26px",
	marginLeft: "auto",
})

export const StyledLink = styled("a", {
	fontWeight: "$medium",
	fontSize: "14px",
	lineHeight: "18px",
	color: "$white",
	cursor: "pointer",
	marginLeft: "auto",
})

export const StyledCreateButton = styled("button", {
	padding: "10px 14px",
	background: "$white",
	border: "none",
	borderRadius: "4px",
	fontWeight: 500,
	fontSize: "14px",
	color: "$brand-primary",
	cursor: "pointer",
})

export const StyledMenuButton = styled("button", {
	border: "none",
	backgroundColor: "transparent",
})

export const StyledButton = styled("button", {
	border: "none",
	fontWeight: 500,
	backgroundColor: "transparent",
	color: "$white",
	cursor: "pointer",
})
