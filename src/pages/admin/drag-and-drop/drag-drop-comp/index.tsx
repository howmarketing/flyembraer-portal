import React from "react"
import { useDrag } from "react-dnd"

type cardProps = {
	isDragging: boolean
	text: string
}
export default function CardDrop({ isDragging, text }: cardProps) {
	const [{ opacity }, dragRef] = useDrag(
		() => ({
			type: "card",
			item: { text },
			collect: (monitor) => ({
				opacity: monitor.isDragging() ? 0.5 : 1,
			}),
		}),
		[]
	)
	return (
		<div ref={dragRef} style={{ opacity }}>
			{text}
		</div>
	)
}
