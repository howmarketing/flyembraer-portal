import { StyledPagination, StyledBox, StyledSelect, StyledOption, StyledNav, StyledButton } from "./styles"
import { ArrowLeft } from "components/Icons/ArrowLeft"
import { ArrowRight } from "components/Icons/ArrowRight"

type FlyPaginationProps = {
	enabled?: boolean
	pagination: PaginationProps
	table: any
	totalElements: number
}

type PaginationProps = {
	pageIndex: number
	pageSize: number
}

export const FlyPagination = ({ enabled, pagination, table, totalElements }: FlyPaginationProps) => {
	const pages = pagesRange({ currentPage: pagination.pageIndex + 1, totalElements, pageSize: pagination.pageSize })

	return (
		<>
			{enabled && totalElements > 0 ? (
				<StyledPagination>
					<StyledBox>
						<span>SHOWING</span>
						&nbsp;
						<StyledSelect
							value={pagination.pageSize}
							onChange={(e) => {
								table.setPageSize(Number(e.target.value))
							}}
						>
							{[5, 10, 20, 30, 40, 50].map((pageSize) => (
								<StyledOption key={pageSize} value={pageSize}>
									{pageSize}
								</StyledOption>
							))}
						</StyledSelect>
						&nbsp; OF &nbsp;
						{totalElements}
					</StyledBox>

					<StyledNav>
						<StyledButton onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
							<ArrowLeft height={11} fill={"#444"} />
						</StyledButton>
						<StyledButton
							style={{
								fontWeight: "500",
							}}
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}
						>
							1
						</StyledButton>
						<div>...</div>

						{pages?.map((page: any) =>
							page <= table.getPageCount() ? (
								<StyledButton
									style={
										page === pagination.pageIndex + 1
											? { backgroundColor: "#2059a6", color: "#fff" }
											: {}
									}
									key={page}
									onClick={() => table.setPageIndex(page - 1)}
								>
									{page}
								</StyledButton>
							) : (
								<></>
							)
						)}

						<div>...</div>
						<StyledButton
							style={{
								fontWeight: "500",
							}}
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							disabled={!table.getCanNextPage()}
						>
							{table.getPageCount()}
						</StyledButton>
						<StyledButton onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
							<ArrowRight height={11} fill={"#444"} />
						</StyledButton>
					</StyledNav>
				</StyledPagination>
			) : (
				<></>
			)}
		</>
	)
}

const range = (start: number, end: number) => {
	const len = end - start
	const arr: number[] = []

	for (let i = 0; i < len; i++) {
		arr.push(i)
	}

	return arr.map((li) => li + start)
}

const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }: any) => {
	const ceiling = Math.ceil(pagesCutCount / 2)
	const floor = Math.floor(pagesCutCount / 2)

	if (pagesCount < pagesCutCount) {
		return { start: 1, end: pagesCount + 1 }
	} else if (currentPage >= 1 && currentPage <= ceiling) {
		return { start: 1, end: pagesCutCount + 1 }
	} else if (currentPage + floor >= pagesCount) {
		return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 }
	} else {
		return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 }
	}
}

const pagesRange = ({ currentPage, totalElements, pageSize }: any) => {
	const pagesCount = Math.ceil(totalElements / pageSize)
	const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 5, currentPage })
	return range(pagesCut.start, pagesCut.end)
}
