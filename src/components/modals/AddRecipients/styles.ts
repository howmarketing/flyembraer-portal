import Button from "components/Button"
import { styled } from "../../../../stitches.config"
import CheckboxInput from "components/Checkbox"

export const WrapperModal = styled("div", {
	width: "100%",
	maxWidth: "900px",
	height: "fit-content",
	maxHeight: "85%",
	backgroundColor: "$white",
	borderRadius: "8px",
	position: "relative",
	padding: "32px",
	display: "flex",
	justifyContent: "space-between",
	gap: "48px",
	overflow: "auto",

	"@media (max-width: 640px)": {
		borderRadius: "0",
		padding: "32px 24px",
		flexDirection: "column",
	},
})

export const ButtonClose = styled("button", {
	all: "unset",
	position: "absolute",
	top: "20px",
	right: "20px",
	cursor: "pointer",
	borderRadius: "15px",
	width: "30px",
	height: "29px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "all 0.2s ease-in-out",
	outline: "none",

	"&:focus, &:hover": {
		boxShadow: "0 0 0 2px $colors$blue",
	},
})

export const Left = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "16px",
	width: "100%",

	"& > button": {
		maxWidth: "fit-content",
		padding: "0 20px",
	},
})

export const WrapperInputs = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "16px",
	width: "100%",
	alignSelf: "flex-start",
})

export const WrapperInput = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "8px",
	width: "100%",
})

export const WrapperLabel = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
})

export const Label = styled("label", {
	fontSize: "$sm",
	color: "#1E3137",
})

export const Right = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "16px",
	width: "100%",
	maxWidth: "45%",
})

export const Title = styled("h4", {
	fontWeight: 700,
	fontSize: "$sm",
	lineHeight: "24px",
})

export const WrapperSelected = styled("div", {
	position: "relative",
	flex: 1,
	maxHeight: "501px",
})

export const WrapperFilters = styled("div", {
	maxHeight: "100%",
	height: "100%",
	border: "1px solid $colors$gray400",
	borderRadius: "4px",
	padding: "24px 16px",
	display: "flex",
	flexDirection: "column",
	gap: "$8",
	overflowY: "scroll",
})

export const WrapperButtons = styled("div", {
	display: "flex",
	gap: "8px",

	"& > button": {
		flex: 1,
	},
})

export const ButtonClearSelected = styled(Button, {
	position: "absolute",
	bottom: "10px",
	right: "10px",
})

export const Filter = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$16",
})

export const WrapperCheckbox = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "$2",
})

export const LabelCheckbox = styled("p", {
	fontSize: "$sm",
	color: "#72767E",
})

export const Divider = styled("span", {
	display: "block",
	fontWeight: "$bold",
	fontSize: "$sm",
	lineHeight: "24px",
	color: "#72767E",
})

export const Checkbox = styled(CheckboxInput, {
	// width: "fit-content"
	alignItems: "flex-start",
})
