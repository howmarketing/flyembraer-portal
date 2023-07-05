import { ReactElement } from "react"
import Head from "next/head"
import router from "next/router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { NextPageWithLayout } from "pages/_app"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { Flex } from "components/Flex"
import Text from "components/Text"
import Select from "components/Select"
import Button from "components/Button"

const PageAdmin: NextPageWithLayout = () => {
	const pageAdminSchema = yup.object({
		page: yup.string().required("This field is required"),
	})

	type PageAdminProps = yup.InferType<typeof pageAdminSchema>

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PageAdminProps>({
		resolver: yupResolver(pageAdminSchema),
	})

	const onSubmit = ({ page }: PageAdminProps) => {
		router.push({
			pathname: `${router.asPath}/${page}`,
			query: { page },
		})
	}

	return (
		<>
			<Head>
				<title>{`Fly Embraer - Page Admin`}</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Text as="h1" size="xxl" weight="thin" color="brand-primary" css={{ marginBottom: "4rem" }}>
				PAGE ADMIN
			</Text>

			<Flex
				as="form"
				onSubmit={handleSubmit(onSubmit)}
				css={{ flexDirection: "column", gap: "4rem", maxWidth: "300px" }}
			>
				<Text as="h2" size="lg">
					Please choose a page to manage:
				</Text>

				<Select
					id="page"
					label="Page"
					required
					defaultValue={"P"}
					options={[
						{ value: "support-center", displayValue: "Support Center" },
						{ value: "flight-operations", displayValue: "Flight Operations" },
						{ value: "leasing-company", displayValue: "Leasing Company" },
						{ value: "maintenance", displayValue: "Maintenance" },
						{ value: "production-and-delivery", displayValue: "Production & Delivery" },
						{ value: "material-solutions", displayValue: "Material Solutions" },
						{ value: "training", displayValue: "Training" },
						{ value: "dc-administration", displayValue: "DC Administration" },
						{ value: "guides", displayValue: "Guides" },
					]}
					{...register("page")}
					error={errors.page?.message}
				/>

				<Button css={{ width: "80px" }} type="submit">
					Edit
				</Button>
			</Flex>
		</>
	)
}

export default PageAdmin

PageAdmin.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout css={{ bg: "$white" }}>{page}</LoggedLayout>
}
