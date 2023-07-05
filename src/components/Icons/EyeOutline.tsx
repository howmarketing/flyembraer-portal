type Icon = {
	width: string
	height: string
	fill?: string
}

export const EyeOutline = ({ width, height, fill = "#A4A4A4" }: Icon) => {
	return (
		<svg width={width} height={height} viewBox="0 0 132 90" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<path d="M66 27a17.9997 17.9997 0 0 1 18 18 17.9997 17.9997 0 0 1-18 18 17.9997 17.9997 0 0 1-18-18 17.9997 17.9997 0 0 1 18-18Zm0-27c30 0 55.62 18.66 66 45-10.38 26.34-36 45-66 45S10.38 71.34 0 45C10.38 18.66 36 0 66 0ZM13.08 45C22.98 65.16 43.44 78 66 78c22.56 0 43.02-12.84 52.92-33-9.9-20.16-30.36-33-52.92-33-22.56 0-43.02 12.84-52.92 33Z" />
		</svg>
	)
}
