import { PopoverArrow } from "@radix-ui/react-popover"
import { styled } from "../../../stitches.config"

export const StyledArrow = styled(PopoverArrow, {
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
