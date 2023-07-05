import { styled } from "../../../../stitches.config"

export const Wrapper = styled("div", {
  px: "$24",
  py: "$40",
  backgroundColor: "$white",

  "@maxDesktop": {
    px: "0",
    py: "0"
  }
})

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: "$18"
})

export const Title = styled("h3", {
  all: "unset",
  fontSize: "$xxl",
  fontWeight: "$normal",
  lineHeight: "48px",
  color: "$brand-primary",
  textTransform: "uppercase",

  "@maxDesktop": {
    fontSize: "$lg",
    lineHeight: "32px",
    fontWeight: "$thin"
  }
})

export const WrapperSection = styled("section", {
  marginTop: "$32"
})

export const WrapperInputs = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$24",
  marginBottom: "$32",
  marginTop: "$24"
})

export const WrapperInputSearch = styled("div", {
  "> div": {
    maxWidth: "305px"
  }
})

export const WrapperDates = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  gap: "$24",

  "@maxDesktop": {
    flexWrap: "wrap"
  }
})

export const WrapperButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$24"
})

export const WrapperTableMobile = styled("div", {
  "& table": {
    display: "block",
    overflowX: "scroll",
    whiteSpace: "nowrap",

    "-ms-overflow-style": "none",
    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
})
