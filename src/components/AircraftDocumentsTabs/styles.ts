import { styled } from "../../../stitches.config"

import { Tabs, TabsContent, TabsTrigger, TabsList } from "components/Tabs"

export const StyledTabs = styled(Tabs, {
	width: "fit-content",
	height: "auto",
})

export const StyledTabsList = styled(TabsList, {
	"@media (max-width: 900px)": {},
})

export const StyledTrigger = styled(
	TabsTrigger,
	{
		all: "unset",
		appearance: "none",
		display: "inline-block",
		p: "10px 1rem",
		borderRadius: "8px 8px 0px 0px",
		backgroundColor: "$brand-gradient",
		cursor: "pointer",

		"& span": {
			display: "inline-flex",
			alignItems: "center",
			gap: "12px",
			fontWeight: "$medium",
			fontSize: "20px",
			lineHeight: "32px",
			color: "$white",

			"& svg": {
				fill: "white",
				willChange: "transform",
				transform: "rotate(180deg)",
				transition: "transform 0.2s",
			},
		},

		"&[data-state='active']": {
			backgroundColor: "$white",

			"& span": {
				color: "$brand-primary",

				"& svg": {
					fill: "$brand-primary",
					willChange: "transform",
					transform: "rotate(0deg)",
					transition: "transform 0.2s",
				},
			},
		},

		"&:focus-visible": {
			outline: "-webkit-focus-ring-color auto 1px",
		},
	},
	{
		"&:not([data-state='active'])": {
			cursor: "pointer",
		},
	}
)

export const StyledTabsContent = styled(TabsContent, {
	p: "1rem",
	borderRadius: "0px 0px 8px 8px",
	backgroundColor: "$white",

	"&[data-state='active']": {
		display: "flex",
		gap: "48px",

		"& ul": {
			flex: 1,
			height: "fit-content",
			"@media (max-width: 900px)": {},
		},

		"& div[data-divisor]": {
			order: 1,
			width: "3px",
			borderRadius: "3px",
			backgroundColor: "$brand-primary",
		},

		"& ul:last-of-type": {
			order: 2,
		},

		"@media (max-width: 900px)": {
			flexDirection: "column",
		},
	},
})

export const StyledList = styled("ul", {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
	rowGap: "1rem",
})

export const StyledLink = styled("a", {
	minWidth: "130px",

	display: "inline-flex",
	alignItems: "center",
	gap: "0.875rem",

	fontWeight: "$normal",
	fontSize: "14px",
	lineHeight: "24px",
	color: "$brand-primary",

	textDecoration: "underline",
})

export const StyledText = styled("span", {
	fontWeight: "$thin !important",
	fontSize: "clamp(1rem, 1.25vw, 1.25rem) !important",
})
