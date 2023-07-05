import { GetCategoryResponse } from "api/category/getAllCategory"
import { ArrowUpDown } from "components/Icons/ArrowUpDown"

type CategoryProps = {
	data?: GetCategoryResponse
}

export const CategoryTable = ({ data }: CategoryProps) => {
	// TODO: I can guess that it would be just an forgotten debug while testing the component, so I'll be commenting that by now but, as soon as possible thw owner of it should remove

	return (
		<>
			<table className="table">
				<thead>
					<th></th>
					<th style={{ textAlign: "left" }}>
						Business Company Type &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Market Segment &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Aircraft Type &nbsp;
						<ArrowUpDown />
					</th>
				</thead>
				<tbody className="tablewb">
					{data ? (
						data?.map(({ displayName, embTypeAirCraft, embMarket, embCompanyType }) => (
							<tr key={displayName}>
								<td>
									<input type="checkbox" />
								</td>
								<td>{embCompanyType == null ? "null" : embCompanyType}</td>
								<td>{embMarket == null ? "null" : embCompanyType}</td>
								<td>{embTypeAirCraft == null ? "null" : embCompanyType}</td>
							</tr>
						))
					) : (
						<h1>no results</h1>
					)}
				</tbody>
			</table>
		</>
	)
}
