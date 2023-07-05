import Head from "next/head"

import { ReactElement } from "react"

import { LoggedLayout } from "components/Layouts/LoggedLayout"

import type { NextPageWithLayout } from "pages/_app"
import { Flex } from "components/Flex"
import Text from "components/Text"
import { Administrator } from "components/Icons/Administrator"
import { Card } from "components/Card"
import { Settings } from "components/Icons/Settings"
import { Monitor } from "components/Icons/Monitor"
import { HamburguerMenu } from "components/Icons/HamburguerMenu"
import { Paper } from "components/Icons/Paper"
import { Download } from "components/Icons/Download"
import { Lock } from "components/Icons/Lock"
import { SuitCase } from "components/Icons/SuitCase"
import { User } from "components/Icons/User"
import { CirclingArrows } from "components/Icons/CirclingArrows"
import { MessageBox } from "components/Icons/MessageBox"

const Admin: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Administration</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex
				css={{
					flexDirection: "column",
				}}
			>
				<Text color={"brand-primary"} weight={"thin"} size={"xxl"}>
					@ FLYEMBRAER ADMINISTRATION
				</Text>

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
							<Monitor width={"24px"} /> PORTAL
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
							<Paper width={"24px"} /> CONTRACTS
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
							<SuitCase width={"24px"} /> COMPANY UPDATE
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
							<User width={"24px"} /> USER
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
							<CirclingArrows width={"24px"} /> WORKFLOW
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
							<MessageBox width={"24px"} /> MESSAGE CENTER
						</p>
					</Flex>
				</Flex>
				<Card title={"Pending Users"} iconLeft={<HamburguerMenu width="28px" height="28px" fill="blue" />}>
					{[1, 2, 3, 4].map(() => {
						return (
							<Flex css={{ gap: "10px", padding: "16px" }}>
								<Lock width={"24px"} />
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
								<Download width={"24px"} />
								<Text weight={"bold"} color={"brand-primary"}>
									Download guide
								</Text>
							</Flex>
						)
					})}
				</Flex>
			</Flex>
		</>
	)
}

export default Admin

Admin.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout css={{ bg: "transparent" }}>{page}</LoggedLayout>
}
