import { PopoverArrow } from "@radix-ui/react-popover"

import { PopoverContent, PopoverTrigger } from "components/Popover"

import { keyframes, styled } from "../../../stitches.config"

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
					fill: "$black100",
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
	gap: "6px",
	p: "2.5vh 2vw",
	border: "1px solid #778CA2",
	zIndex: "888888",
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	animationDuration: "400ms",
	animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
	willChange: "transform, opacity",
	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},

	variants: {
		color: {
			light: {
				backgroundColor: "$white",
			},
			dark: {
				backgroundColor: "$black100",
			},
		},
	},
	defaultVariants: {
		color: "light",
	},

	whiteSpace: "nowrap",
	left: "50%",
	transform: "translateX(-35%) translateY(5%)",
})

export const StyledArrow = styled(PopoverArrow, {
	top: "-1px",
	position: "absolute",

	variants: {
		color: {
			light: {
				fill: "$white",
			},
			dark: {
				fill: "$black100",
			},
		},
	},
	defaultVariants: {
		color: "light",
	},
})
