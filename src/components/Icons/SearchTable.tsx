import { SVGProps } from "react"

interface SearchIconProps {
	title?: string
	titleId?: string
	color?: string
}

const SearchIcon = ({
	color = "#fff",
	title = "Search",
	titleId = "search",
	...props
}: SVGProps<SVGSVGElement> & SearchIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		fill="none"
		color={color}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M4.166 9.168c0-2.758 2.243-5 5-5 2.758 0 5 2.242 5 5s-2.242 5-5 5c-2.757 0-5-2.242-5-5m13.09 6.91-2.83-2.83a6.626 6.626 0 0 0 1.407-4.081A6.674 6.674 0 0 0 9.167 2.5 6.674 6.674 0 0 0 2.5 9.167a6.674 6.674 0 0 0 6.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 0 0 1.179 0 .832.832 0 0 0 0-1.178"
			clipRule="evenodd"
		/>
	</svg>
)
export default SearchIcon
