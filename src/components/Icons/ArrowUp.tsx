import { Icon } from "types/Icon"

export const ArrowUp = ({ width = 12, height = 6, fill }: Icon) => {
	return (
		<svg width={width} height={height} viewBox="0 0 12 6" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.6753 5.001a.8295.8295 0 0 1-.1933.5334c-.2942.3533-.82.4008-1.1734.1067l-4.4758-3.73-4.4683 3.5958c-.3583.2883-.8834.2317-1.1717-.1267a.8347.8347 0 0 1 .1267-1.1725l5-4.0233a.8337.8337 0 0 1 1.0558.0092l5 4.1666c.1975.165.3.4017.3.6409"
			/>
		</svg>
	)
}
