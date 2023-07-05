import { SVGProps } from "react"

interface PincelIconProps {
	title?: string
	titleId?: string
	color?: string
}

const PincelIcon = ({
	color = "#fff",
	title = "Editar",
	titleId = "edit",
	...props
}: SVGProps<SVGSVGElement> & PincelIconProps) => (
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
			d="M4.243 14.995a.83.83 0 0 1-.906-.905l.316-3.476c.035-.38.204-.74.474-1.01l7.497-7.498c.585-.587 1.647-.558 2.263.058l2.282 2.282c.64.64.664 1.653.058 2.262l-7.498 7.497c-.27.272-.63.44-1.01.474l-3.476.316Zm5.744-8.894-4.681 4.68-.22 2.464 2.48-.226 4.667-4.671L9.987 6.1Zm4.985-.495-2.245-2.245-1.624 1.623 2.246 2.247 1.623-1.625Z"
			clipRule="evenodd"
		/>
		<path
			fill="currentColor"
			d="M4.167 16.665h11.667c.458 0 .833.375.833.834a.836.836 0 0 1-.833.833H4.167a.836.836 0 0 1-.833-.834c0-.458.375-.833.833-.833Z"
		/>
	</svg>
)
export default PincelIcon
