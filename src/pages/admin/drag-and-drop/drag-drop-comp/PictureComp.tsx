import type { NextPageWithLayout } from "pages/_app"
import React from "react"
import { useDrag } from "react-dnd"

export const Picture: NextPageWithLayout = ({ id, url }: any) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "image",
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}))
	return (
		<img
			ref={drag}
			src={
				url ??
				"https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj"
			}
			width="150px"
			style={{ border: isDragging ? "5px solid pink" : "0px" }}
		/>
	)
}

export default Picture
