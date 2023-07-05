import { breakpointsValue } from "styles/Tokens/media"

import { useWindowSize } from "./useWindowSize"

type UseGetBreakpointProps = keyof typeof breakpointsValue

export const useGetBreakpoint = (breakpoint: UseGetBreakpointProps) => {
	const { width } = useWindowSize()

	const breakpointValue = breakpointsValue[breakpoint]

	const isRequiredSize = width ? width >= breakpointValue : false

	return isRequiredSize
}
