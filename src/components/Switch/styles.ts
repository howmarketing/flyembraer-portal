import * as Switch from "@radix-ui/react-switch"

import { styled } from "../../../stitches.config"

export const Wrapper = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "$8",
})

export const Label = styled("label", {
	color: "#72767E",
	fontSize: "$sm",
	lineHeight: "24px",
	cursor: "pointer",
})

export const SwitchRoot = styled(Switch.Root, {
	all: "unset",
	width: 32,
	height: 20,
	backgroundColor: "$gray400",
	borderRadius: "9999px",
	position: "relative",
	cursor: "pointer",
	transition: "background-color 200ms",

	"&[data-state='checked']": {
		backgroundColor: "$brand-primary",
	},
})

export const SwitchThumb = styled(Switch.Thumb, {
	display: "block",
	width: 12,
	height: 12,
	backgroundColor: "#F2F2F3",
	borderRadius: "9999px",
	transition: "transform 100ms",
	transform: "translateX(4px)",
	willChange: "transform",
	'&[data-state="checked"]': { transform: "translateX(16px)" },
})
