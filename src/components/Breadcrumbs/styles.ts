import { styled } from "../../../stitches.config"

export const StyledList = styled("ul", {
	width: "100%",
	height: "auto",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	margin: "1rem 3.5rem",

	"@maxLargeMobile": {
		margin: "1rem",
	},
})

export const StyledItem = styled("li", {
	color: "$brand-primary",
	fontSize: "14px",
	lineHeight: "17px",
	fontWeight: "$medium",
	cursor: "pointer",

	"& a": {
		textCecoration: "underline",
		color: "inherit",
	},

	"&:not(:first-child)": {
		"&::before": {
			content: ">",
			padding: "0 4px",
			color: "inherit",
			fontWeight: "bold",
		},
	},
	variants: {
		isCurrentPath: {
			true: {
				fontWeight: "$bold",
				cursor: "default",
			},
		},
	},
})
