import { SVGProps } from "react"

interface CloseIcon {
	title?: string
	titleId?: string
	color?: string
}
const CloseIcon = ({
	title = "Close",
	titleId = "close",
	color = "#005AAF",
	...props
}: SVGProps<SVGSVGElement> & CloseIcon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={12}
		height={13}
		color={color}
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m7.414 6.012 4.293-4.293A.999.999 0 1 0 10.293.305L6 4.598 1.707.305A.999.999 0 1 0 .293 1.719l4.293 4.293-4.293 4.293a.999.999 0 1 0 1.414 1.414L6 7.426l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L7.414 6.012Z"
			clipRule="evenodd"
		/>
	</svg>
)
export default CloseIcon
