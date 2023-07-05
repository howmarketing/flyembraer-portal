import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, useState } from "react"

import { CSS } from "@stitches/react"

import { Flex } from "components/Flex"
import { EyeOutline } from "components/Icons/EyeOutline"
import { EyeOffOutline } from "components/Icons/EyeOffOutline"

import { css, styled } from "../../../stitches.config"

type TextFieldProps = {
	id: string
	css?: CSS
	children?: string
	error?: string
	hint?: string
	required?: boolean
	isPassword?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
	{ id, css, children, hint, error, type = "text", required = false, isPassword = false, ...props },
	ref
) => {
	const [showPassword, setShowPassword] = useState(false)

	function handleShowPassword() {
		setShowPassword((prevState) => !prevState)
	}

	return (
		<div className={styledWrapper({ css })}>
			{children && <StyledLabel htmlFor={id}>{required ? `${children} *` : `${children}`}</StyledLabel>}
			{error && <StyledErrorMessage id={`${id}_error_message`}>{error}</StyledErrorMessage>}

			<Flex css={{ position: "relative" }}>
				<StyledInput
					id={id}
					name={id}
					type={showPassword ? "text" : type}
					aria-required={required}
					aria-invalid={error ? true : false}
					aria-describedby={error ? `${id}_error_message` : undefined}
					ref={ref}
					{...props}
				/>

				{isPassword &&
					(showPassword ? (
						<PasswordButton type="button" onClick={handleShowPassword}>
							<EyeOutline width="22" height="18" />
						</PasswordButton>
					) : (
						<PasswordButton type="button" onClick={handleShowPassword}>
							<EyeOffOutline width="22" height="18" />
						</PasswordButton>
					))}
			</Flex>

			{!error && hint ? <StyledHint>{hint}</StyledHint> : null}
		</div>
	)
}

export default forwardRef(TextField)

const styledWrapper = css({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "$4",
})

const StyledLabel = styled("label", {
	fontSize: "$sm",
	lineHeight: "$1",
	fontWeight: "$thin",
	color: "$black200",
})

const StyledErrorMessage = styled("p", {
	fontSize: "$sm",
	lineHeight: "14px",
	color: "$error",
})

const StyledInput = styled("input", {
	width: "100%",
	height: "40px",

	display: "inline-block",
	px: "$16",

	color: "$gray300",
	background: "$white",
	borderRadius: "4px",
	border: "1px solid $gray100",
	boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",

	fontSize: "$sm",

	"&:disabled": {
		background: "$gray100",
		cursor: "not-allowed",
	},
})

const StyledHint = styled("p", {
	fontWeight: "$thin",
	fontSize: "$sm",
	lineHeight: "14px",
	color: "$gray300",
})

const PasswordButton = styled("button", {
	all: "unset",
	appearance: "none",
	width: "min-content",
	height: "auto",
	p: "0.25rem",
	borderRadius: "100%",
	bg: "$white",
	position: "absolute",
	top: "50%",
	right: "12px",
	transform: "translateY(-50%)",
	cursor: "pointer",

	"&:focus": {
		boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.7)",
	},
})
