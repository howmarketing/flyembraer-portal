import { Flex } from "components/Flex"
import React, { CSSProperties } from "react"
import { keyframes } from "../../../stitches.config"

type SpinnerProps = {
	width?: number
	height?: number
	centralize?: boolean
}

export const Spinner = ({ width = 64, height = 64, centralize = false }: SpinnerProps) => {
	const circleStyle: CSSProperties = { animation: `${Animation} ${140 / 100}s linear infinite` }

	const spinner = (
		<svg fill="none" viewBox="0 0 66 66" width={width} height={height}>
			<circle cx="33" cy="33" fill="none" r="28" stroke="lightgray" strokeWidth={5} />
			<circle
				cx="33"
				cy="33"
				fill="none"
				r="28"
				stroke="#005AAF"
				strokeDasharray="1, 174"
				strokeDashoffset="306"
				strokeLinecap="round"
				strokeWidth={5}
				style={circleStyle}
			/>
		</svg>
	)

	if (centralize) {
		return (
			<Flex css={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
				{spinner}
			</Flex>
		)
	}

	return spinner
}

const Animation = keyframes({
	"0%": { strokeDashoffset: "306" },
	"50%": { strokeDasharray: "40, 134" },
	"100%": {
		strokeDasharray: "1, 174",
		strokeDashoffset: "132",
	},
})
