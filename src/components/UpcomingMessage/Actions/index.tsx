import PincelIcon from "components/Icons/Pincel"
import * as S from "./styles"

import Button from "components/Button"
import SearchIcon from "components/Icons/SearchTable"
import TrashIcon from "components/Icons/Trash"

type ActionsProps = {
	id?: string
}

const Actions = ({ id }: ActionsProps) => {
	const handleEdit = () => {
		console.log({ id, action: "edit" })
	}

	const handleDelete = () => {
		console.log({ id, action: "delete" })
	}

	const handleView = () => {
		console.log({ id, action: "view" })
	}

	return (
		<S.Wrapper>
			<Button onClick={handleEdit}>
				<PincelIcon />
			</Button>
			<Button onClick={handleDelete}>
				<TrashIcon />
			</Button>
			<Button onClick={handleView}>
				<SearchIcon />
			</Button>
		</S.Wrapper>
	)
}

export default Actions
