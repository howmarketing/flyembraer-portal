/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dynamic from "next/dynamic"
import Head from "next/head"

import * as yup from "yup"

import Button from "components/Button"
import { usePreviewMessage } from "components/modals/PreviewMessage"
const CKEtidor = dynamic(() => import("components/CKEditor"), { ssr: false })

import { yupResolver } from "@hookform/resolvers/yup"
import { useGetTemplateById } from "api/message-center/getMessageTemplateId"
import { PutMessageTemplateIdProps, putMessageTemplateId } from "api/message-center/putMessageTemplateId"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import * as S from "./styles"

const editTemplateSchema = yup.object({
  title: yup.string().required("Title is required"),
  htmlMessage: yup.string().required("Message is required")
})

type EditTemplateType = yup.InferType<typeof editTemplateSchema>

const EditTempalte = () => {
  const router = useRouter()

  const { data: template } = useGetTemplateById(
    {
      id: String(router.query?.templateId)
    },
    {
      enabled: !!router.query?.templateId
    }
  )

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch
  } = useForm<EditTemplateType>({
    resolver: yupResolver(editTemplateSchema)
  })

  const { mutate: editTemplate } = useMutation(
    (props: PutMessageTemplateIdProps) => putMessageTemplateId(props, String(template?.id)),
    {
      onSuccess() {
        router.push(`/admin/message-center/manage-templates`)
      }
    }
  )

  const htmlMessage = watch("htmlMessage")

  const { PreviewMessage, setShowPreviewMessage } = usePreviewMessage({
    message: htmlMessage,
    title: watch("title")
  })

  const onSubmit = handleSubmit((values) => {
    const payload = {
      ...values,
      name: values.title,
      incDate: template!.incDate
    }

    editTemplate(payload)
  })

  useEffect(() => {
    reset({
      title: template?.title,
      htmlMessage: template?.htmlMessage
    })

    if (template?.htmlMessage) {
      window.editor?.setData(template?.htmlMessage)
    }

    return () => reset()
  }, [reset, template?.htmlMessage, template?.title])

  return (
    <>
      <Head>
        <title>Fly Embraer - Edit Templates - Message Center</title>
        <meta name="description" content="Fly Embraer 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Wrapper>
        <Link href="/admin/message-center/manage-templates">
          <Button as="a">Back to templates</Button>
        </Link>

        <br />
        <br />

        <S.Form onSubmit={onSubmit}>
          <S.Input id="title" {...register("title")} error={errors.title?.message}>
            Title
          </S.Input>

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

            <Link href="/admin/message-center/manage-templates">
              <Button as="a" variant="secondary">
                Cancel
              </Button>
            </Link>
          </S.WrapperButtons>
        </S.Form>

        <PreviewMessage />
      </S.Wrapper>
    </>
  )
}

export default EditTempalte
