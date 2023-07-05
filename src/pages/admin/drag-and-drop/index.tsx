import { ReactElement } from "react"
import Head from "next/head"
import { DndProvider, useDrop } from "react-dnd"
import type { NextPageWithLayout } from "pages/_app"
import { LoggedLayout } from "components/Layouts/LoggedLayout"

import { Flex } from "components/Flex"
import Text from "components/Text"

import { Card } from "components/Card"
import { Settings } from "components/Icons/Settings"
import { Monitor } from "components/Icons/Monitor"
import { HamburguerMenu } from "components/Icons/HamburguerMenu"

import { HTML5Backend } from "react-dnd-html5-backend"
import CardDrop from "../drag-and-drop/drag-drop-comp"
import { DropBucket } from "./drag-drop-comp/drop-bucket"
import { Picture } from "./drag-drop-comp/PictureComp"
// import { Administrator } from "components/Icons/Administrator"
const Admin: NextPageWithLayout = () => {
	return (
		<>
			<DndProvider backend={HTML5Backend}>
				<Head>
					<title>Fly Embraer - Administration</title>
					<meta name="description" content="Fly Embraer 2.0" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Flex
					css={{
						margin: "16px 20px 40px",
						flexDirection: "column",
					}}
				>
					<Text color={"brand-primary"} weight={"thin"} size={"xxl"}>
						@ FLYEMBRAER1 ADMINISTRATION
					</Text>

					<Card title={"oi"} iconLeft={<Settings width="30" height="30" />}></Card>
					<Flex css={{ gap: "32px", margin: "12px" }}>
						<Flex
							css={{
								color: "blue",
								padding: "16px",
								backgroundColor: "white",
								width: "172px",
								height: "68px",
								borderRadius: "16px",
								border: "1px solid blue",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<p>
								<Monitor /> PORTAL
							</p>
						</Flex>
						<Flex
							css={{
								color: "blue",
								padding: "16px",
								backgroundColor: "white",
								width: "172px",
								height: "68px",
								borderRadius: "16px",
								border: "1px solid blue",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<p>
								<Monitor /> CONTRACTS
							</p>
						</Flex>
						<Flex
							css={{
								color: "blue",
								padding: "16px",
								backgroundColor: "white",
								width: "230px",
								height: "68px",
								borderRadius: "16px",
								border: "1px solid blue",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<p>
								<Monitor /> COMPANY UPDATE
							</p>
						</Flex>
						<Flex
							css={{
								color: "blue",
								padding: "16px",
								backgroundColor: "white",
								width: "230px",
								height: "68px",
								borderRadius: "16px",
								border: "1px solid blue",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<p>
								<Monitor /> USER
							</p>
						</Flex>
					</Flex>
					<Flex css={{ gap: "32px", margin: "12px" }}>
						<Flex
							css={{
								color: "blue",
								padding: "16px",
								backgroundColor: "white",
								width: "230px",
								height: "68px",
								borderRadius: "16px",
								border: "1px solid blue",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<p>
								<Monitor /> WORKFLOW
							</p>
						</Flex>
						<Flex
							css={{
								color: "blue",
								padding: "16px",
								backgroundColor: "white",
								width: "230px",
								height: "68px",
								borderRadius: "16px",
								border: "1px solid blue",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<p>
								<Monitor /> MESSAGE CENTER
							</p>
						</Flex>
					</Flex>
					<Card title={"Pending Users"} iconLeft={<HamburguerMenu width="28px" height="28px" fill="blue" />}>
						{[1, 2, 3, 4].map(() => {
							return (
								<Flex css={{ gap: "10px", padding: "16px" }}>
									<Monitor />
									<Text>October 14-21 - 2022</Text>
									<Text weight={"bold"}>User Pending Approval</Text>
								</Flex>
							)
						})}
					</Card>

					<Flex css={{ padding: "16px", borderBottom: "1px solid blue" }}>
						<Text weight={"bold"}>ADMINISTRATION GUIDE</Text>
					</Flex>
					<Flex css={{ flexDirection: "column", gap: "10px" }}>
						{[1, 2, 3, 4].map(() => {
							return (
								<Flex css={{ padding: "16px", gap: "20px" }}>
									<Monitor />
									<Text weight={"bold"} color={"brand-primary"}>
										Download guide
									</Text>
								</Flex>
							)
						})}
					</Flex>
					<Flex>
						<CardDrop text="example" isDragging={true} />
						<Picture
							src="https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj"
							id={1}
						/>

						<DropBucket />
					</Flex>
				</Flex>
			</DndProvider>
		</>
	)
}

export default Admin

Admin.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
