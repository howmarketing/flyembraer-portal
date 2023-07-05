import { styled } from "../../../stitches.config"

export const Wrapper = styled("aside", {
	zIndex: "8",
	overflow: "hidden",
	width: "200px",
	opacity: 0,
	height: "100%",
	padding: "1rem 0",
	borderRight: "1px solid #0000001a",
	backgroundColor: "#FFFFFF",
	boxShadow: "0px 16px 16px #0000001a",
	transition: "0.15s",
	transform: "translateX(-200px)",

	variants: {
		siderbarOpened: {
			true: {
				opacity: 1,
				transform: "translateX(0)",
				transition: "0.15s",
				willChange: "transform transition",
			},
		},
	},
})

export const StyledNav = styled("nav", {
	overflowX: "hidden",
	overflowY: "hidden",

	"&:hover": {
		overflowY: "auto",
	},
})

export const MenuList = styled("ul", {
	height: "100%",
})

export const ListItem = styled("li", {
	width: "100%",
	p: "1rem 18px",
	textTransform: "uppercase",
	fontWeight: "$medium",
	fontSize: "14px",
	lineHeight: "1.5rem",
	color: "#005AAF",
	backgroundColor: "$white",
	cursor: "pointer",

	"& a": {
		color: "inherit",
	},

	"&:hover": {
		backgroundColor: "#005AAF08",
	},
})
