import { ArrowUpDown } from "components/Icons/ArrowUpDown"
import { Application } from "types/ServiceApp"

type ApplicationTableProps = {
	data?: Application
}

export const ApplicationTable = ({ data }: ApplicationTableProps) => {
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
					<th style={{ textAlign: "left" }}>
						Responsible Department &nbsp;
						<ArrowUpDown />
					</th>
				</thead>
				<tbody className="tablewb">
					{data ? (
						data?.map(({ displayName, ou_dn, access_dn }) => (
							<tr key={displayName}>
								<td>
									<input type="checkbox" />
								</td>
								<td>{displayName}</td>
								<td>{ou_dn}</td>
								<td>{access_dn}</td>
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
