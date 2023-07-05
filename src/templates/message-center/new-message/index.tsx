/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dynamic from "next/dynamic"
import Head from "next/head"

import * as yup from "yup"

import Button from "components/Button"
import DateTimePicker from "components/DateTimePicker"
import Switch from "components/Switch"
import { Selected, useAddRecipients } from "components/modals/AddRecipients"
import { usePreviewMessage } from "components/modals/PreviewMessage"
const CKEtidor = dynamic(() => import("components/CKEditor"), { ssr: false })

import { yupResolver } from "@hookform/resolvers/yup"
import { useGetMessagesTemplates } from "api/message-center/getMessageTemplate"
import { useGetMessageById } from "api/message-center/getMessageUserId"
import { postMessage } from "api/message-center/postMessage"
import { postMessageTemplate } from "api/message-center/postMessageTemplate"
import { PutMessageIdProps, putMessageId } from "api/message-center/putMessageId"
import { ArrowRight } from "components/Icons/ArrowRight"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { recipientsMapper, recipientsMapperToSelected } from "utils/mappers/recipients-mapper"
import * as S from "./styles"

const newMessageSchema = yup.object({
  title: yup.string().required("Title is required"),
  startDate: yup.string().required("Start date is required"),
  endDate: yup.string().required("End date is required"),
  htmlMessage: yup.string().required("Message is required"),
  alert: yup.boolean()
})

type NewMessageType = yup.InferType<typeof newMessageSchema>

type NewMessageTemplateProps = {
  edit?: boolean
}

const NewMessageTemplate = ({ edit }: NewMessageTemplateProps) => {
  const router = useRouter()
  const [filters, setFilters] = useState<Selected[]>([])

  const { data: message } = useGetMessageById(
    {
      messageId: String(router.query?.messageId)
    },
    {
      enabled: !!router.query?.messageId
    }
  )

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
    setError,
    clearErrors
  } = useForm<NewMessageType>({
    resolver: yupResolver(newMessageSchema),
    defaultValues: {
      alert: false
    }
  })

  const { mutate: createMessage } = useMutation(postMessage, {
    onSuccess() {
      router.push(`/admin/message-center`)
    }
  })

  const { mutate: editMessage } = useMutation(
    (messageProps: PutMessageIdProps) => putMessageId(messageProps, String(message?.id)),
    {
      onSuccess(data) {
        router.push(`/admin/message-center`)
      }
    }
  )

  const { mutate: createTemplate } = useMutation(postMessageTemplate, {
    onSuccess() {
      router.push(`/admin/message-center/manage-templates`)
    }
  })

  const htmlMessage = watch("htmlMessage")

  const { data: templates } = useGetMessagesTemplates({
    page: 0,
    size: 150
  })

  const templatesOptions = templates?.content?.length
    ? templates?.content?.map(({ title, htmlMessage }) => ({
        displayValue: title!,
        value: htmlMessage!
      }))
    : []

  const { PreviewMessage, setShowPreviewMessage } = usePreviewMessage({
    message: htmlMessage,
    title: watch("title")
  })

  const handleSetFilters = (filters: Selected[]) => {
    setFilters(filters)
  }

  const { AddRecipients, setShowAddRecipients } = useAddRecipients({
    onFilters: handleSetFilters,
    filters
  })

  const handleSaveAsTemplate = () => {
    clearErrors("title")
    clearErrors("htmlMessage")

    const incDate = new Date().toISOString().slice(0, 16).replace("T", " ")

    const title = watch("title")
    const htmlMessage = watch("htmlMessage")

    if (!title) {
      setError("title", {
        message: "Title is required"
      })
    }

    if (!htmlMessage) {
      setError("htmlMessage", {
        message: "Message is required"
      })
    }

    if (!title || !htmlMessage) return

    createTemplate({
      name: title,
      title,
      htmlMessage,
      incDate
    })
  }

  const onSubmit = handleSubmit((values) => {
    const payload = {
      ...values,
      startDate: values.startDate
        .split(" ")
        .map((item) => item.split("/").reverse().join("-"))
        .join(" "),
      endDate: values.endDate
        .split(" ")
        .map((item) => item.split("/").reverse().join("-"))
        .join(" "),
      alert: !!values.alert,
      messages: recipientsMapper(filters)
    }

    if (edit) {
      const payloadEdit = {
        ...payload,
        messages: [...payload.messages]
      }
      editMessage(payloadEdit)
      return
    }

    createMessage(payload)
  })

  useEffect(() => {
    if (edit) {
      reset({
        title: watch("title") || message?.title,
        startDate:
          watch("startDate") ||
          message?.startDate
            ?.split(" ")
            .map((item) => item.split("-").reverse().join("/"))
            .join(" "),
        endDate:
          watch("endDate") ||
          message?.endDate
            ?.split(" ")
            .map((item) => item.split("-").reverse().join("/"))
            .join(" "),
        htmlMessage: watch("htmlMessage") || message?.htmlMessage,
        alert: watch("alert") || message?.alert
      })

      if (message?.htmlMessage) {
        window.editor?.setData(message?.htmlMessage)
      }

      setFilters(recipientsMapperToSelected(message?.messages || []))
    }

    return () => reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit, message, reset, message?.htmlMessage])

  return (
    <>
      <Head>
        <title>Fly Embraer - New Message - Message Center</title>
        <meta name="description" content="Fly Embraer 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Wrapper>
        <Link href="/admin/message-center">
          <Button as="a">Back to messages</Button>
        </Link>

        <br />
        <br />

        <S.Select
          id="template"
          label="Template"
          options={templatesOptions}
          onChange={(event) => {
            window.editor?.setData(event.target.value)
          }}
        />

        <S.Form onSubmit={onSubmit}>
          <S.Input id="title" {...register("title")} error={errors.title?.message}>
            Title
          </S.Input>

          <S.WrapperDates>
            <Controller
              name="startDate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DateTimePicker
                  initialValue={value}
                  label="Star Date"
                  onChangeValue={(value) => onChange(value)}
                  error={errors.startDate?.message}
                />
              )}
            />

            <Controller
              name="endDate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DateTimePicker
                  initialValue={value}
                  label="End Date"
                  onChangeValue={(value) => onChange(value)}
                  error={errors.endDate?.message}
                />
              )}
            />
          </S.WrapperDates>

          <Controller
            name="alert"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Switch label="This message will be a pop-up alert" defaultChecked={value} onCheckedChange={onChange} />
            )}
          />

          <S.WrapperRecipients>
            <S.WrapperRecipientsList>
              {filters.map(({ filter, id }) => (
                <S.WrapperFilter key={id}>
                  {filter.map(({ id: idItem, label }, index) => (
                    <S.WrapperRecipient key={idItem}>
                      <S.LabelRecipient>{label}</S.LabelRecipient>

                      {filter.length - 1 !== index && <S.Divider>AND</S.Divider>}
                    </S.WrapperRecipient>
                  ))}
                </S.WrapperFilter>
              ))}
            </S.WrapperRecipientsList>

            <S.WrapperButtonsRecipients>
              <Button type="button" onClick={() => setShowAddRecipients(true)}>
                Add recipients
              </Button>

              <Button variant="secondary" type="button">
                Export recipients
              </Button>
            </S.WrapperButtonsRecipients>
          </S.WrapperRecipients>

          <Controller
            name="htmlMessage"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CKEtidor
                label="HTML message"
                error={errors.htmlMessage?.message}
                getContent={(messageHTML) => onChange(messageHTML)}
                initialContent={value}
              />
            )}
          />

          <S.WrapperButtons>
            <Button type="submit">Save</Button>
            {!edit && (
              <Button type="button" onClick={handleSaveAsTemplate}>
                Save as template
              </Button>
            )}
            <Button
              variant="secondary"
              type="button"
              disabled={!htmlMessage}
              onClick={() => {
                if (htmlMessage) setShowPreviewMessage(true)
              }}
            >
              Preview
            </Button>

            <Link href="/admin/message-center">
              <Button as="a" variant="secondary">
                Cancel
              </Button>
            </Link>
          </S.WrapperButtons>
        </S.Form>

        <PreviewMessage />

        <AddRecipients />
      </S.Wrapper>
    </>
  )
}

export default NewMessageTemplate
