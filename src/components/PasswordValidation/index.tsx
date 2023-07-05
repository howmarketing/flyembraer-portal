import { useMemo } from "react"

import Text from "components/Text"

import { styled, theme } from "../../../stitches.config"

type PasswordValidationProps = {
	password: string
	confirmPassword: string
}

export const PasswordValidation = (password: PasswordValidationProps) => {
	const validatePassword = useMemo(() => {
		if (password.password === "" && password.confirmPassword === "") {
			return [
				{
					text: "Must have within 8 to 14 characters",
					color: theme.colors.black100,
				},
				{
					text: "Must contain at least one upper-case letter",
					color: theme.colors.black100,
				},
				{
					text: "Must contain at least one lower case letter",
					color: theme.colors.black100,
				},
				{
					text: "Passwords must match",
					color: theme.colors.black100,
				},
				{
					text: "Must contain at least one number",
					color: theme.colors.black100,
				},
			]
		}

		return [
			{
				text: "Must have within 8 to 14 characters",
				color:
					password.password.length >= 8 && password.password.length <= 14
						? theme.colors.success
						: theme.colors.error,
				isValid: password.password.length >= 8 && password.password.length <= 14,
			},
			{
				text: "Must contain at least one upper-case letter",
				color: /[A-Z]/.test(password.password) ? theme.colors.success : theme.colors.error,
				isValid: /[A-Z]/.test(password.password),
			},
			{
				text: "Must contain at least one lower case letter",
				color: /[a-z]/.test(password.password) ? theme.colors.success : theme.colors.error,
				isValid: /[a-z]/.test(password.password),
			},
			{
				text: "Passwords must match",
				color: password.password === password.confirmPassword ? theme.colors.success : theme.colors.error,
				isValid: password.password === password.confirmPassword,
			},
			{
				text: "Must contain at least one number",
				color: /\d/.test(password.password) ? theme.colors.success : theme.colors.error,
				isValid: /\d/.test(password.password),
			},
		]
	}, [password])

	return (
		<MustHaveList>
			Your password must have:
			{validatePassword.map(({ text, color }) => (
				<Text key={text} as="li" weight="normal" size="xsm" css={{ color, lineHeight: "24px" }}>
					{text}
				</Text>
			))}
		</MustHaveList>
	)
}

export const submitPasswordValidation = (password: PasswordValidationProps) => [
	{
		text: "Must have within 8 to 14 characters",
		isValid: password.password.length >= 8 && password.password.length <= 14,
	},
	{
		text: "Must contain at least one upper-case letter",
		isValid: /[A-Z]/.test(password.password),
	},
	{
		text: "Must contain at least one lower case letter",
		isValid: /[a-z]/.test(password.password),
	},
	{
		text: "Passwords must match",
		isValid: password.password === password.confirmPassword,
	},
	{
		text: "Must contain at least one number",
		isValid: /\d/.test(password.password),
	},
]

const MustHaveList = styled("ul", {
	fontSize: "$sm",
	lineHeight: "25px",
	fontWeight: "$normal",
	color: "$black200",

	"& li": {
		listStyleType: "disc",
		listStylePosition: "inside",
	},
})
