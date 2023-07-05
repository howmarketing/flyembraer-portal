import { GetCategoryMarketsResponse } from "api/category/getCategoryMarkets"
import { ArrowUpDown } from "components/Icons/ArrowUpDown"

type MarketTypeTableProps = {
	data?: GetCategoryMarketsResponse
}

export const MarketTypeTable = ({ data }: MarketTypeTableProps) => {
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th></th>

						<th style={{ textAlign: "left" }}>
							Name &nbsp;
							<ArrowUpDown />
						</th>
						<th style={{ textAlign: "left" }}>
							Description &nbsp;
							<ArrowUpDown />
						</th>
					</tr>
				</thead>
				<tbody className="tablewb">
					{data ? (
						data?.map(({ displayName, description }) => (
							<tr key={displayName}>
								<td>
									<input type="checkbox" />
								</td>
								<td>{displayName}</td>
								<td>{description}</td>
							</tr>
						))
					) : (
						<h1>no resultss</h1>
					)}
				</tbody>
			</table>
		</>
	)
}
