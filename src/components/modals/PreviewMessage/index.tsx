import { useCallback, useMemo, useState } from "react"

import * as S from "./styles"

import Button from "components/Button"
import CloseIcon from "components/Icons/Close"
import { MediaMatch } from "components/MediaMatch"
import Modal from "components/Modal"
import Link from "next/link"

type PreviewMessageHelperProps = {
	showPreviewMessage: boolean
	setShowPreviewMessage: (status: boolean) => void
	closeWithX?: boolean
	title: string
	message: string
	id?: string
}

const PreviewMessageHelper = ({
	message,
	setShowPreviewMessage,
	showPreviewMessage,
	closeWithX,
	id,
	title,
}: PreviewMessageHelperProps) => {
	return (
		<Modal showModal={showPreviewMessage} setShowModal={setShowPreviewMessage} closeWithX={closeWithX}>
			<S.WrapperModal>
				<S.ButtonClose onClick={() => setShowPreviewMessage(false)}>
					<CloseIcon />
				</S.ButtonClose>

				<S.TitleMessage>{title}</S.TitleMessage>

				<S.WrapperMessage dangerouslySetInnerHTML={{ __html: message }} />

				{id && (
					<MediaMatch asChild greaterThan="largeMobile">
						<S.WrapperButton>
							<Link href={`/admin/message-center/edit/${id}`}>
								<Button as="a">Edit</Button>
							</Link>
						</S.WrapperButton>
					</MediaMatch>
				)}
			</S.WrapperModal>
		</Modal>
	)
}

export default PreviewMessageHelper

type UsePreviewMessageProps = {
	title: string
	message: string
	id?: string
}

export function usePreviewMessage({ title, message, id }: UsePreviewMessageProps) {
	const [showPreviewMessage, setShowPreviewMessage] = useState(false)

	const PreviewMessage = useCallback(() => {
		return (
			<PreviewMessageHelper
				showPreviewMessage={showPreviewMessage}
				setShowPreviewMessage={setShowPreviewMessage}
				message={message}
				title={title}
				id={id}
			/>
		)
	}, [showPreviewMessage, message, id, title])

	return useMemo(() => ({ setShowPreviewMessage, PreviewMessage }), [setShowPreviewMessage, PreviewMessage])
}
