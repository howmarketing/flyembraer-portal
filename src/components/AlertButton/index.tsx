import { ReactNode } from "react"

import { styled, keyframes } from "@stitches/react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { Bell } from "components/Icons/Bell"

type AlertButtonProps = {
	hasNotification?: boolean
}

const Content = ({ children, ...props }: { children: ReactNode }) => {
	return (
		<PopoverPrimitive.Portal>
			<StyledContent sideOffset={5} {...props}>
				{children}
				<StyledArrow />
			</StyledContent>
		</PopoverPrimitive.Portal>
	)
}

const AlertButton = ({ hasNotification = false }: AlertButtonProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<ButtonWrapper aria-label="Alert Button" hasNotification={hasNotification}>
					<Bell />
				</ButtonWrapper>
			</PopoverTrigger>
			<PopoverContent>
				<span>No notifications</span>
			</PopoverContent>
		</Popover>
	)
}

export default AlertButton

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverContent = Content

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

const StyledContent = styled(PopoverPrimitive.Content, {
	borderRadius: 4,
	padding: 20,
	width: 260,
	backgroundColor: "white",
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
	// "&:focus": {
	//   boxShadow: `rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px, black 0px 0px 0px 2px;`
	// }
})

const StyledArrow = styled(PopoverPrimitive.Arrow, {
	fill: "white",
})

const ButtonWrapper = styled("button", {
	width: "32px",
	height: "32px",
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
