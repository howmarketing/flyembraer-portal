/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, ForwardRefRenderFunction } from "react"
import { Search } from "components/Icons/Search"
import { Filter } from "components/Icons/Filter"
import { styled } from "../../../stitches.config"

const SearchField: ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
	return (
		<InputWrapper>
			<Search width={"32px"} height={"32px"} fill="#0000FF" />
			<InputField type="text" placeholder="Search Files & Folders" ref={ref} {...props} />
			<Filter />
		</InputWrapper>
	)
}

export default forwardRef(SearchField)

const InputField = styled("input", {
	all: "unset",
	width: "100%",
	height: "auto",
	color: "#778CA2",
	mx: "18px",

	"&::placeholder": {
		color: "#778CA2",
	},
})

const InputWrapper = styled("div", {
	width: "100%",
	height: "auto",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "16px 16px 16px 40px",

	border: "none",
	borderRadius: "100px",

	background: "#F7F8FA",

	fontSize: "14px",
	lineHeight: "17px",

	transition: "0.075s",

	"&:focus-within": {
		outline: "2px solid black",
	},
})
