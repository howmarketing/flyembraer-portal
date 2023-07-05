import { Icon } from "types/Icon"

export const AngleRight = ({ width, height, fill = "#005AAF", ...props }: Icon) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 77 128"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.836 128c-3.285 0-6.57-1.254-9.073-3.751a12.763 12.763 0 0 1 0-18.1l42.413-42.307L5.367 21.688C.452 16.593.594 8.491 5.688 3.588c5.108-4.903 13.231-4.762 18.146.307l49.561 51.204c4.864 5.03 4.8 13.005-.154 17.947L21.91 124.249A12.811 12.811 0 0 1 12.836 128"
			/>
		</svg>
	)
}
