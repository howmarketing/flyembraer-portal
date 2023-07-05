import { render, fireEvent, RenderResult } from "@testing-library/react"
import { ComponentPropsWithRef, forwardRef, ReactNode } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

type AccordionProps = ComponentPropsWithRef<typeof AccordionPrimitive.Root> & {
	children: ReactNode
	AccordionPrimitive: AccordionContentProps
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ children, ...props }, ref) => (
	<AccordionPrimitive.Root ref={ref} {...props}>
		{children}
	</AccordionPrimitive.Root>
))

Accordion.displayName = "Accordion"

type AccordionItemProps = ComponentPropsWithRef<typeof AccordionPrimitive.Item> & {
	children: ReactNode
	value: string
	type?: "single" | "multiple" // Add the type prop here
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({ children, ...props }, ref) => (
	<AccordionPrimitive.Item ref={ref} {...props}>
		{children}
	</AccordionPrimitive.Item>
))
AccordionItem.displayName = "AccordionItem"

type AccordionTriggerProps = ComponentPropsWithRef<typeof AccordionPrimitive.Trigger> & {
	children: ReactNode
}

export const AccordionTrigger = ({ children, ...props }: AccordionTriggerProps) => (
	<AccordionPrimitive.Header>
		<AccordionPrimitive.Trigger {...props}>{children}</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
)

type AccordionContentProps = ComponentPropsWithRef<typeof AccordionPrimitive.Content> & {
	children: ReactNode
}

export const AccordionContent = ({ children, ...props }: AccordionContentProps) => (
	<AccordionPrimitive.Content {...props}>{children}</AccordionPrimitive.Content>
)

describe("Accordion component", () => {
	let component: RenderResult

	beforeEach(() => {
		component = render(
			<AccordionPrimitive.Accordion type="single">
				<AccordionContent>
					<AccordionItem value="1">
						<AccordionTrigger>Toggle 1</AccordionTrigger>
						<AccordionContent>Content 1</AccordionContent>
					</AccordionItem>
					<AccordionItem value="2">
						<AccordionTrigger>Toggle 2</AccordionTrigger>
						<AccordionContent>Content 2</AccordionContent>
					</AccordionItem>
				</AccordionContent>
			</AccordionPrimitive.Accordion>
		)
	})

	test("renders children correctly", () => {
		const { getByText } = component

		expect(getByText("Toggle 1")).toBeInTheDocument()
		expect(getByText("Content 1")).toBeInTheDocument()
		expect(getByText("Toggle 2")).toBeInTheDocument()
		expect(getByText("Content 2")).toBeInTheDocument()
	})

	test("expands/collapses accordion item on click", () => {
		const { getByText } = component

		const toggleButton1 = getByText("Toggle 1")
		const content1 = getByText("Content 1")
		const toggleButton2 = getByText("Toggle 2")
		const content2 = getByText("Content 2")

		// Initially, the content should be hidden
		expect(content1).not.toBeVisible()
		expect(content2).not.toBeVisible()

		// Clicking on the toggle button should expand the content
		fireEvent.click(toggleButton1)
		expect(content1).toBeVisible()
		expect(content2).not.toBeVisible()

		// Clicking on the second toggle button should collapse the first content and expand the second content
		fireEvent.click(toggleButton2)
		expect(content1).not.toBeVisible()
		expect(content2).toBeVisible()
	})
})
///////////////
