import { ReactElement } from "react"
import Head from "next/head"
import Image from "next/future/image"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { NextPageWithLayout } from "pages/_app"
import { Flex } from "components/Flex"
import Text from "components/Text"
import { Card } from "components/Card"
import { Download } from "components/Icons/Download"

const Maintenace: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>{`Fly Embraer - Flight Operations`}</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Image style={{ width: "100%" }} src="/img/PageAdmin/banner.jpg" alt="banner" />

			<Flex css={{ maxWidth: "980px", flexDirection: "column", gap: "1rem", marginTop: "3rem" }}>
				<Text weight={"thin"} size={"xxl"} css={{ marginBottom: "1rem" }}>
					Related Apps
				</Text>

				<div
					style={{
						maxWidth: "980px",
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						gap: "1rem",
						fontWeight: "300",
					}}
				>
					<div style={{ padding: "0 10px" }}>
						<Card title="Pilot: Inicial and Recurrent" link={""} />
					</div>
					<div style={{ padding: "0 10px" }}>
						<Card title="Flight Attendant" link={""} />
					</div>
					<div style={{ padding: "0 10px" }}>
						<Card title="Flight Dispatcher" link={""} />
					</div>
					<div style={{ padding: "0 10px" }}>
						<Card title="General Familiarization" link={""} />
					</div>
					<div style={{ padding: "0 10px" }}>
						<Card title="General Familiarization" link={""} />
					</div>
					<div style={{ padding: "0 10px" }}>
						<Card title="Maintenance" link={""} />
					</div>
				</div>
			</Flex>

			<Flex css={{ maxWidth: "980px", flexDirection: "column", gap: "1rem", marginTop: "3rem" }}>
				<Text weight={"thin"} size={"xxl"} css={{ margin: "2rem 0" }}>
					Maintenance
				</Text>

				<Flex css={{ maxWidth: "980px", flexDirection: "row", gap: "1rem" }}>
					<div>MAIN PAGE</div>
					<div>EVENTS</div>
				</Flex>

				<Text weight={"thin"} size={"md"} css={{ margin: "1rem 0", lineHeight: "2" }}>
					The job of worldwide and permanent airline support regarding airplane performance, weight and
					balance, flight operations publications and multimedia of interest; the challenge of a group firmly
					determined to conduct customer support to an enterprise that seeks a complete, efficient and
					seamless operation.
				</Text>

				<Flex css={{ margin: "2rem 0", flexDirection: "row", gap: "3rem", fontWeight: "300" }}>
					<div
						style={{
							width: "300px",
							display: "grid",
							gap: "1.5rem",
							placeItems: "center",
							borderRadius: "1rem",
							backgroundColor: "#FFFFFF",
						}}
					>
						<Image style={{ width: "100%" }} src="/img/PageAdmin/card-1.jpg" alt="card" />
						<Text as="span" size="md" css={{ padding: "0 10px" }}>
							Flight Operations Engineering and Support Catalogue
						</Text>

						<Card
							title="Catalogue"
							link={process.env.NEXT_PUBLIC_DC_APP_URL}
							iconLeft={<Download width="24" height="24" />}
						/>
					</div>

					<div
						style={{
							width: "300px",
							display: "grid",
							gap: "1.5rem",
							placeItems: "center",
							borderRadius: "1rem",
							backgroundColor: "#FFFFFF",
						}}
					>
						<Image style={{ width: "100%" }} src="/img/PageAdmin/card-2.jpg" alt="card" />
						<Text as="span" size="md" css={{ padding: "0 10px" }}>
							Flight Operations Engineering and Support Catalogue
						</Text>

						<Card
							title="Catalogue (Rev. 3)"
							link={process.env.NEXT_PUBLIC_DC_APP_URL}
							iconLeft={<Download width="24" height="24" />}
						/>
					</div>
				</Flex>
			</Flex>
		</>
	)
}

export default Maintenace

Maintenace.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout css={{ bg: "transparent" }}>{page}</LoggedLayout>
}
