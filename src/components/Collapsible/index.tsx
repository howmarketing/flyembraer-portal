import { ComponentPropsWithoutRef, ComponentPropsWithRef, forwardRef, ReactNode } from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { keyframes, styled } from "../../../stitches.config"

type CollapsibleProps = ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
	children: ReactNode
}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(({ children, ...props }, forwardedRef) => (
	<CollapsiblePrimitive.Root ref={forwardedRef} {...props}>
		{children}
	</CollapsiblePrimitive.Root>
))

type CollapsiblePropsTrigger = ComponentPropsWithRef<typeof CollapsiblePrimitive.Trigger> & {
	children: ReactNode
}

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, CollapsiblePropsTrigger>(
	({ children, ...props }, forwardedRef) => (
		<CollapsiblePrimitive.Trigger ref={forwardedRef} {...props}>
			{children}
		</CollapsiblePrimitive.Trigger>
	)
)

type CollapsiblePropsContent = ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> & {
	children: ReactNode
}

export const CollapsibleContent = forwardRef<HTMLDivElement, CollapsiblePropsContent>(
	({ children, ...props }, forwardedRef) => (
		<StyledContent ref={forwardedRef} {...props}>
			{children}
		</StyledContent>
	)
)

const slideDown = keyframes({
	from: { height: 0 },
	to: { height: "var(--radix-collapsible-content-height)" },
})

const slideUp = keyframes({
	from: { height: "var(--radix-collapsible-content-height)" },
	to: { height: 0 },
})

const StyledContent = styled(CollapsiblePrimitive.Content, {
	overflow: "hidden",

	"&[data-state=open]": {
		animation: `${slideDown} 300ms ease-out`,
	},

	"&[data-state=closed]": {
		animation: `${slideUp} 300ms ease-out`,
	},
})

Collapsible.displayName = "Collapsible"
CollapsibleTrigger.displayName = "CollapsibleTrigger"
CollapsibleContent.displayName = "CollapsibleContent"
