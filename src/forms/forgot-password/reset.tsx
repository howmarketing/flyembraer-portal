import { ChangeEvent, MouseEvent, useEffect, useState } from "react"

import { useMutation } from "react-query"

import Button from "components/Button"
import { Flex } from "components/Flex"
import { PasswordValidation, submitPasswordValidation } from "components/PasswordValidation"
import Text from "components/Text"
import TextField from "components/TextField"

import { deleteToken } from "api/password/deleteToken"
import type { GetVerifyTokenApiResponse } from "api/password/getVerifyToken"
import { postUsersPassword } from "api/password/postUsersPassword"

import { queryClient } from "services/queryClient"

import { styled } from "../../../stitches.config"

type ResetPassowordFormProps = {
  userData?: GetVerifyTokenApiResponse
}

export const ResetPassowordForm = ({ userData }: ResetPassowordFormProps) => {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: ""
  })
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [blockForm, setBlockForm] = useState(false)

  const {
    mutate: changePassword,
    isSuccess,
    isLoading
  } = useMutation(
    () => postUsersPassword({ dn: userData?.dn, username: userData?.username, password: password.password }),
    {
      onSuccess() {
        setPassword({ password: "", confirmPassword: "" })
        setBlockForm(true)
        setIsPasswordValid(false)
        expireToken()
        queryClient.invalidateQueries({ queryKey: "token" })
      }
    }
  )

  const { mutate: expireToken } = useMutation(() => deleteToken(userData?.token))

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.name
    const fieldValue = event.target.value

    setPassword((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }))
  }

  useEffect(() => {
    setIsPasswordValid(() => {
      return submitPasswordValidation(password).every((requirements) => requirements.isValid)
    })
  }, [password])

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (isPasswordValid) {
      changePassword()
    }
  }

  return (
    <Wrapper>
      <Text as="h1" size="xl" weight="bold" color="brand-primary" css={{ textAlign: "center", lineHeight: "2rem" }}>
        Password Recovery
      </Text>
      {isSuccess ? (
        <Text as="p" color="success" css={{ textAlign: "center" }}>
          Password changed successfully
        </Text>
      ) : null}
      <Flex as="form" css={{ flexDirection: "column", gap: "24px" }}>
        <TextField
          id="password"
          type="password"
          isPassword
          value={password.password}
          onChange={handleChange}
          required
          disabled={blockForm}
        >
          New Password
        </TextField>
        <TextField
          id="confirmPassword"
          type="password"
          isPassword
          value={password.confirmPassword}
          onChange={handleChange}
          required
          disabled={blockForm}
        >
          Repeat the password
        </TextField>
        <PasswordValidation {...password} />
        <Text>Do not use your login, first name or last name. *</Text>
        <Button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={!isPasswordValid || blockForm || isLoading}
          css={{ width: "100%", mb: "10px" }}
        >
          Confirm password change
        </Button>
      </Flex>
    </Wrapper>
  )
}

const Wrapper = styled(Flex, {
  width: "95%",
  maxWidth: "410px",
  height: "auto",
  flexDirection: "column",
  gap: "12px",
  br: "0.5rem",
  border: "1px solid #A3B5BF",
  bg: "$white",
  padding: "24px 16px 20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  "@mediumMobile": {
    padding: "28px 42px 22px"
  }
})
