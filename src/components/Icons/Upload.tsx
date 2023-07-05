import { Icon } from "types/Icon"

export const Upload = ({ width, height, fill = "#FFFFFF" }: Icon) => {
	return (
		<svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.667 17.667V15c0-7.364 5.97-13.333 13.333-13.333 7.364 0 13.333 5.97 13.333 13.333v2.667C44.224 17.667 49 22.442 49 28.333c0 3.949-2.145 7.49-5.333 9.334m-32-20C5.776 17.667 1 22.442 1 28.333c0 3.949 2.145 7.49 5.333 9.334m5.334-20c1.154 0 2.265.183 3.306.522M25 23v24m0-24 8 8m-8-8-8 8"
				stroke="#005AAF"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
