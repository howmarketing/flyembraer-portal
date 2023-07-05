/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, cloneElement, useEffect, useState } from "react"

import {
	ColumnDef,
	SortingState,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"

import TableRadio from "./TableRadio"

import ArrowsIcon from "./Arrows"
import TablePagination from "./TablePagination"
import * as S from "./styles"

type PaginationServer = {
	paginationServer: true
	currentPage: number
	pageSize: number
	totalPages: number
	onPageChange: (page: number) => void
	onChangeRowsPerPage: (pageSize: number) => void
}

type PaginationClient = {
	paginationServer?: false
	currentPage?: number
	pageSize?: number
	totalPages?: number
	onPageChange?: (page: number) => void
	onChangeRowsPerPage?: (pageSize: number) => void
}

type TableProps = {
	columns: ColumnDef<any>[] & { columnCanSort?: boolean }
	data: any
	isSelectable?: boolean
	actionComponent?: ReactElement
	pagination?: boolean
} & (PaginationServer | PaginationClient)

type ActionsParams = {
	isSelected: boolean
	id: string
	row: any
}

const Table = ({
	columns,
	data,
	isSelectable = false,
	actionComponent,
	pagination = true,
	paginationServer,
	currentPage,
	pageSize,
	onChangeRowsPerPage,
	onPageChange,
	totalPages,
}: TableProps) => {
	const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({})
	const [sorting, setSorting] = useState<SortingState>([])

	const handleRowSelection = (id: string) => {
		setSelectedRowIds({
			[id]: true,
		})
	}

	const _columns: ColumnDef<any>[] = [
		...(isSelectable
			? [
					{
						accessorKey: "",
						header: "",
						id: "radio",
						cell: ({ row }) => <TableRadio defaultChecked={selectedRowIds[row.id]} />,
					} as ColumnDef<any>,
			  ]
			: []),
		...columns,
	]

	const { setRowSelection, getHeaderGroups, getRowModel, getState, setPageSize, setPageIndex, getPageCount } =
		useReactTable({
			columns: _columns,
			data,
			manualPagination: paginationServer,
			getCoreRowModel: getCoreRowModel(),
			initialState: {
				rowSelection: selectedRowIds,
				pagination: {
					pageSize: paginationServer ? pageSize : 10,
					pageIndex: paginationServer ? currentPage - 1 : 0,
				},
			},
			state: {
				sorting,
				pagination: {
					pageSize: paginationServer ? pageSize : 10,
					pageIndex: paginationServer ? currentPage - 1 : 0,
				},
			},
			getSortedRowModel: getSortedRowModel(),
			getPaginationRowModel: getPaginationRowModel(),
			onSortingChange: setSorting,
		})

	const handlePageChange = (page: number) => {
		if (paginationServer) {
			onPageChange(page)
			return
		}

		setPageIndex(page - 1)
	}

	const handlePageSizeChange = (pageSize: number) => {
		if (paginationServer) {
			onChangeRowsPerPage(pageSize)
			return
		}

		setPageSize(pageSize)
	}

	const Actions = ({ isSelected, id, row }: ActionsParams) => {
		if (!isSelectable || (isSelected && !!actionComponent))
			return <td>{cloneElement(actionComponent as ReactElement, { id, row })}</td>

		if (!isSelected) return <td />

		return null
	}

	useEffect(() => {
		setRowSelection(selectedRowIds)
	}, [selectedRowIds])

	return (
		<>
			<S.WrapperTable>
				<S.StyledTable canSelect={isSelectable}>
					<thead>
						{getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<S.TH
										key={header.id}
										colSpan={header.colSpan}
										onClick={header.column.getToggleSortingHandler()}
										style={{ position: "relative", width: header.getSize() }}
									>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.header, header.getContext())}

										{header.column.getCanSort() && (
											<ArrowsIcon sortDirection={header.column.getIsSorted()} />
										)}
									</S.TH>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{getRowModel().rows.map((row) => (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<S.TD
										key={cell.id}
										onClick={() => handleRowSelection(row.id)}
										style={{ width: cell.column.getSize() }}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</S.TD>
								))}
								{actionComponent ? (
									<Actions isSelected={row.getIsSelected()} id={row.original.id} row={row.original} />
								) : null}
							</tr>
						))}
					</tbody>
				</S.StyledTable>
			</S.WrapperTable>

			{pagination ? (
				<TablePagination
					currentPage={getState().pagination.pageIndex + 1}
					pageCount={totalPages || getPageCount()}
					setPage={handlePageChange}
					pageSize={getState().pagination.pageSize}
					setPageSize={handlePageSizeChange}
				/>
			) : null}
		</>
	)
}

export default Table
