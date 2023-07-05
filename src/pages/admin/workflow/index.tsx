import { ReactElement, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import Head from "next/head"
import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { css, styled } from "../../../../stitches.config"
import { NextPageWithLayout } from "pages/_app"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { ArrowDown } from "components/Icons/ArrowDown"
import { ArrowUp } from "components/Icons/ArrowUp"
import { FlyTable } from "components/FlyTable/FlyTable"
import WorkflowModal from "forms/workflow/WorkflowModal"
import { WorkflowSearch } from "forms/workflow/WorkflowSearch"
import Text from "components/Text"
import TextArea from "components/TextArea"
import Button from "components/Button"
import { Search } from "components/Icons/Search"
import { Accept } from "components/Icons/Accept"
import { Reject } from "components/Icons/Reject"
import { Workflow, Task, App } from "types/Workflow"
import { useGetWorkflow } from "api/workflow/getWorkflow"
import { PutWorkflowTask } from "api/workflow/putWorkflowTask"
import { useMutation } from "react-query"
import { queryClient } from "services/queryClient"

const Workflow: NextPageWithLayout = () => {
	const [filters, setFilters] = useState({})
	const [searchOpened, setSearchToggle] = useState(true)
	const [manageOpened, setManageToggle] = useState(true)
	const [workflows, setWorkflows] = useState<Workflow[]>()
	const columns = useMemo<ColumnDef<Workflow>[]>(() => tableColumns, [])

	const queryParams = Object.entries(filters).reduce((a: any, [k, v]) => (v ? ((a[k] = v), a) : a), {})

	const { error, refetch } = useGetWorkflow(
		{
			onSuccess(data) {
				const workflows = shapeWorkflows(data.content as Workflow[])
				setWorkflows(workflows as Workflow[])
			},
			onError() {
				setWorkflows([])
			},
			retry: false,
		},
		{ page: 0, size: 300, sort: ["asc"] },
		{ ...queryParams }
	)

	useEffect(() => {
		refetch()
	}, [filters, refetch])

	const totalElements = workflows?.length

	return (
		<>
			<Head>
				<title>Fly Embraer - Workflow</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Text as="h1" size="xxl" weight="thin" color="brand-primary" css={{ marginBottom: "4rem" }}>
				WORKFLOW
			</Text>

			<StyledPanel>
				<StyledPanelHeader>
					<StyledPanelToggle onClick={() => setSearchToggle((searchOpened) => !searchOpened)}>
						SEARCH WORKFLOW {searchOpened ? <ArrowUp width={14} /> : <ArrowDown width={14} />}
					</StyledPanelToggle>
				</StyledPanelHeader>
			</StyledPanel>

			<div style={searchOpened ? { display: "block" } : { display: "none" }}>
				<WorkflowSearch submitFilters={(f: any) => setFilters(f)} />
			</div>

			<StyledPanel>
				<StyledPanelHeader>
					<StyledPanelToggle onClick={() => setManageToggle((manageOpened) => !manageOpened)}>
						WORKFLOW MANAGEMENT {manageOpened ? <ArrowUp width={14} /> : <ArrowDown width={14} />}
					</StyledPanelToggle>
				</StyledPanelHeader>
			</StyledPanel>

			<StyledWrapper style={manageOpened ? { display: "block" } : { display: "none" }}>
				<FlyTable
					columns={columns}
					data={workflows}
					paginationProps={{ enabled: true, totalPages: 5, totalElements }}
					error={(error as any)?.response?.data?.description}
				></FlyTable>
			</StyledWrapper>
		</>
	)
}

const tableColumns: ColumnDef<Workflow>[] = [
	{
		accessorKey: "companyName",
		header: "Company",
	},
	{
		accessorKey: "username",
		header: "User",
	},
	{
		accessorKey: "type",
		header: "Type",
		cell: ({ row }) => {
			const workflow = row.original
			return <>{workflow.type === "U" ? "User" : "Company"}</>
		},
	},
	{
		accessorKey: "statusWorkflow",
		header: "Status",
		cell: ({ row }) => {
			const workflow = row.original
			return (
				<>
					{workflow.statusWorkflow === "P"
						? "Pending"
						: workflow.statusWorkflow === "F"
						? "Finished"
						: "Processing"}
				</>
			)
		},
	},
	{
		accessorKey: "startWorkflow",
		header: "Start Date",
	},
	{
		accessorKey: "endWorkflow",
		header: "End Date",
	},
	{
		id: "tasks",
		header: "Tasks",
		cell: ({ row }) => {
			return (
				<FlyTable
					columns={subTableColumns}
					data={row.original.tasks}
					styledTableCustom={StyledTableCustom}
				></FlyTable>
			)
		},
	},
]

const subTableColumns: ColumnDef<App>[] = [
	{
		id: "application",
		header: "Application",
		cell: ({ row }) => {
			const app = row.original

			return (
				<div
					style={{
						width: "80px",
						padding: "2px",
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}
				>
					<div
						style={{
							fontWeight: "400",
						}}
					>
						{app?.applicationName}
					</div>
				</div>
			)
		},
	},
	{
		id: "taskContent",
		header: "Content",
		cell: ({ row }) => {
			const task = row.original.tasks?.find((task) => task.responsible === "CONTENT_ADMIN")
			return task ? <Task {...{ ...task, responsible: "Content" }} /> : null
		},
	},
	{
		id: "taskSupport",
		header: "Support",
		cell: ({ row }) => {
			const task = row.original.tasks?.find((task) => task.responsible === "SUPPORT")
			return task ? <Task {...{ ...task, responsible: "Support" }} /> : null
		},
	},
	{
		id: "taskContract",
		header: "Contract",
		cell: ({ row }) => {
			const task = row.original.tasks?.find((task) => task.responsible === "CONTRACT")
			return task ? <Task {...{ ...task, responsible: "Contract" }} /> : null
		},
	},
	{
		id: "details",
		header: "Details",
		cell: ({ row }) => {
			const { workflowId, applicationDn, applicationName } = row.original
			return (
				<Link
					href={{
						pathname: `./workflow/${applicationName}`,
						query: {
							applicationName,
							workflowId,
							applicationDn,
						},
					}}
				>
					<Button className={StyledDetailsButton()}>
						<Search width={18} fill={"#FFFFFF"} />
					</Button>
				</Link>
			)
		},
	},
]

const Task = ({ workflowId, id, applicationName, responsible, ownerName, statusTask, startTask }: Task) => {
	const [modal, setModal] = useState<any>({
		show: false,
		action: "A",
		actionColor: "#005AAF",
	})

	const TaskSchema = yup.object({
		comment: yup
			.string()
			.required("Comment is required")
			.min(5, "Comment must have at least 5 characters")
			.max(500, "Comment must not exceed 500 characters"),
	})

	type TaskProps = yup.InferType<typeof TaskSchema>

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid, isDirty },
	} = useForm<TaskProps>({
		resolver: yupResolver(TaskSchema),
		mode: "onChange",
	})

	const onSubmit = ({ comment }: TaskProps) => {
		mutate({ workflowId, taskId: id, comment, status: modal.action })
	}

	const { mutate } = useMutation(PutWorkflowTask, {
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ["workflow"] })
			reset()
			setModal({ show: false })
		},
	})

	const onClose = () => {
		reset()
		setModal({ show: false })
	}

	return (
		<>
			{statusTask === "P" ? (
				<div
					style={{
						width: "72px",
						display: "grid",
						gridTemplateColumns: "24px 24px",
						gap: "10px",
						placeItems: "center",
					}}
				>
					<StyledButton
						style={{
							backgroundColor: "#005AAF",
						}}
						onClick={() => {
							setModal({
								show: true,
								action: "A",
								actionColor: "#005AAF",
							})
						}}
					>
						<Accept fill={"#FFFFFF"} />
					</StyledButton>
					<StyledButton
						style={{
							backgroundColor: "#942e47",
						}}
						onClick={() => {
							setModal({
								show: true,
								action: "R",
								actionColor: "#942e47",
							})
						}}
					>
						<Reject fill={"#FFFFFF"} />
					</StyledButton>

					<>
						{modal.show &&
							createPortal(
								<WorkflowModal onClose={onClose} title={responsible}>
									<div>
										Apllication:
										<Text as="span" weight="thin" css={{ marginLeft: "0.5rem" }}>
											{applicationName}
										</Text>
									</div>
									<div>
										Start Date:
										<Text as="span" weight="thin" css={{ marginLeft: "0.5rem" }}>
											{startTask}
										</Text>
									</div>
									<br />
									<br />

									<StyledForm as="form" onSubmit={handleSubmit(onSubmit)}>
										<TextArea
											id="comment"
											required
											css={{ height: "100px" }}
											{...register("comment")}
											error={errors.comment?.message}
										>
											Comment
										</TextArea>

										<Button
											css={{
												width: "100px",
												justifySelf: "center",
												backgroundColor: modal.actionColor,
											}}
											type="submit"
											disabled={!isDirty || !isValid}
										>
											{modal.action === "A" ? "Accepted" : "Rejected"}
										</Button>
									</StyledForm>
								</WorkflowModal>,
								document.body
							)}
					</>
				</div>
			) : (
				<div
					style={{
						width: "90px",
					}}
				>
					<div
						style={{
							fontWeight: "400",
						}}
					>
						{statusTask === "A" ? "Accepted" : "Rejected"}
					</div>

					<div>
						By:&nbsp;
						<span
							style={{
								textTransform: "lowercase",
							}}
						>
							{ownerName?.toLowerCase().includes("automatic") ? "automatic" : ownerName}
						</span>
					</div>

					<div>{startTask}</div>
				</div>
			)}
		</>
	)
}

const shapeWorkflows = (workflows: Workflow[]) => {
	return workflows?.map((workflow: Workflow) => {
		const result = workflow.tasks?.reduce(
			(acc: any, { id, applicationDn, applicationName, responsible, ownerName, statusTask, startTask }: Task) => {
				acc[applicationDn] ??= {
					workflowId: workflow.id,
					applicationDn,
					applicationName,
					tasks: [],
				}
				acc[applicationDn]?.tasks.push({
					workflowId: workflow.id,
					id,
					applicationDn,
					applicationName,
					responsible,
					ownerName,
					statusTask,
					startTask,
				})
				return acc
			},
			{}
		)

		if (!result) {
			return { ...workflow }
		} else {
			const tasks = Object.values(result)
			return { ...workflow, tasks }
		}
	})
}

const StyledPanel = styled("div", {
	margin: "2.5rem 0",
	backgroundColor: "#FFFFFF",
})

const StyledPanelHeader = styled("div", {
	marginBottom: "0.75rem",
	borderBottom: "1px solid #005AAF",
})

const StyledPanelToggle = styled("button", {
	border: "none",
	lineHeight: "2.5rem",
	fontWeight: "400",
	fontSize: "1.25rem",
	backgroundColor: "transparent",
	color: "#252631",
	cursor: "pointer",
})

const StyledWrapper = styled("div", {
	padding: "2rem 0",
	overflowX: "auto",
})

const StyledButton = styled("button", {
	width: "24px",
	height: "24px",
	padding: "2px",
	border: "none",
	borderRadius: "4px",
})

const StyledDetailsButton = css("button", {
	width: "30px",
	height: "30px",
	padding: "4px",
	border: "none",
	borderRadius: "4px",
	backgroundColor: "#005aaf",
})

const StyledTableCustom = css({
	"@laptop": {
		"& > thead": {
			borderBottom: "none",
		},

		"& * > tr": {
			borderBottom: "none",
		},
	},
})

const StyledForm = styled("form", { display: "grid", placeItems: "center", gap: "2rem" })

export default Workflow

Workflow.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
