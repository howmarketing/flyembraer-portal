import * as TabsPrimitive from "@radix-ui/react-tabs"

import { ComponentPropsWithoutRef, ReactNode } from "react"

type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
	children: ReactNode
}

export const Tabs = ({ children, ...props }: TabsProps) => (
	<TabsPrimitive.Root {...props}>{children}</TabsPrimitive.Root>
)

type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
	children: ReactNode
}

export const TabsList = ({ children, ...props }: TabsListProps) => (
	<TabsPrimitive.List {...props}>{children}</TabsPrimitive.List>
)

type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
	children: ReactNode
}

export const TabsTrigger = ({ children, ...props }: TabsTriggerProps) => (
	<TabsPrimitive.Trigger {...props}>{children}</TabsPrimitive.Trigger>
)

type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
	children: ReactNode
}

export const TabsContent = ({ children, ...props }: TabsContentProps) => (
	<TabsPrimitive.Content {...props}>{children}</TabsPrimitive.Content>
)
