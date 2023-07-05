import { GetJobFunctionsResponse } from "api/job-function/getServices"
import { ArrowUpDown } from "components/Icons/ArrowUpDown"

type JobFunctionTableProps = {
	data?: GetJobFunctionsResponse
}

export const JobFunctionTable = ({ data }: JobFunctionTableProps) => {
	return (
		<>
			<table className="table">
				<thead>
					<th></th>
					<th style={{ textAlign: "left" }}>
						Application &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						ID &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Name &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Group &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Description &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Business roles &nbsp;
						<ArrowUpDown />
					</th>
				</thead>
				<tbody className="tablewb">
					{data ? (
						data?.map(({ displayName, dn, app_displayName, embJFGroup, description, embBusinessRule }) => (
							<tr key={displayName}>
								<td>
									<input type="checkbox" />
								</td>
								<td>{app_displayName}</td>
								<td>{dn}</td>
								<td>{displayName}</td>
								<td>{embJFGroup}</td>
								<td>{description}</td>
								<td>{embBusinessRule}</td>
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
