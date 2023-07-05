import { SortDirection } from "@tanstack/react-table"
import { SVGProps } from "react"

interface ArrowsIconProps {
	title?: string
	titleId?: string
	sortDirection: false | SortDirection
}

const ArrowsIcon = ({
	title = "Sort",
	titleId = "sort",
	sortDirection,
	...props
}: SVGProps<SVGSVGElement> & ArrowsIconProps) => {
	const isAsc = sortDirection === "asc"
	const isDesc = sortDirection === "desc"

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" aria-labelledby={titleId} {...props}>
			{title ? <title id={titleId}>{title}</title> : null}
			<path
				fill={isAsc ? "#005AAF" : "#D6D7DA"}
				fillRule="evenodd"
				d="M4.333 12.833a.833.833 0 0 1 1.367-.64l4.476 3.73 4.468-3.596a.834.834 0 0 1 1.045 1.3l-5 4.023a.834.834 0 0 1-1.056-.01l-5-4.166a.833.833 0 0 1-.3-.641Z"
				clipRule="evenodd"
			/>
			<path
				fill={isDesc ? "#005AAF" : "#D6D7DA"}
				fillRule="evenodd"
				d="M16 7a.834.834 0 0 1-1.367.64l-4.475-3.73L5.69 7.504a.834.834 0 0 1-1.045-1.3l5-4.023a.834.834 0 0 1 1.056.01l5 4.166c.197.165.3.402.3.641Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}
export default ArrowsIcon
