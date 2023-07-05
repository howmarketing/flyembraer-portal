import { InputHTMLAttributes } from "react"
import { styled } from "../../../stitches.config"

type TableRadioProps = InputHTMLAttributes<HTMLInputElement>

function TableRadio({ ...rest }: TableRadioProps) {
	return <Input {...rest} type="radio" />
}

export default TableRadio

const Input = styled("input", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	appearance: "none",
	width: "20px",
	height: "20px",
	border: "0.15rem solid $blue",
	borderRadius: "50%",
	background: "transparent",
	transition: "background 0.2s",
	outline: "none",
	cursor: "pointer",
	position: "relative",

	"&:focus": {
		boxShadow: "0 0 0.5rem $blue",
	},

	"&:before": {
		content: "",
		width: "10px",
		height: "10px",
		borderRadius: "50%",
		background: "$blue",
		transition: "opacity 0.2s",
		opacity: 0,
		position: "absolute",
	},

	"&:checked": {
		"&:before": {
			opacity: 1,
		},
	},
})
