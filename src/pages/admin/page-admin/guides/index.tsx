import { ReactElement, useMemo, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/future/image"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ColumnDef } from "@tanstack/react-table"

import { css } from "../../../../../stitches.config"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { NextPageWithLayout } from "pages/_app"
import { Flex } from "components/Flex"
import Text from "components/Text"
import TextField from "components/TextField"
import TextArea from "components/TextArea"
import Button from "components/Button"
import { FlyTable } from "components/FlyTable/FlyTable"
import { Download } from "components/Icons/Download"
import { Card } from "components/Card"
import { Folder } from "components/Icons/Folder"
import { AddCard } from "components/Icons/AddCard"

const GuidesAdmin: NextPageWithLayout = () => {
	const router = useRouter()
	const { page } = router.query
	const title = (page as string)?.replace("and-", "& ").replace("-", " ")

	const PageSchema = yup.object({
		pageTitle: yup.string().min(5, "Field must have at least 5 characters"),
		file: yup.string(),
	})

	type PageProps = yup.InferType<typeof PageSchema>

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<PageProps>({
		resolver: yupResolver(PageSchema),
	})

	const onSubmit = ({ pageTitle, file }: PageProps) => {
		reset()
	}

	return (
		<>
			<Head>
				<title>{`Fly Embraer - Page Admin`}</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Text
				as="h1"
				size="xxl"
				weight="thin"
				color="brand-primary"
				css={{ marginBottom: "4rem", textTransform: "uppercase" }}
			>
				{title}
			</Text>

			<Flex as="form" css={{ flexDirection: "column", gap: "2rem" }} onSubmit={handleSubmit(onSubmit)}>
				<TextField id="pageTitle" css={{ maxWidth: "400px" }} {...register("pageTitle")}>
					Page title
				</TextField>

				<div style={{ position: "relative" }}>
					<Button
						css={{
							position: "absolute",
							top: "calc(50% + 1px)",
							left: "8px",
							transform: "translateY(-50%)",
							width: "48px",
							height: "26px",
						}}
						type="button"
					>
						File
					</Button>
					<TextField
						id="file"
						className={SytledTextField()}
						placeholder="filename.pdf"
						hint={"Maximum 10mb"}
						{...register("file")}
					>
						PDF file
					</TextField>
				</div>

				<Flex css={{ justifyContent: "flex-end" }}>
					<Button type="submit">Save</Button>
				</Flex>
			</Flex>
		</>
	)
}

const SytledTextField = css("input", {
	maxWidth: "400px",

	"&[placeholder]": {
		paddingLeft: "60px",
	},
})

export default GuidesAdmin

GuidesAdmin.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout css={{ bg: "$white" }}>{page}</LoggedLayout>
}
