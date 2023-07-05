import { ReactNode } from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { StyledArrow } from "./styles"

export const Popover = ({ children }: { children: ReactNode }) => {
	return <PopoverPrimitive.Root>{children}</PopoverPrimitive.Root>
}

type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
	children: ReactNode
	arrow?: ReactNode
	color?: "light" | "dark"
}

export const PopoverContent = ({ children, arrow, color, ...props }: PopoverContentProps) => {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content sideOffset={5} {...props}>
				{children}
				{arrow ?? <StyledArrow color={color} />}
			</PopoverPrimitive.Content>
		</PopoverPrimitive.Portal>
	)
}

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> & {
	children: ReactNode
}

export const PopoverTrigger = ({ children, ...props }: PopoverTriggerProps) => {
	return <PopoverPrimitive.Trigger {...props}>{children}</PopoverPrimitive.Trigger>
}
