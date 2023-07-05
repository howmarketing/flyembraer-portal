import { SVGProps } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
	right?: boolean
}
const ArrowIcon = ({
	title = "Arrow",
	titleId = "arrow",
	right = false,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		style={{ transform: right ? "rotate(180deg)" : "rotate(0deg)" }}
		xmlns="http://www.w3.org/2000/svg"
		width={6}
		height={9}
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="#000"
			d="M5.435 8.434a.371.371 0 0 1-.182-.056.857.857 0 0 0-.154-.084L.69 5.256a1.148 1.148 0 0 1-.308-.28.638.638 0 0 1-.098-.35v-.252c0-.13.033-.242.098-.336.066-.093.168-.19.308-.294L5.1.72c.047-.028.098-.06.154-.098a.371.371 0 0 1 .182-.056c.075 0 .14.028.196.084.056.047.084.117.084.21v.616a.43.43 0 0 1-.084.266c-.056.066-.135.131-.238.196L1.641 4.5l3.752 2.562c.103.075.182.145.238.21a.395.395 0 0 1 .084.266v.616a.285.285 0 0 1-.084.21.297.297 0 0 1-.196.07Z"
		/>
	</svg>
)
export default ArrowIcon
