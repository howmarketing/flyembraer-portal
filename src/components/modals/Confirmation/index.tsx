import { useCallback, useMemo, useState } from "react"

import * as S from "./styles"

import Button from "components/Button"
import CloseIcon from "components/Icons/Close"
import TrashIcon from "components/Icons/Trash"
import Modal from "components/Modal"

type ConfirmationHelperProps = {
	showPreviewMessage: boolean
	setShowPreviewMessage: (status: boolean) => void
	closeWithX?: boolean
	onConfirm?: () => void
	onCancel?: () => void
	title: string
	description?: string
}

const ConfirmationHelper = ({
	setShowPreviewMessage,
	showPreviewMessage,
	closeWithX,
	title,
	description,
	onCancel,
	onConfirm,
}: ConfirmationHelperProps) => {
	const handleCancel = () => {
		setShowPreviewMessage(false)
		onCancel?.()
	}

	const handleConfirm = () => {
		setShowPreviewMessage(false)
		onConfirm?.()
	}

	return (
		<Modal showModal={showPreviewMessage} setShowModal={setShowPreviewMessage} closeWithX={closeWithX}>
			<S.WrapperModal>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>

				<S.WrapperButtons>
					<Button onClick={handleConfirm} variant="primary">
						Delete <TrashIcon />
					</Button>
					<Button onClick={handleCancel} variant="secondary">
						Cancel
					</Button>
				</S.WrapperButtons>
			</S.WrapperModal>
		</Modal>
	)
}

export default ConfirmationHelper

type UseConfirmationModalProps = {
	onConfirm: () => void
	onCancel?: () => void
	title: string
	description?: string
}

export function useConfirmationModal({ onCancel, onConfirm, title, description }: UseConfirmationModalProps) {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false)

	const ConfirmationModal = useCallback(() => {
		return (
			<ConfirmationHelper
				showPreviewMessage={showConfirmationModal}
				setShowPreviewMessage={setShowConfirmationModal}
				onCancel={onCancel}
				onConfirm={onConfirm}
				title={title}
				description={description}
			/>
		)
	}, [description, onCancel, onConfirm, showConfirmationModal, title])

	return useMemo(
		() => ({ setShowConfirmationModal, ConfirmationModal }),
		[setShowConfirmationModal, ConfirmationModal]
	)
}
