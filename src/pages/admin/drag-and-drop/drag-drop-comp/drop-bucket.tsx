import type { NextPageWithLayout } from "pages/_app"
import { useState } from "react"
import { useDrop } from "react-dnd"
import { Picture } from "./PictureComp"

export const DropBucket: NextPageWithLayout = () => {
	const [board, setBoard] = useState<any>([])
	const CardList = [
		{
			id: 1,
			url: "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
		},
		{
			id: 2,
			url: "https://media-exp1.licdn.com/dms/image/C4D03AQExheo0sff_yQ/profile-displayphoto-shrink_200_200/0/1590072898568?e=1630540800&v=beta&t=_W-gWZewSBYQ-UAjpGvR8h_8Vvo202IHQQissbK2aKc",
		},
		{
			id: 3,
			url: "https://yt3.ggpht.com/pe57RF1GZibOWeZ9GwRWbjnLDCK2EEAeQ3u4iMAFNeaz-PN9uSsg1p2p32TZUedNnrUhKfoOuMM=s900-c-k-c0x00ffffff-no-rj",
		},
	]
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: "image",
		drop: (item: any) => addCardtoBoard(item.id),
		collect: (monitor: any) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}))
	function addCardtoBoard(id: any) {
		const card = CardList.filter((card) => id == card.id)
		setBoard((board: any) => [...board, card[0]])
	}
	return (
		<div className="Board" ref={drop} style={{ border: "1px solid black", width: "150px", height: "150px" }}>
			{board.map((picture: any) => {
				return <Picture url={picture.url} id={picture.id} />
			})}
		</div>
	)
}
export default DropBucket
