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

const Page: NextPageWithLayout = () => {
	const router = useRouter()
	const { page } = router.query
	const title = (page as string)?.replace("and-", "& ").replace("-", " ")

	const PageSchema = yup.object({
		pageTitle: yup.string().min(5, "Field must have at least 5 characters"),
		bannerImageFile: yup.string(),
		tab1Title: yup.string(),
		tab2Title: yup.string(),
		tab3Title: yup.string(),
		tab1Text: yup.string(),
		tab2Text: yup.string(),
		tab3Text: yup.string(),
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

	const onSubmit = ({
		pageTitle,
		bannerImageFile,
		tab1Title,
		tab2Title,
		tab3Title,
		tab1Text,
		tab2Text,
		tab3Text,
	}: PageProps) => {
		reset()
	}

	const [applications, setApplications] = useState<any[]>(() => response)
	const columns = useMemo<ColumnDef<any>[]>(() => tableColumns, [])
	const totalElements = applications?.length

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

			<Flex as="form" css={{ flexDirection: "column", gap: "4rem" }} onSubmit={handleSubmit(onSubmit)}>
				<TextField id="pageTitle" css={{ maxWidth: "400px" }} {...register("pageTitle")}>
					Page title
				</TextField>

				<Flex css={{ flexDirection: "column", gap: "1rem" }}>
					<Text as="span" size="sm" weight="thin">
						Banner image
					</Text>
					<Image style={{ width: "100%" }} src="/img/PageAdmin/banner.jpg" alt="banner" />

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
							id="bannerImageFile"
							className={SytledTextField()}
							placeholder="imageName.jpg"
							hint={"Maximum 10mb"}
							{...register("bannerImageFile")}
						>
							Banner image file
						</TextField>
					</div>
				</Flex>

				<Flex css={{ flexDirection: "column", gap: "1rem" }}>
					<h3>Related Apps</h3>
					<FlyTable
						columns={columns}
						data={applications}
						paginationProps={{ enabled: true, totalPages: 5, totalElements }}
					></FlyTable>
				</Flex>

				<Flex css={{ flexDirection: "column", gap: "1rem", borderBottom: "1px solid #ccc" }}>
					<h3>Content</h3>
					<h4>Tab 1</h4>
					<TextField id="tab1Title" css={{ maxWidth: "400px" }} {...register("tab1Title")}>
						Tab 1 title
					</TextField>

					<TextArea id="tab1Text" {...register("tab1Text")}>
						Tab 1 text
					</TextArea>

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

						<div
							style={{
								width: "300px",
								height: "340px",
								display: "grid",
								gap: "1.5rem",
								justifyItems: "center",
								cursor: "pointer",
							}}
						>
							<div style={{ alignSelf: "flex-end" }}>
								<AddCard width={88} />
							</div>

							<Text as="span" size="md" weight="bold" color={"brand-primary"}>
								Add content card
							</Text>
						</div>
					</Flex>
				</Flex>

				<Flex css={{ flexDirection: "column", gap: "1rem", borderBottom: "1px solid #ccc" }}>
					<h4>Tab 2</h4>
					<TextField id="tab2Title" css={{ maxWidth: "400px" }} {...register("tab2Title")}>
						Tab 2 title
					</TextField>

					<TextArea id="tab2Text" {...register("tab2Text")}>
						Tab 2 text
					</TextArea>

					<Flex css={{ margin: "2rem 0", flexDirection: "row", gap: "3rem" }}>
						<div
							style={{
								width: "300px",
								height: "340px",
								display: "grid",
								gap: "1.5rem",
								justifyItems: "center",
								cursor: "pointer",
							}}
						>
							<div style={{ alignSelf: "flex-end" }}>
								<AddCard width={88} />
							</div>

							<Text as="span" size="md" weight="bold" color={"brand-primary"}>
								Add content card
							</Text>
						</div>
					</Flex>
				</Flex>

				<Flex css={{ flexDirection: "column", gap: "1rem", borderBottom: "1px solid #ccc" }}>
					<h4>Tab 3</h4>
					<TextField id="tab3Title" css={{ maxWidth: "400px" }} {...register("tab3Title")}>
						Tab 3 title
					</TextField>

					<TextArea id="tab3Text" {...register("tab3Text")}>
						Tab 3 text
					</TextArea>

					<Flex css={{ margin: "2rem 0", flexDirection: "row", gap: "3rem" }}>
						<div
							style={{
								width: "300px",
								height: "340px",
								display: "grid",
								gap: "1.5rem",
								justifyItems: "center",
								cursor: "pointer",
							}}
						>
							<div style={{ alignSelf: "flex-end" }}>
								<AddCard width={88} />
							</div>

							<Text as="span" size="md" weight="bold" color={"brand-primary"}>
								Add content card
							</Text>
						</div>
					</Flex>
				</Flex>

				<Flex css={{ flexDirection: "column", gap: "1rem" }}>
					<Flex css={{ flexDirection: "row", gap: "1rem" }}>
						<div style={{ margin: "2rem 0", display: "grid", gap: "1.5rem", placeItems: "center" }}>
							<Folder />

							<Text as="span" size="md" weight="bold" color={"brand-primary"}>
								Add new tab
							</Text>
						</div>
					</Flex>
				</Flex>

				<Flex css={{ justifyContent: "flex-end" }}>
					<Button type="submit">Save</Button>
				</Flex>
			</Flex>
		</>
	)
}

const tableColumns = [
	{
		accessorKey: "applicationName",
		header: "Application",
	},
	{
		id: "serviceName",
		header: "Service",
		cell: ({ row }: any) => {
			return <FlyTable columns={subTableColumns} data={row.original.services}></FlyTable>
		},
	},
]

const subTableColumns = [
	/*   {
    id: "select",
    header: ({ table }: any) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler()
        }}
      />
    ),
    cell: ({ row }: any) => (
      <div className="px-1">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }}
        />
      </div>
    )
  }, */
	{
		accessorKey: "serviceName",
		header: "Service",
	},
]

/* function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return <input type="checkbox" ref={ref} className={className + " cursor-pointer"} {...rest} />
}
 */
const SytledTextField = css("input", {
	maxWidth: "400px",

	"&[placeholder]": {
		paddingLeft: "60px",
	},
})

const response = [
	{
		id: 0,
		applicationName: "Application Name 1",
		services: [
			{ id: 0, serviceName: "Service Name A" },
			{ id: 1, serviceName: "Service Name B" },
			{ id: 2, serviceName: "Service Name C" },
		],
	},
	{
		id: 1,
		applicationName: "Application Name 2",
		services: [
			{ id: 0, serviceName: "Service Name A" },
			{ id: 1, serviceName: "Service Name B" },
			{ id: 2, serviceName: "Service Name C" },
		],
	},
]

export default Page

Page.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout css={{ bg: "$white" }}>{page}</LoggedLayout>
}
