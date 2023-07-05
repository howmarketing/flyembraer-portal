import { usePagination } from "hooks/usePagination"
import ArrowIcon from "./Arrow"
import * as S from "./styles"

export type TablePaginationProps = {
	currentPage: number
	setPage: (page: number) => void
	pageCount: number
	pageSize: number
	setPageSize: (pageSize: number) => void
}

const TablePagination = ({ currentPage, setPage, setPageSize, pageSize, pageCount }: TablePaginationProps) => {
	const paginationRange = usePagination({
		currentPage,
		pageCount,
		siblingCount: 2,
	})

	const haveNextPage = currentPage < pageCount
	const havePreviousPage = currentPage > 1

	const handleNextPage = () => {
		if (!haveNextPage) {
			return
		}

		setPage(currentPage + 1)
	}

	const handlePreviousPage = () => {
		if (!havePreviousPage) {
			return
		}

		setPage(currentPage - 1)
	}

	const handleSetPage = (page: string | number) => {
		if (typeof page === "string") {
			return
		}

		setPage(page)
	}

	const options = [pageSize, ...[10, 20, 30, 40, 50, 100].filter((item) => item !== pageSize)].sort((a, b) => a - b)

	return (
		<S.Wrapper>
			<S.WrapperRowsPerPage>
				<S.Text>Showing </S.Text>
				<S.SelectShowing
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value))
					}}
				>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</S.SelectShowing>
			</S.WrapperRowsPerPage>
			<S.WrapperPagination>
				<S.WrapperPaginationNumbers>
					<S.ButtonPagination onClick={handlePreviousPage} disabled={!havePreviousPage}>
						<ArrowIcon />
					</S.ButtonPagination>
					{paginationRange?.map((page, index) => (
						<S.ButtonPagination
							key={`${page}_${index}`}
							current={currentPage === Number(page)}
							onClick={() => handleSetPage(page)}
							disabled={page === "..."}
						>
							{page}
						</S.ButtonPagination>
					))}
					<S.ButtonPagination onClick={handleNextPage} disabled={!haveNextPage}>
						<ArrowIcon right />
					</S.ButtonPagination>
				</S.WrapperPaginationNumbers>
			</S.WrapperPagination>
		</S.Wrapper>
	)
}

export default TablePagination
