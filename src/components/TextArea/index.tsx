import { forwardRef, ForwardRefRenderFunction, TextareaHTMLAttributes } from "react"

import { CSS } from "@stitches/react"

import { css, styled } from "../../../stitches.config"

type TextAreaProps = {
	id: string
	css?: CSS
	children: string
	error?: string
	required?: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
	{ id, css, className, children, error, required = false, ...props },
	ref
) => {
	return (
		<div className={`${styledWrapper({ css })} ${className}`}>
			<StyledLabel htmlFor={id}>{required ? `${children} *` : `${children}`}</StyledLabel>

			<StyledInput
				id={id}
				name={id}
				rows={5}
				required={required}
				aria-required={required}
				aria-invalid={error ? true : false}
				aria-describedby={error ? `${id}_error_message` : undefined}
				ref={ref}
				{...props}
			/>

			{error && <StyledErrorMessage id={`${id}_error_message`}>{error}</StyledErrorMessage>}
		</div>
	)
}

export default forwardRef(TextArea)

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

const StyledInput = styled("textarea", {
	width: "100%",
	height: "200px",

	display: "inline-block",
	pt: "8px",
	px: "$16",

	color: "$gray200",
	background: "$white",
	borderRadius: "$2",
	border: "1px solid $gray100",
	// boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",

	fontSize: "$sm",

	resize: "none",

	"&:disabled": {
		background: "$gray100",
		cursor: "not-allowed",
	},
})
