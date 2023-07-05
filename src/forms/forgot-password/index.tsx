import Link from "next/link"

import { useState } from "react"

import { useMutation } from "react-query"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import { postForgotPassword } from "api/password/postForgotPassword"

import Button from "components/Button"
import { Flex } from "components/Flex"
import TextField from "components/TextField"

import { styled } from "../../../stitches.config"
import Text from "components/Text"

export const ForgotPasswordForm = () => {
  const [accountEmailValue, setAccountEmailValue] = useState("")

  const { mutate, isLoading, isError, isSuccess } = useMutation(
    () =>
      postForgotPassword({
        email: accountEmailValue.includes("@") ? accountEmailValue : null,
        username: accountEmailValue.includes("@") ? null : accountEmailValue
      }),
    {
      onSuccess() {
        reset()
      }
    }
  )

  type ForgotPasswordFormData = yup.InferType<typeof forgotPasswordFormSchema>

  const forgotPasswordFormSchema = yup.object({
    accountEmail: yup
      .string()
      .min(5, "Field must have at least 5 characters")
      .max(50, "Field must less than 50 characters")
      .required("This field is required")
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordFormSchema)
  })

  const onSubmit = (values: ForgotPasswordFormData) => {
    setAccountEmailValue(values.accountEmail)
    setTimeout(() => {
      mutate()
    }, 100)
  }

  return (
    <Wrapper>
      <Text
        as="h1"
        weight={"medium"}
        size={"lg"}
        color={"brand-primary"}
        css={{ lineHeight: "2rem", alignSelf: "center", mb: "6px" }}
      >
        Password Recovery
      </Text>
      <Text as="p" weight={"thin"} size={"xsm"} css={{ lineHeight: "14px", alignSelf: "center", mb: "18px" }}>
        Please enter your account or email to recover your password
      </Text>

      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        css={{ flexDirection: "column", gap: isError || isSuccess ? "0.75rem" : "34px" }}
      >
        <Flex css={{ flexDirection: "column", alignItems: "center" }}>
          <TextField
            id="accountEmail"
            error={errors.accountEmail?.message}
            {...register("accountEmail")}
            disabled={isLoading}
          />
          {isError ? (
            <Text weight="bold" size="xsm" color="error" css={{ lineHeight: "24px" }}>
              Account or email invalid
            </Text>
          ) : null}
          {isSuccess ? (
            <Text weight="bold" size="xsm" color="success" css={{ lineHeight: "24px" }}>
              Sent to registered email address
            </Text>
          ) : null}
        </Flex>

        <Flex css={{ flexDirection: "column", gap: "1rem" }}>
          <Button css={{ width: "100%" }} type="submit" disabled={isLoading} isLoading={isLoading}>
            Send
          </Button>
          <Link href="/">
            <Button css={{ width: "100%" }} variant={"secondary"} as="a" disabled={isLoading}>
              Back
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

const Wrapper = styled(Flex, {
  flexDirection: "column",
  width: "100%",
  height: "auto",
  maxWidth: "95%",
  maxHeight: "600px",
  padding: "1rem",
  br: "0.5rem",
  border: "1px solid #A3B5BF",
  bg: "$white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  "@mediumMobile": {
    width: "410px",
    height: "300px",
    p: "2rem 38px"
  }
})
