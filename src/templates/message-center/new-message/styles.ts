import { styled } from "../../../../stitches.config"

import SelectField from "components/Select"
import TextField from "components/TextField"
import TextAreaComponent from "components/TextArea"

export const Wrapper = styled("main", {
  px: "$24",
  py: "$40",
  backgroundColor: "$white"
})

export const Form = styled("form", {
  marginTop: "$24",
  display: "flex",
  flexDirection: "column",
  gap: "$24"
})

export const Select = styled(SelectField, {
  width: "100%",
  maxWidth: "220px"
})

export const Input = styled(TextField, {
  maxWidth: "416px"
})

export const WrapperDates = styled("div", {
  display: "flex",
  gap: "$16"
})

export const WrapperRecipients = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  gap: "$16"
})

export const WrapperButtonsRecipients = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$16"
})

export const WrapperButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$16"
})

export const TextArea = styled(TextAreaComponent)

export const WrapperRecipientsList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$16",
  width: "415px",
  maxHeight: "200px",
  minHeight: "200px",
  overflowY: "auto",

  background: "#FFFFFF",
  border: "1px solid #C4C4C4",
  boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.15)",
  borderRadius: "5px",
  padding: 16
})

export const WrapperFilter = styled("div", {
  "& + &": {
    paddingTop: "$16",
    borderTop: "1px solid #C4C4C4"
  }
})

export const WrapperRecipient = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "$2"
})

export const LabelRecipient = styled("p", {
  fontSize: "$sm",
  color: "#72767E"
})

export const Divider = styled("span", {
  display: "block",
  fontWeight: "$bold",
  fontSize: "$sm",
  lineHeight: "24px",
  color: "#72767E"
})
