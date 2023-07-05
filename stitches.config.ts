import { createStitches } from "@stitches/react"
import type * as Stitches from "@stitches/react"
import { media } from "./src/styles/Tokens/media"

export const { config, createTheme, css, getCssText, globalCss, styled, theme, keyframes } = createStitches({
  theme: {
    colors: {
      black100: "#2B2B2B",
      black200: "#202020",
      white: "#FFFFFF",
      gray100: "#D9D9D9",
      gray200: "#5E5E5E",
      gray300: "#A8A8A8",
      gray400: "#D6D7DA",
      gray500: "#252631",
      error: "#EB0744",
      success: "#00843D",
      blue: "#2059A6",
      "brand-primary": "#005AAF",
      "brand-secondary": "#00327F",
      "brand-gradient": "linear-gradient(87.7deg, #00327F 0.78%, #005AAF 100%)",
      yellow: "#FFDA6B"
    },
    space: {
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem"
    },
    radii: {
      1: "0.25rem",
      2: "0.3125rem"
    },
    fonts: {
      roboto:
        "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      rubik:
        "Rubik, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    },
    fontSizes: {
      xsm: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "2rem"
    },
    fontWeights: {
      thin: "300",
      normal: "400",
      medium: "500",
      bold: "700"
    },
    lineHeights: {
      1: "1rem",
      2: "1.1875rem",
      3: "2.375rem"
    }
  },
  utils: {
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value
    }),

    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value
    }),
    btr: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderTopLeftRadius: value,
      borderTopRightRadius: value
    }),
    bbr: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderBottomLeftRadius: value,
      borderBottomRightRadius: value
    }),
    blr: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderTopLeftRadius: value,
      borderBottomLeftRadius: value
    }),
    brr: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderTopRightRadius: value,
      borderBottomRightRadius: value
    }),

    bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value
    })
  },
  media: media
})
