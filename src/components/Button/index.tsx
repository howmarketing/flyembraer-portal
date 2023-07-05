import { Spinner } from "components/Spinner"
import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from "react"

import { styled } from "../../../stitches.config"

type ButtonProps = {
	asChild?: ReactNode
	as?: ElementType
	href?: string
	children: ReactNode
	variant?: "primary" | "secondary" | "tertiary" | "big"
	iconRight?: ReactNode
	isLoading?: boolean
	color?: "primary"
} & ComponentPropsWithRef<typeof StyledButton>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, iconRight, isLoading = false, ...props }, forwardedRef) => {
		return (
			<StyledButton {...props} ref={forwardedRef}>
				{isLoading ? (
					<Spinner width={12} height={12} />
				) : (
					<>
						{children}
						{iconRight && <IconWrapper>{iconRight}</IconWrapper>}
					</>
				)}
			</StyledButton>
		)
	}
)

Button.displayName = "Button"
export default Button

const StyledButton = styled("button", {
	appearance: "none",
	border: "none",
	userSelect: "none",
	textDecoration: "none",

	width: "11.125rem",
	height: "2.5rem",

	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "8px",
	borderRadius: "$1",

	fontFamily: "$roboto",
	fontSize: "$sm",
	lineHeight: "$1",
	fontWeight: "$medium",

	backgroundColor: "transparent",

	transition: "0.25s",
	cursor: "pointer",

	"&[disabled]": {
		cursor: "not-allowed",
		filter: "brightness(0.5)",
	},

	"&:not([disabled])": {
		"&:hover": {
			filter: "brightness(0.75)",
		},
	},

	variants: {
		variant: {
			primary: {
				color: "$white",
				backgroundColor: "$brand-primary",
			},
			secondary: {
				color: "$brand-primary",
				backgroundColor: "$white",
				border: "1px solid $brand-primary",
			},
			tertiary: {
				width: "auto",
				height: "auto",
				fontSize: "$sm",
				fontWeight: "$normal",
				color: "$gray200",
				textDecoration: "underline",
			},
			big: {
				width: "29.375rem",
				height: "7.875rem",
				fontSize: "$xl",
				color: "$black200",
				border: "1px solid $brand-primary",
			},
		},
		color: {
			primary: {
				color: "$brand-primary",
			},
		},
	},
	defaultVariants: {
		variant: "primary",
	},
})

const IconWrapper = styled("div", {
	width: "20px",
	height: "20px",
	display: "inline-grid",
	placeContent: "center",
})
