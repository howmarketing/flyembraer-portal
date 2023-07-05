import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

import { useWindowSize } from "../../hooks/useWindowSize"
import { breakpointsValue } from "../../styles/Tokens/media"

type Breakpoint = keyof typeof breakpointsValue

type MediaMatchProps = {
	lessThan?: Breakpoint
	greaterThan?: Breakpoint
	children: ReactNode
	asChild?: boolean
}

export const MediaMatch = ({ children, lessThan, greaterThan, ...props }: MediaMatchProps) => {
	const size = useWindowSize()
	const lessThanSize = !!lessThan && breakpointsValue[lessThan]
	const greaterThanSize = !!greaterThan && breakpointsValue[greaterThan]

	if (size.width) {
		if (lessThanSize && size.width <= lessThanSize) {
			return <MediaMatchComponent {...props}>{children}</MediaMatchComponent>
		}

		if (greaterThanSize && size.width >= greaterThanSize) {
			return <MediaMatchComponent {...props}>{children}</MediaMatchComponent>
		}
	}

	return <></>
}

type MediaMatchComponentProps = {
	asChild?: boolean
	children: ReactNode
}

const MediaMatchComponent = ({ asChild, children, ...props }: MediaMatchComponentProps) => {
	const Comp = asChild ? Slot : "div"
	return <Comp {...props}>{children}</Comp>
}
