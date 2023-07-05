import { SVGProps } from "react"

export type Icon = {
	width?: string | number
	height?: string | number
	fill?: string
} & SVGProps<SVGSVGElement>
