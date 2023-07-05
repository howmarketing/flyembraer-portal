import { styled } from "../../../stitches.config"

export const Wrapper = styled("div", {
	"*": {
		fontFamily: "$rubik",
	},
})

export const Header = styled("header", {
	display: "flex",
	alignItems: "center",
	marginTop: "$24",
})

export const WrapperTitle = styled("div", {
	width: "100%",
	maxWidth: "250px",
	marginRight: "$16",
	paddingLeft: "$12",
})

export const WrapperDate = styled("div", {
	width: "100%",
	maxWidth: "145px",
	marginRight: "$16",
})

export const WrapperRecipients = styled("div", {
	width: "100%",
	maxWidth: "150px",
})

export const Title = styled("h5", {
	fontWeight: "$bold",
	fontSize: "$xsm",
	lineHeight: "14px",
})

export const Text = styled("h5", {
	fontWeight: "$thin",
	fontSize: "$xsm",
	lineHeight: "14px",
})

export const Card = styled("article", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	backgroundColor: "$yellow",
	borderRadius: "10px",
	padding: "20px 20px 20px 0",
	marginTop: "$8",
})

export const WrapperData = styled("div", {
	display: "flex",
	alignItems: "center",
	flex: 1,
})
