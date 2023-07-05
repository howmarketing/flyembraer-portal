import { ArrowUpDown } from "components/Icons/ArrowUpDown"
import { ContentAdminAppDTO } from "types/ContentAdminAppDTO"
type ContentAdminAppDTOarray = ContentAdminAppDTO[]
type ApplicationTableProps = {
	data?: ContentAdminAppDTOarray
}

export const AssociationTable = ({ data }: ApplicationTableProps) => {
	return (
		<>
			<table className="table">
				<thead>
					<th></th>
					<th style={{ textAlign: "left" }}>
						ID &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						App Name &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Quantity &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Content Administrator &nbsp;
						<ArrowUpDown />
					</th>
				</thead>
				<tbody className="tablewb">
					{data ? (
						data?.map(({ applicationName, admins, applicationDn }) => (
							<tr key={applicationName}>
								<td>
									<input type="checkbox" />
								</td>
								<td>{applicationDn}</td>
								<td>{applicationName}</td>
								<td>{admins?.length}</td>
								<td>{admins?.map((admin) => admin.name)}</td>
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
