import { ColumnDef } from "@tanstack/react-table"

import { Flex } from "components/Flex"
import Table from "components/Table"
import Text from "components/Text"

type LegalRepresentativeTableProps = {
	representative: string
}

export const LegalRepresentativeTable = ({ representative }: LegalRepresentativeTableProps) => {
	const columns: ColumnDef<LegalRepresentativeTableProps>[] = [
		{
			accessorKey: "representative",
			header: "Legal Representative",
			cell: ({ row }) => {
				const { representative } = row.original
				return <>{representative ?? "N/A"}</>
			},
			enableSorting: false,
		},
	]

	console.log(representative)

	return (
		<Flex
			css={{
				flexDirection: "column",
				gap: "1rem",
				justifyContent: "center",
				"@tablet": {
					justifyContent: "flex-start",
				},
			}}
		>
			<Text weight="bold" size="sm" color="brand-primary">
				LEGAL REPRESENTATIVE
			</Text>
			{representative ? (
				<Table columns={columns} data={representative} />
			) : (
				<Text weight="bold" size="sm" color="black">
					No representatives found
				</Text>
			)}
		</Flex>
	)
}
