import { Icon } from "types/Icon"

export const Filter = ({ width = 18, height = 20, fill = "#005AAF" }: Icon) => {
	return (
		<svg width={width} height={height} viewBox="0 0 18 20" color={fill} xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-1c0-1.654-1.346-3-3-3S6 1.346 6 3c0 1.302.839 2.401 2 2.815V19a1 1 0 1 0 2 0V5.815A2.995 2.995 0 0 0 12 3ZM3 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-3.815V1a1 1 0 1 0-2 0v11.185A2.995 2.995 0 0 0 0 15c0 1.302.839 2.401 2 2.815V19a1 1 0 1 0 2 0v-1.185A2.995 2.995 0 0 0 6 15a2.995 2.995 0 0 0-2-2.815ZM15 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-1a2.995 2.995 0 0 0-2-2.815V1a1 1 0 1 0-2 0v7.185A2.995 2.995 0 0 0 12 11c0 1.302.839 2.401 2 2.815V19a1 1 0 1 0 2 0v-5.185A2.995 2.995 0 0 0 18 11Z"
				fill="currentColor"
			/>
		</svg>
	)
}
