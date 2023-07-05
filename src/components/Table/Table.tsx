/* eslint-disable react/jsx-key */
import React, { ReactNode } from "react"
import { useTable, useSortBy, HeaderGroup } from "react-table"

import type { CSS } from "@stitches/react"

import { ArrowDown } from "components/Icons/ArrowDown"
import { ArrowUp } from "components/Icons/ArrowUp"

import * as TableComponents from "./styles"
export const {
	TD,
	TH,
	StyledTable,
	StyledTableCSS,
	StyledTableHeadRow,
	StyledTableHeadItemCSS,
	StyledTableHead,
	StyledTableHeadCSS,
	StyledTableBody,
	StyledTableBodyItem,
	StyledTableHeadItem,
} = TableComponents

interface ExtendedHeaderGroup<D extends Record<string, unknown>> extends HeaderGroup<D> {
	css?: CSS
	columnCanSort?: boolean
}

type TableProps = {
	columns: {
		Header: string
		accessor: string
		columnCanSort?: boolean //Enable sorting
		css?: CSS //Css inline for the head element
	}[]
	data: Record<string, unknown>[]
	children?: ReactNode
}
//type TableProps = { children: ReactNode }

// export const Table = ({ children }: TableProps) => <StyledTable>{children}</StyledTable>
export const Table = ({ columns, data }: TableProps) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy)

	return (
		// apply the table props
		<table className={StyledTableCSS()} {...getTableProps()}>
			<thead className={StyledTableHeadCSS()}>
				{
					// Loop over the header rows
					headerGroups.map((headerGroup) => (
						// Apply the header row props
						<tr className={StyledTableHeadRow()} {...headerGroup.getHeaderGroupProps()}>
							{
								// Loop over the headers in each row
								headerGroup.headers.map((column: ExtendedHeaderGroup<Record<string, unknown>>) => {
									const { css } = column

									if (column.columnCanSort) {
										return (
											<th
												data-sortable
												className={StyledTableHeadItemCSS({ css })}
												{...column.getHeaderProps(column.getSortByToggleProps())}
											>
												{
													// Render the header
													column.render("Header")
												}
												<div>
													<ArrowUp
														fill={
															column.isSorted
																? column.isSortedDesc
																	? "#005AAF"
																	: "#D6D7DA"
																: "#D6D7DA"
														}
													/>
													<ArrowDown
														fill={
															column.isSorted
																? column.isSortedDesc
																	? "#D6D7DA"
																	: "#005AAF"
																: "#D6D7DA"
														}
													/>
												</div>
											</th>
										)
									}

									return (
										// Apply the header cell props
										<th className={StyledTableHeadItemCSS()} {...column.getHeaderProps()}>
											{
												// Render the header
												column.render("Header")
											}
										</th>
									)
								})
							}
						</tr>
					))
				}
			</thead>
			{/* Apply the table body props */}
			<tbody {...getTableBodyProps()}>
				{
					// Loop over the table rows
					rows.map((row) => {
						// Prepare the row for display
						prepareRow(row)
						return (
							// Apply the row props
							<tr {...row.getRowProps()}>
								{
									// Loop over the rows cells
									row.cells.map((cell) => {
										// Apply the cell props
										return (
											<td {...cell.getCellProps()}>
												{
													// Render the cell contents
													cell.render("Cell")
												}
											</td>
										)
									})
								}
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}

// ====================

type TableHeadItemProps = {
	children: string
}

export const TableHead = ({ children }: TableProps) => (
	<StyledTableHead>
		<tr>{children}</tr>
	</StyledTableHead>
)

export const TableHeadItem = ({ children }: TableHeadItemProps) => <StyledTableHeadItem>{children}</StyledTableHeadItem>

export const TableBody = ({ children }: TableProps) => <StyledTableBody>{children}</StyledTableBody>

export const TableBodyItem = ({ children }: TableProps) => <StyledTableBodyItem>{children}</StyledTableBodyItem>
