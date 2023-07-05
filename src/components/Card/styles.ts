import { styled } from "../../../stitches.config"

export const Wrapper = styled("div", {
	width: "100%",
	maxWidth: "320px",
	height: "min-content",
	backgroundColor: "#FFFFFF",
	boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.1)",
	borderRadius: "8px",

	"@largeMobile": {
		minWidth: "320px",
	},

	"@web": {
		minWidth: "300px",
		maxWidth: "unset",
		width: "var(--card-size)",
	},
})

export const IconWrapper = styled("div", {
	width: "36px",
	height: "36px",
	display: "inline-grid",
	placeContent: "center",
})

export const HeaderContainer = styled("div", {
	width: "100%",
	maxHeight: "68px",
	padding: "16px",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	gap: "12px",

	variants: {
		isCliclable: {
			true: {
				cursor: "pointer",

				"&[data-state=open]": {
					[`& ${IconWrapper}:last-child`]: {
						transition: "0.125s",
						transform: "rotate(-90deg)",
					},
				},

				"&[data-state=closed]": {
					[`& ${IconWrapper}:last-child`]: {
						transition: "0.125s",
					},
				},
			},
		},
	},
})

export const BodyContainer = styled("div", {
	width: "var(--wrapper-size)",
	height: "auto",
	borderTop: "1px solid $gray400",
})

export const CardTitle = styled("h3", {
	maxWidth: "max-content",
	overflow: "hidden",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
	fontWeight: "$light",
	fontSize: "20px",
	lineHeight: "30px",
	color: "$brand-primary",

	"@web": {
		maxWidth: "unset",
		width: "fit-content",
		overflow: "unset",
		whiteSpace: "unset",
		textOverflow: "unset",
	},
})
