import { Icon } from "types/Icon"

export const Clock = ({ width = 30, height = 30, fill = "#005AAF" }: Icon) => {
	return (
		<svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path>
		</svg>
	)
}
