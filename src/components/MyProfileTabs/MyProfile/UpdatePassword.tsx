import { ChangeEvent, useEffect, useState } from "react"

import { useMutation } from "react-query"

import { PostUserPasswordProps, postUsersPassword, PostUsersPasswordResponse } from "api/password/postUsersPassword"

import Button from "components/Button"
import { Flex } from "components/Flex"
import { PasswordValidation, submitPasswordValidation } from "components/PasswordValidation"
import TextField from "components/TextField"
import Text from "components/Text"

export const UpdatePassword = (props: PostUserPasswordProps) => {
	const [password, setPassword] = useState({
		password: "",
		confirmPassword: "",
	})
	const [isPasswordValid, setIsPasswordValid] = useState(false)

	const { mutate, isLoading, isSuccess, error } = useMutation<PostUsersPasswordResponse, Record<string, any>>(() =>
		postUsersPassword({
			...props,
			password: password.password,
		})
	)

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const fieldName = event.target.name
		const fieldValue = event.target.value

		setPassword((prevState) => ({
			...prevState,
			[fieldName]: fieldValue,
		}))
	}

	function handleUpdatePassword() {
		mutate()
	}

	useEffect(() => {
		setIsPasswordValid(() => {
			return submitPasswordValidation(password).every((requirements) => requirements.isValid)
		})
	}, [password])

	return (
		<Flex css={{ flexDirection: "column", gap: "2rem" }}>
			<Flex
				css={{ flexDirection: "column", gap: "2rem", "@web": { flexDirection: "row", alignItems: "flex-end" } }}
			>
				<Flex css={{ flexDirection: "column", gap: "24px", flex: 1 }}>
					<Text
						weight="bold"
						size="md"
						color="brand-primary"
						css={{
							alignSelf: "center",
							"@web": {
								alignSelf: "flex-start",
							},
						}}
					>
						PASSWORD UPDATE
					</Text>

					{isSuccess ? (
						<Text
							color="success"
							css={{
								alignSelf: "center",
								"@web": {
									alignSelf: "flex-start",
								},
							}}
						>
							Password changed successfully
						</Text>
					) : null}

					{error ? (
						<Text
							color="error"
							css={{
								alignSelf: "center",
								"@web": {
									alignSelf: "flex-start",
								},
							}}
						>
							{error?.response.data.description ?? "Something wrong. Contact the admin."}
						</Text>
					) : null}

					<Flex css={{ flexDirection: "column", gap: "28px" }}>
						<TextField
							id="password"
							type="password"
							isPassword
							value={password.password}
							onChange={handleChange}
							disabled={isLoading}
							required
						>
							New Password
						</TextField>
						<TextField
							id="confirmPassword"
							type="password"
							isPassword
							value={password.confirmPassword}
							onChange={handleChange}
							disabled={isLoading}
							required
						>
							Repeat the password
						</TextField>
					</Flex>
				</Flex>

				<Flex css={{ flexDirection: "column", gap: "24px", flex: 1 }}>
					<PasswordValidation {...password} />
				</Flex>
			</Flex>

			<Flex css={{ justifyContent: "center", "@web": { justifyContent: "flex-end" } }}>
				<Button
					css={{ width: "100%", maxWidth: "300px" }}
					onClick={handleUpdatePassword}
					disabled={isLoading || !isPasswordValid}
				>
					Update Password
				</Button>
			</Flex>
		</Flex>
	)
}
