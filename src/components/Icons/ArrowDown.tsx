import { Icon } from "types/Icon"

export const ArrowDown = ({ width = 12, height = 6, fill }: Icon) => {
	return (
		<svg width={width} height={height} viewBox="0 0 12 6" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M.0005.833A.8295.8295 0 0 1 .1938.2995c.2942-.3534.82-.4009 1.1733-.1067l4.4759 3.73L10.3113.3271c.3583-.2884.8833-.2317 1.1717.1266a.8348.8348 0 0 1-.1267 1.1725l-5 4.0234a.8337.8337 0 0 1-1.0558-.0092l-5-4.1666a.8327.8327 0 0 1-.3-.6409"
			/>
		</svg>
	)
}
