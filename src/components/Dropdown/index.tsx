import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { keyframes, styled } from "../../../stitches.config"

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuItem = DropdownMenuPrimitive.Item

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof StyledContent> & {
	children: ReactNode
}

export const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
	({ children, ...props }, forwardedRef) => {
		return (
			<DropdownMenuPrimitive.Portal>
				<StyledContent {...props} ref={forwardedRef}>
					{children}
					<StyledArrow />
				</StyledContent>
			</DropdownMenuPrimitive.Portal>
		)
	}
)

DropdownMenuContent.displayName = "DropdownMenuContent"

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

const StyledContent = styled(DropdownMenuPrimitive.Content, {
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

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
	fill: "white",
})
