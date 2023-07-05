import { styled } from "../../../stitches.config"

export const StyledTable = styled("table", {
	borderCollapse: "collapse",
	width: "100%",
	fontSize: "14px",
})

export const StyledThead = styled("thead", {
	position: "sticky",
	top: "0",
	zIndex: "2",
	height: "52px",
	fontWeight: 500,
	borderBottom: "solid 1px #D9D9D9",
})

export const StyledTh = styled("th", {
	width: "160px",
	padding: "12px",
	textAlign: "left",
	cursor: "pointer",
	userSelect: "none",
	backgroundColor: "#fff",

	"& > div": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "2px",

		"& > svg": {
			marginRight: "-10px !important",
		},
	},
})

export const StyledThBox = styled("div", {
	"* svg": {
		marginRight: "-4px !important",
	},
})

export const StyledTd = styled("td", {
	width: "160px",
	padding: "12px",
	textAlign: "start",
	fontWeight: "300",
})

export const StyledTr = styled("tr", {
	borderBottom: "solid 1px #D9D9D9",
})
