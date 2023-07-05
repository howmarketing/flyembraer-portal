type Icon = {
	width?: string
	height?: string
	fill?: string
}

export const Monitor = ({ width, height, fill = "#005AAF" }: Icon) => {
	return (
		<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 14C20 14.551 19.552 15 19 15H12.087H11.913H5C4.448 15 4 14.551 4 14V6C4 5.449 4.448 5 5 5H19C19.552 5 20 5.449 20 6V14ZM19 3H5C3.346 3 2 4.346 2 6V14C2 15.654 3.346 17 5 17H11V19H7C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19H13V17H19C20.654 17 22 15.654 22 14V6C22 4.346 20.654 3 19 3Z"
				fill="#005AAF"
			/>
			<mask id="mask0_153_22572" maskUnits="userSpaceOnUse" x="2" y="3" width="20" height="18">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M20 14C20 14.551 19.552 15 19 15H12.087H11.913H5C4.448 15 4 14.551 4 14V6C4 5.449 4.448 5 5 5H19C19.552 5 20 5.449 20 6V14ZM19 3H5C3.346 3 2 4.346 2 6V14C2 15.654 3.346 17 5 17H11V19H7C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19H13V17H19C20.654 17 22 15.654 22 14V6C22 4.346 20.654 3 19 3Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_153_22572)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M20 14C20 14.551 19.552 15 19 15H5C4.448 15 4 14.551 4 14V6C4 5.449 4.448 5 5 5H19C19.552 5 20 5.449 20 6V14ZM19 3H5C3.346 3 2 4.346 2 6V14C2 15.654 3.346 17 5 17H11V19H7C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19H13V17H19C20.654 17 22 15.654 22 14V6C22 4.346 20.654 3 19 3Z"
					fill="#005AAF"
				/>
			</g>
		</svg>
	)
}
