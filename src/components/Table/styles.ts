import { styled, css } from "../../../stitches.config"

export const WrapperTable = styled("div", {
	display: "block",
	overflowX: "scroll",
	overflowY: "hidden",
	maxWidth: "100%",
})

export const StyledTable = styled("table", {
	borderCollapse: "collapse",
	width: "100%",

	"*": {
		fontFamily: "$rubik",
		fontWeight: "$thin",
	},

	th: {
		textAlign: "left",
	},

	"thead th": {
		fontWeight: "$bold",
	},

	"tbody tr": {
		height: 75,

		"&:nth-child(even)": {
			"& td": {
				backgroundColor: "#E7E7E7",
			},
		},
	},

	"thead tr": {
		"& th": {
			padding: "20px 5px",
			borderBottom: "1px solid #000000",

			"&:first-child": {
				borderBottom: "none",
			},
		},
	},

	variants: {
		canSelect: {
			true: {
				"thead tr th:first-child": {
					width: "40px !important",
				},
				"tbody tr": {
					cursor: "pointer",

					"& td:first-child": {
						width: "40px !important",
					},

					"&:nth-child(even) td:not(:first-child)": {
						backgroundColor: "#E7E7E7",
					},

					"&:nth-child(even) td:first-child": {
						backgroundColor: "transparent",
					},
				},

				"thead tr th:not(:first-child)": {
					padding: "20px 5px",
					borderBottom: "1px solid #000000",
				},
			},
			false: {
				"thead tr th:first-child": {
					borderBottom: "1px solid #000000",
				},
			},
		},
	},
})

export const TD = styled("td", {
	maxWidth: "180px",
	whiteSpace: "break-spaces",

	"&:not(:first-child)": {
		padding: "24px 0px",
	},

	"&:nth-child(2)": {
		paddingLeft: "10px",
	},

	"&:last-child": {
		maxWidth: "172px",
		backgroundColor: "#red",
	},
})

export const TH = styled("th", {
	cursor: "pointer",

	"> svg": {
		marginLeft: "10px",
	},
})

export const StyledTableCSS = css({
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
})

export const StyledTableHeadRow = css({
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	gap: "12px",
})

export const StyledTableHeadItemCSS = css({
	color: "$black100",
	padding: "0.313rem",
	width: "100%",
	height: "100%",

	"&[data-sortable]": {
		display: "inline-flex",
		alignItems: "center",
		gap: "0.5rem",
		userSelect: "none",

		"& > div": {
			display: "inline-flex",
			flexDirection: "column",
			gap: "0.25rem",
		},
	},
})

export const StyledTableHead = styled("thead", {
	width: "100%",
	height: "100%",
	padding: "22px 10px",
	borderBottom: "1px solid $black100",

	fontWeight: "$bold",
	fontSize: "$xsm",
	lineHeight: "14px",
	textAlign: "left",

	"& tr": {
		display: "flex",
		gap: "1rem",
	},

	"& th": {
		flex: 1,
	},
})
export const StyledTableHeadCSS = css("thead", {
	width: "100%",
	height: "100%",
	padding: "22px 10px",
	borderBottom: "1px solid $black100",

	fontWeight: "$bold",
	fontSize: "$xsm",
	lineHeight: "14px",
	textAlign: "left",

	"& tr": {
		display: "flex",
		gap: "1rem",
	},

	"& th": {
		flex: 1,
	},
})

export const StyledTableBody = styled("tbody", {
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",

	"& tr:nth-child(odd)": {
		backgroundColor: "white",
	},
	"& tr:nth-child(even)": {
		backgroundColor: "LightGray",
	},

	"& td": {
		mr: "1rem",
	},
})

export const StyledTableBodyItem = styled("td", {
	textAlign: "center",
	color: "$black100",
	padding: "0.313rem",
	width: "20rem",
})

export const StyledTableHeadItem = styled("th", {
	color: "$black100",
	padding: "0.313rem",
	width: "16.2rem",
})
