import { forwardRef, ForwardRefRenderFunction, SelectHTMLAttributes } from "react"

import { CSS } from "@stitches/react"

import { css, styled } from "../../../stitches.config"

export type SelectOptionsProps = {
	value: string
	displayValue: string
}

export type SelectProps = {
	id: string
	css?: CSS
	label: string
	error?: string
	disabled?: boolean
	options?: SelectOptionsProps[]
	required?: boolean
} & SelectHTMLAttributes<HTMLSelectElement>

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
	{ id, css, label, error, disabled, options, defaultValue, required = false, ...props },
	ref
) => {
	return (
		<div className={styledWrapper({ css })}>
			<StyledLabel htmlFor={id}>{required ? `${label} *` : `${label}`}</StyledLabel>

			<StyledSelect
				id={id}
				name={id}
				disabled={disabled}
				aria-disabled={disabled}
				aria-required={required}
				aria-invalid={error ? true : false}
				aria-describedby={error ? `${id}_error_message` : undefined}
				ref={ref}
				defaultValue={defaultValue}
				{...props}
			>
				<option></option>
				{options?.map(({ value, displayValue }, index) => {
					if (value === "" || displayValue === "") return
					return (
						<option key={index} value={value}>
							{displayValue}
						</option>
					)
				})}
			</StyledSelect>

			{error && <StyledErrorMessage id={`${id}_error_message`}>{error}</StyledErrorMessage>}
		</div>
	)
}

export default forwardRef(Select)

const styledWrapper = css({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "$4",
})

const StyledLabel = styled("label", {
	fontSize: "$sm",
	fontWeight: "$thin",
	color: "$black200",
})

const StyledErrorMessage = styled("p", {
	fontSize: "$sm",
	color: "$error",
})

const StyledSelect = styled("select", {
	width: "100%",
	height: "2.5rem",

	display: "inline-block",
	px: "10px",

	color: "$gray300",
	background: "$white",
	borderRadius: "4px",
	border: "1px solid $gray100",
	// boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",

	fontSize: "$sm",

	"&:disabled": {
		background: "$gray100",
		cursor: "not-allowed",
	},
})
