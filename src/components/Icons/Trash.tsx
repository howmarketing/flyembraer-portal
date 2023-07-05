import { SVGProps } from "react"

interface TrashIconProps {
	title?: string
	titleId?: string
	color?: string
}

const TrashIcon = ({
	color = "#fff",
	title = "Deletar",
	titleId = "delete",
	...props
}: SVGProps<SVGSVGElement> & TrashIconProps) => (
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
			d="M8.333 13.335a.836.836 0 0 1-.834.833.836.836 0 0 1-.833-.833V10c0-.458.375-.833.833-.833.459 0 .834.375.834.833v3.334Zm5 0a.836.836 0 0 1-.834.833.836.836 0 0 1-.833-.833V10c0-.458.375-.833.833-.833.459 0 .834.375.834.833v3.334Zm1.666 2.5c0 .459-.373.833-.833.833H5.833a.834.834 0 0 1-.834-.833V6.668h10v9.167ZM8.333 3.608c0-.13.178-.273.416-.273h2.5c.239 0 .417.144.417.273v1.393H8.333V3.608Zm9.166 1.393h-4.166V3.608c0-1.07-.934-1.94-2.084-1.94h-2.5c-1.149 0-2.083.87-2.083 1.94v1.393H2.499a.836.836 0 0 0-.833.834c0 .458.375.833.833.833h.834v9.167c0 1.378 1.121 2.5 2.5 2.5h8.333c1.378 0 2.5-1.122 2.5-2.5V6.668h.833a.836.836 0 0 0 .834-.833.836.836 0 0 0-.834-.834Z"
			clipRule="evenodd"
		/>
	</svg>
)
export default TrashIcon
