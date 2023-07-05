import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { ComponentPropsWithoutRef, ComponentPropsWithRef, forwardRef, ReactNode } from "react"
import { keyframes, styled } from "../../../stitches.config"

type AccordionProps = ComponentPropsWithRef<typeof AccordionPrimitive.Root> & {
	children: ReactNode
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ children, ...props }, ref) => (
	<AccordionPrimitive.Root ref={ref} {...props}>
		{children}
	</AccordionPrimitive.Root>
))

Accordion.displayName = "Accordion"

type AccordionItemProps = ComponentPropsWithRef<typeof AccordionPrimitive.Item> & {
	children: ReactNode
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({ children, ...props }, ref) => (
	<AccordionPrimitive.Item ref={ref} {...props}>
		{children}
	</AccordionPrimitive.Item>
))

AccordionItem.displayName = "AccordionItem"

type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
	children: ReactNode
}

export const AccordionTrigger = ({ children, ...props }: AccordionTriggerProps) => (
	<AccordionPrimitive.Header>
		<AccordionPrimitive.Trigger {...props}>{children}</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
)

type AccordionContentProps = ComponentPropsWithoutRef<typeof StyledContent> & {
	children: ReactNode
}

export const AccordionContent = ({ children, ...props }: AccordionContentProps) => (
	<StyledContent {...props}>{children}</StyledContent>
)

const slideDown = keyframes({
	from: {
		height: 0,
		opacity: 0,
	},
	to: {
		height: "var(--radix-accordion-content-height)",
		opacity: 1,
	},
})

const slideUp = keyframes({
	from: {
		height: "var(--radix-accordion-content-height)",
		opacity: 1,
	},
	to: {
		height: 0,
		opacity: 0,
	},
})

const StyledContent = styled(AccordionPrimitive.Content, {
	'&[data-state="open"]': {
		animation: `${slideDown} 0.3s cubic-bezier(0.87, 0, 0.13, 1)`,
	},
	'&[data-state="closed"]': {
		animation: `${slideUp} 0.3s cubic-bezier(0.87, 0, 0.13, 1)`,
	},
})
