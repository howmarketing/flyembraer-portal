import { ReactElement, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import { styled } from "../../../../stitches.config"
import { NextPageWithLayout } from "pages/_app"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import Text from "components/Text"
import { ArrowDown } from "components/Icons/ArrowDown"
import { ArrowUp } from "components/Icons/ArrowUp"
import { Task, Workflow } from "types/Workflow"
import { UseTaskWorkflowId } from "api/workflow/getTaskWorkflowId"

const TasksDetail: NextPageWithLayout = () => {
	const router = useRouter()
	const [opened, setToggle] = useState(true)
	const [workflow, setTasks] = useState<Workflow>()
	const { workflowId, applicationDn, applicationName } = router.query

	const id = Number(workflowId)

	UseTaskWorkflowId(
		{
			onSuccess(data) {
				setTasks(data)
			},
			onError() {
				setTasks({} as any)
			},
			retry: false,
		},
		id,
		{
			applicationDn: applicationDn as string,
		}
	)

	return (
		<>
			<Head>
				<title>{`Fly Embraer - Tasks`}</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Text as="h1" size="xxl" weight="thin" color="brand-primary" css={{ marginBottom: "4rem" }}>
				TASKS
			</Text>

			<StyledPanel>
				<StyledPanelHeader>
					<StyledPanelToggle onClick={() => setToggle((opened) => !opened)}>
						TASKS DETAILS {opened ? <ArrowUp width={14} /> : <ArrowDown width={14} />}
					</StyledPanelToggle>
				</StyledPanelHeader>
			</StyledPanel>

			<div style={opened ? { display: "block" } : { display: "none" }}>
				<StyledBox>
					Application: &nbsp;
					<Text as="span" size="md" weight="thin">
						{applicationName}
					</Text>
				</StyledBox>
				Tasks:
				<StyledCard>
					{workflow?.tasks?.map((task: Task) =>
						task.responsible === "CONTENT_ADMIN" ? (
							<Task key={task.id} {...{ ...task, responsible: "Content" }} />
						) : null
					)}
					{workflow?.tasks?.map((task: Task) =>
						task.responsible === "SUPPORT" ? (
							<Task key={task.id} {...{ ...task, responsible: "Support" }} />
						) : null
					)}
					{workflow?.tasks?.map((task: Task) =>
						task.responsible === "CONTRACT" ? (
							<Task key={task.id} {...{ ...task, responsible: "Contract" }} />
						) : null
					)}
				</StyledCard>
			</div>
		</>
	)
}

const Task = ({ responsible, statusTask, ownerName, startTask, endTask, comment }: Task) => {
	return (
		<>
			<StyledFieldset>
				<StyledLegend
					style={{
						fontWeight: "500",
					}}
				>
					{responsible}
				</StyledLegend>

				{statusTask === "P" ? (
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "24px 24px",
							gap: "12px",
							placeItems: "center",
						}}
					>
						<div
							style={{
								fontWeight: "400",
							}}
						>
							Pending
						</div>
						<div>{startTask}</div>
					</div>
				) : (
					<div
						style={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							padding: "2px",
							fontSize: "14px",
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
						<div>{endTask}</div>
						{comment ? <StyledComment>{comment}</StyledComment> : null}
					</div>
				)}
			</StyledFieldset>
		</>
	)
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

const StyledBox = styled("div", {
	margin: "2rem 0",
})

const StyledCard = styled("div", {
	marginTop: "2rem",
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	gap: "2rem",
	placeItems: "center",

	"@maxWeb": {
		gridTemplateColumns: "1fr",
	},
})

const StyledFieldset = styled("fieldset", {
	width: "100%",
	height: "100%",
	margin: "1rem 0 2rem 0",
	padding: "2rem",
	display: "grid",
	gridTemplateColumns: "auto 1fr",
	gap: "2rem",
	alignItems: "flex-end",
	borderRadius: "4px",
	border: "1px solid #aaaaaa80",
	fontWeight: "300",
})

const StyledLegend = styled("legend", {
	marginLeft: "-8px",
	padding: "0 8px",
})

const StyledComment = styled("div", {
	marginTop: "1rem",
	paddingTop: "1rem",
	borderTop: "1px solid #aaaaaa80",
})

export default TasksDetail

TasksDetail.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
