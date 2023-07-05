/* eslint-disable @typescript-eslint/no-explicit-any */
import PincelIcon from "components/Icons/Pincel"
import * as S from "./styles"

import { deleteMessageId } from "api/message-center/deleteMessageId"
import Button from "components/Button"
import SearchIcon from "components/Icons/SearchTable"
import TrashIcon from "components/Icons/Trash"
import { MediaMatch } from "components/MediaMatch"
import { useConfirmationModal } from "components/modals/Confirmation"
import { usePreviewMessage } from "components/modals/PreviewMessage"
import Link from "next/link"
import { useMutation, useQueryClient } from "react-query"

type TableActionsProps = {
  id?: string
  row?: any
}

const TableActions = ({ id, row }: TableActionsProps) => {
  const { PreviewMessage, setShowPreviewMessage } = usePreviewMessage({
    message: row?.htmlMessage,
    title: row?.title,
    id: row?.id
  })

  const queryClient = useQueryClient()

  const { mutate: deleteMessage } = useMutation(({ id }: { id: string }) => deleteMessageId({ id }))

  const handleDelete = () => {
    deleteMessage(
      { id: String(id) },
      {
        onSuccess: () => {
          queryClient.refetchQueries("message-center-messages")
        }
      }
    )
  }

  const { ConfirmationModal, setShowConfirmationModal } = useConfirmationModal({
    title: "Delete Message",
    description: "Are you sure you want to delete this message?",
    onConfirm: handleDelete
  })

  const handleView = () => {
    setShowPreviewMessage(true)
  }

  return (
    <S.Wrapper>
      <MediaMatch asChild greaterThan="tablet">
        <Link href={`/admin/message-center/edit/${id}`}>
          <Button as="a">
            <PincelIcon />
          </Button>
        </Link>
      </MediaMatch>

      <MediaMatch asChild greaterThan="tablet">
        <S.Button onClick={() => setShowConfirmationModal(true)}>
          <TrashIcon />
        </S.Button>
      </MediaMatch>

      <S.Button onClick={handleView}>
        <SearchIcon />
      </S.Button>

      <PreviewMessage />

      <ConfirmationModal />
    </S.Wrapper>
  )
}

export default TableActions
