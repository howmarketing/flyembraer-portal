import { styled } from "../../../../stitches.config"

export const Wrapper = styled("div", {
	marginTop: "$24",
})

export const WrapperPagination = styled("div", {
	width: "100%",
	display: "flex",
	justifyContent: "center",
})

export const WrapperPaginationNumbers = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "8px",
})

export const ButtonPagination = styled("div", {
	padding: "12px",
	borderRadius: "4px",
	cursor: "pointer",
	minWidth: "40px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	userSelect: "none",
	fontSize: "$sm",
	letterSpacing: "0.21px",

	variants: {
		current: {
			true: {
				backgroundColor: "$blue",
				color: "$white",
				fontWeight: "$bold",
			},
		},

		disabled: {
			true: {
				opacity: 0.5,
				cursor: "not-allowed",
			},
		},
	},
})

export const WrapperRowsPerPage = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "8px",
})

export const Text = styled("span", {
	color: "#778CA2",
	fontSize: "$sm",
	lineHeight: "17px",
	textTransform: "uppercase",
	fontFamily: "$rubik",
})

export const SelectShowing = styled("select", {
	border: "1px solid #C4C4C4",
	padding: "4px 0px 4px 15px",
	borderRadius: "5px",
	boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset",
})
