import { styled } from "../../../stitches.config"
import { motion } from "framer-motion"

export const Wrapper = styled("div", {
	position: "absolute",
})

export const Mobile = styled(motion.div, {
	cursor: "grab",
	width: "100vw",
	zIndex: "40",
	bottom: "0",
	left: "0",
	right: "0",
	position: "fixed",

	"@media (min-width: 640px)": {
		display: "none",
	},
})

export const Desktop = styled(motion.div, {
	display: "none",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
	zIndex: "40",
	inset: "0",
	position: "fixed",

	"@media (min-width: 640px)": {
		display: "flex",
	},
})

export const Overlay = styled(motion.div, {
	position: "fixed",
	inset: "0",
	zIndex: "30",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
})

export const ButtonClose = styled("button", {})
