import Image from "next/image"

import * as PopoverPrimitive from "@radix-ui/react-popover"

import { styled, keyframes } from "../../../stitches.config"

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

export const StyledContent = styled(PopoverPrimitive.Content, {
	borderRadius: 4,
	padding: ".5rem",
	width: 172,
	zIndex: 8,
	backgroundColor: "white",
	color: "$brand-secondary",
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	"@media (prefers-reduced-motion: no-preference)": {
		animationDuration: "400ms",
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
		willChange: "transform, opacity",
		'&[data-state="open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade },
		},
	},
})

export const StyledArrow = styled(PopoverPrimitive.Arrow, {
	fill: "white",
})

export const ButtonWrapper = styled("button", {
	width: "36px",
	height: "36px",
	backgroundColor: "transparent",
	border: "none",
	borderRadius: "100%",
	display: "inline-grid",
	placeContent: "center",

	"&:hover": {
		backgroundColor: "#f1f4f6",
	},

	variants: {
		hasNotification: {
			true: {
				position: "relative",

				"&::after": {
					content: "",
					position: "absolute",
					width: "8px",
					height: "8px",
					borderRadius: "100%",
					backgroundColor: "#FE4D97",
					top: "5px",
					right: "5px",
					outline: "1px solid white",
				},
			},
		},
	},
})

export const StyledImage = styled(Image, {
	width: "36px",
	height: "36px",
	borderRadius: "100%",
})

export const StyledBox = styled("div", {
	display: "grid",
	gridAutoFlow: "row",
})

export const StyledItem = styled("button", {
	padding: "1rem",
	border: "none",
	textAlign: "start",
	fontWeight: "500",
	fontSize: "14px",
	backgroundColor: "transparent",
	color: "$brand-secondary",

	"&:hover": {
		backgroundColor: "#005AAF08",
	},
})
