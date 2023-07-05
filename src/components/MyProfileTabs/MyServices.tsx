import { useState } from "react"

import { ColumnDef } from "@tanstack/react-table"

import { useGetServicesFromUser } from "api/job-function/getServicesFromUser"
import { useGetProfile } from "api/profile/getProfile"

import { Box } from "components/Box"
import Table from "components/Table"
import Text from "components/Text"

import type { ServiceApp } from "types/ServiceApp"
import { Flex } from "components/Flex"

export const MyServicesTab = () => {
	const columns: ColumnDef<ServiceApp>[] = [
		{
			accessorKey: "app_displayName",
			header: "Application Name",
			cell: ({ row }) => {
				const { app_displayName } = row.original
				return <>{app_displayName ?? "N/A"}</>
			},
		},
		{
			accessorKey: "displayName",
			header: "Service Name",
			cell: ({ row }) => {
				const { displayName } = row.original
				return <>{displayName ?? "N/A"}</>
			},
		},
		{
			accessorKey: "description",
			header: "Description",
			cell: ({ row }) => {
				const { description } = row.original
				return <>{description ?? "N/A"}</>
			},
		},
	]

	const { data: userData } = useGetProfile({
		onSuccess(data) {
			if (data.dn) {
				refetch()
			}
		},
	})

	const { data, refetch } = useGetServicesFromUser(userData?.dn ?? "", {
		enabled: !!userData?.dn,
	})

	const [page, setPage] = useState(1)
	const [pageSize, setPageSize] = useState(10)

	const totalPages = data?.length ? Math.ceil(data?.length / pageSize) : 0

	const services = data?.slice((page - 1) * pageSize, page * pageSize)

	const handlePageChange = (page: number) => {
		setPage(page)
	}

	const handlePerRowsChange = (pageSize: number) => {
		setPageSize(pageSize)
	}

	return (
		<Flex css={{ flexDirection: "column", gap: "1rem" }}>
			<Text weight="bold" size="sm" color="brand-primary">
				SERVICE LIST
			</Text>
			{services ? (
				<Table
					columns={columns}
					data={services}
					paginationServer
					isSelectable={false}
					pageSize={pageSize}
					totalPages={totalPages}
					currentPage={page}
					onPageChange={handlePageChange}
					onChangeRowsPerPage={handlePerRowsChange}
				/>
			) : (
				<Text weight="bold" size="sm" color="black">
					No services found
				</Text>
			)}
		</Flex>
	)
}
