import { Icon } from "types/Icon"

export const HamburguerMenuClose = ({ width, height, fill = "#FFFFFF" }: Icon) => {
	return (
		<svg
			width={width}
			height={height}
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			transform="scale(-1 1)"
		>
			<path d="M3,15H13a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0-4H13a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2ZM3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM19.64,9.57a1,1,0,1,0-1.28,1.53l1.08.9-1.08.9a1,1,0,0,0-.13,1.41,1,1,0,0,0,.77.36,1,1,0,0,0,.64-.24l2-1.66a1,1,0,0,0,0-1.54Z"></path>
		</svg>
	)
}