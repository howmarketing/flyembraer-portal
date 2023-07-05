import { styled } from "../../../../../stitches.config"

import ButtonComponents from "components/Button"

export const Wrapper = styled("div", {
  display: "flex",
  gap: "8px",
  maxWidth: "172px"
})

export const Button = styled(ButtonComponents, {
  maxWidth: "52px"
})
