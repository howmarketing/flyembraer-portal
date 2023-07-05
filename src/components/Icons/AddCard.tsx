import { Icon } from "types/Icon"

export const AddCard = ({ width, height, fill = "#005AAF" }: Icon) => {
	return (
		<svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M9,13h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2H13V9a1,1,0,0,0-2,0v2H9a1,1,0,0,0,0,2ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"></path>
		</svg>
	)
}
