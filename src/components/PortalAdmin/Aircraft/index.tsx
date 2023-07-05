import { GetCategoryAircraftsResponse } from "api/category/getCategoryAircrafts"
import { ArrowUpDown } from "components/Icons/ArrowUpDown"

type AircraftTableProps = {
	data?: GetCategoryAircraftsResponse
}

export const AircraftTable = ({ data }: AircraftTableProps) => {
	return (
		<>
			<table className="table">
				<thead>
					<th></th>
					<th style={{ textAlign: "left" }}>
						Name &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Description &nbsp;
						<ArrowUpDown />
					</th>
				</thead>
				<tbody className="tablewb">
					{data ? (
						data?.map(({ displayName, dn }) => (
							<tr key={displayName}>
								<td>
									<input type="checkbox" />
								</td>
								<td>{displayName}</td>
								{/* <td>{dn}</td>  this line is correct*/}
								<td>{"description test"}</td>
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
