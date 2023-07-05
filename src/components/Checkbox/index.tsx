import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, useState } from "react"
import { styled } from "../../../stitches.config"

type CheckBoxProps = {
	id: string
	children: string | React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const CheckBox: ForwardRefRenderFunction<HTMLInputElement, CheckBoxProps> = (
	{ id, children, className, ...props },
	ref
) => {
	const [checked, setChecked] = useState(props.defaultChecked || false)

	return (
		<CheckBoxWrapper className={className}>
			<StyledInput
				id={id}
				name={id}
				type="checkbox"
				onChange={(event) => setChecked(event.target.checked)}
				aria-checked={checked}
				ref={ref}
				{...props}
			/>
			{children && <StyledLabel htmlFor={id}>{children}</StyledLabel>}
		</CheckBoxWrapper>
	)
}
export default forwardRef(CheckBox)

const CheckBoxWrapper = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "$8",
})

const StyledLabel = styled("label", {
	fontSize: "$sm",
	color: "$gray200",
})

const StyledInput = styled("input", {
	appearance: "none",
	outline: "none",
	width: "0.875rem",
	height: "0.875rem",
	display: "inline-block",
	position: "relative",
	border: "1px solid $gray100",
	borderRadius: "$1",
	transition: "0.15s",

	"&:disabled": {
		cursor: "not-allowed",
	},

	"&:checked": {
		border: "1px solid $blue",
		backgroundColor: "$blue",

		"&::after": {
			content: "",
			width: "4px",
			height: "9px",
			display: "block",
			position: "absolute",
			top: "50%",
			left: "50%",
			opacity: "1",
			border: "2px solid $white",
			borderTop: "0",
			borderLeft: "0",
			willChange: "transform",
			transform: "translate(-50%, -50%) rotate(43deg)",
		},
	},

	"&:focus, &:focus-visible": {
		boxShadow: "0 0 0 2px black",
	},
})
