import { useState } from "react"
import {
	PaginationState,
	SortingState,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"

import { StyledTable, StyledThead, StyledTh, StyledTr, StyledTd, StyledThBox } from "./styles"
import { FlyPagination } from "components/FlyPagination/FlyPagination"
import ArrowsIcon from "components/Icons/Arrows"

type TableProps = {
	data: any
	columns: any
	paginationProps?: any
	styledTableCustom?: any
	error?: any
}

export const FlyTable = ({ data, columns, paginationProps, styledTableCustom, error }: TableProps) => {
	const [sorting, setSorting] = useState<SortingState>([])

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 5,
	})

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			pagination,
		},
		onSortingChange: setSorting,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	})

	return (
		<>
			<StyledTable className={styledTableCustom}>
				<StyledThead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<StyledTh
									style={header.column.getCanSort() ? { cursor: "pointer" } : { cursor: "default" }}
									key={header.id}
									colSpan={header.colSpan}
									onClick={header.column.getToggleSortingHandler()}
								>
									<StyledThBox>
										<span>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</span>
										<div>
											{header.column.getCanSort() && (
												<ArrowsIcon sortDirection={header.column.getIsSorted()} />
											)}
										</div>
									</StyledThBox>
								</StyledTh>
							))}
						</tr>
					))}
				</StyledThead>
				<tbody>
					{data?.length ? (
						table.getRowModel().rows.map((row) => (
							<StyledTr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<StyledTd key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</StyledTd>
								))}
							</StyledTr>
						))
					) : (
						<StyledTr>
							<StyledTd> {error ? error : "No data found"}</StyledTd>
						</StyledTr>
					)}
				</tbody>
			</StyledTable>

			<FlyPagination
				enabled={paginationProps?.enabled}
				pagination={pagination}
				table={table}
				totalElements={data?.length}
			/>
		</>
	)
}
