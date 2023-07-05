import { ReactNode } from "react"
import { styled } from "../../../stitches.config"

export type TextProps = {
	as?: React.ElementType
	children: ReactNode
	color?:
		| "black"
		| "gray100"
		| "gray200"
		| "gray300"
		| "white"
		| "brand-primary"
		| "brand-secondary"
		| "error"
		| "success"
	size?: "xsm" | "sm" | "md" | "lg" | "xl" | "xxl"
	weight?: "thin" | "normal" | "medium" | "bold"
} & React.ComponentProps<typeof StyledText>

const Text = ({ children, color, size, weight, ...props }: TextProps) => {
	return (
		<StyledText color={color} size={size} weight={weight} {...props}>
			{children}
		</StyledText>
	)
}

export default Text

const StyledText = styled("span", {
	lineHeight: "$1",

	variants: {
		color: {
			white: {
				color: "$white",
			},
			black: {
				color: "$black200",
			},
			gray100: {
				color: "$gray100",
			},
			gray200: {
				color: "$gray200",
			},
			gray300: {
				color: "$gray300",
			},
			"brand-primary": {
				color: "$brand-primary",
			},
			"brand-secondary": {
				color: "$brand-secondary",
			},
			error: {
				color: "$error",
			},
			success: {
				color: "$success",
			},
		},
		size: {
			xsm: {
				fontSize: "$xsm",
			},
			sm: {
				fontSize: "$sm",
			},
			md: {
				fontSize: "$md",
			},
			lg: {
				fontSize: "$lg",
			},
			xl: {
				fontSize: "$xl",
				lineHeight: "$2",
			},
			xxl: {
				fontSize: "$xxl",
				lineHeight: "$3",
			},
		},
		weight: {
			thin: {
				fontWeight: "$thin",
			},
			normal: {
				fontWeight: "$normal",
			},
			medium: {
				fontWeight: "$medium",
			},
			bold: {
				fontWeight: "$bold",
			},
		},
	},
	defaultVariants: {
		color: "black",
		size: "sm",
		weight: "normal",
	},
})
