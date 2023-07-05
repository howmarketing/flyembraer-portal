import { PopoverArrow } from "@radix-ui/react-popover"

import { PopoverContent, PopoverTrigger } from "components/Popover"

import { keyframes, styled } from "../../../stitches.config"

const slideUpAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateY(2px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
})

const slideRightAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateX(-2px)" },
	"100%": { opacity: 1, transform: "translateX(0)" },
})

const slideDownAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateY(-2px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
})

const slideLeftAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateX(2px)" },
	"100%": { opacity: 1, transform: "translateX(0)" },
})

export const StyledTrigger = styled(PopoverTrigger, {
	all: "unset",
	cursor: "pointer",
	"& svg": {
		transform: "rotate(0deg)",
		transition: "0.2s ease",
	},

	"&[data-state='open']": {
		"& svg": {
			transform: "rotate(180deg)",
			transition: "0.2s ease",
		},
	},

	variants: {
		color: {
			light: {
				"& svg": {
					fill: "$white",
				},
			},
			dark: {
				"& svg": {
					fill: "$gray300",
				},
			},
		},
	},
	defaultVariants: {
		color: "light",
	},
})

export const StyledContent = styled(PopoverContent, {
	display: "flex",
	flexDirection: "column",
	gap: "16px",
	p: "24px 18px",
	/*  border: "1px solid #778CA2", */
	borderRadius: "4px",
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	animationDuration: "400ms",
	animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
	willChange: "transform, opacity",
	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},

	variants: {
		color: {
			light: {
				backgroundColor: "$white",
			},
			dark: {
				backgroundColor: "#444",
			},
		},
	},
	defaultVariants: {
		color: "light",
	},
})

export const StyledArrow = styled(PopoverArrow, {
	top: "-1px",
	position: "relative",

	variants: {
		color: {
			light: {
				fill: "$white",
			},
			dark: {
				fill: "#444",
			},
		},
	},
	defaultVariants: {
		color: "light",
	},
})
