/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as yup from "yup"

import { MouseEventHandler, ReactElement, useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { More } from "components/Icons/More"

import Button from "components/Button"
import { Edit } from "components/Icons/Edit"
import { Flex } from "components/Flex"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import type { NextPageWithLayout } from "pages/_app"
import Text from "components/Text"
import TextField from "components/TextField"
import { styled } from "@stitches/react"
import { useForm } from "react-hook-form"
import { useGetProfile, GetProfileResponse as IProfile } from "api/profile/getProfile"
import { useRouter } from "next/router"
import { yupResolver } from "@hookform/resolvers/yup"
import { GetUserUserByObjectProps, GetUserUserByObject } from "api/user/getUserObject"

const UserManagement: NextPageWithLayout = () => {
	const [visible, setVisible] = useState(false)
	const [activeRowIndex, setActiveRowIndex] = useState(-1)
	const router = useRouter()
	const isAllEdit = false
	const [list, setList] = useState<Array<GetUserUserByObjectProps>>([])
	const [currentPage, setCurrentPage] = useState(1)

	const MyProfile = yup.object({
		cn: yup.string(),
		displayName: yup.string(),
		embNameCompany: yup.string(),
		personalTitle: yup.string(),
		title: yup.string(),
		mail: yup.string(),
		location: yup.string(),
		embMail2: yup.string().email(),
		phone: yup.string(),
		phoneExtension: yup.string(),
		embProfile: yup.string(),
		embStatus: yup.string(),
		embCreationDate: yup.string(),
		embApprovalDate: yup.string(),
		streetAddress: yup.string(),
	})
	type IMyProfile = IProfile & typeof MyProfile
	type GetProfileProps = yup.InferType<IMyProfile>

	const [showOptions, setShowOptions] = useState(false)

	const profileData = useGetProfile({
		onSuccess(data) {
			reset({
				cn: data?.cn || "",
				displayName: data?.displayName || "",
				embNameCompany: data?.embNameCompany || "",
				personalTitle: data?.personalTitle || "",
				title: data?.title || "",
				location: data?.location || "",
				mail: data?.mail || "",
				embMail2: data?.embMail2 || "",
				phone: data?.telephoneNumber || "",
				phoneExtension: data?.extensionTelephoneNumber || "",
				embProfile: data?.embProfile || "",
				embStatus: data?.embStatus || "",
				embCreationDate: data?.embCreationDate || "",
				embApprovalDate: data?.embApprovalDate || "",
				streetAddress: data?.streetAddress || "",
			})
		},
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<GetProfileProps>({
		resolver: yupResolver(MyProfile),
	})

	const itemsPerPage = 5

	const navigateToMultiEdit = (event: Event) => {
		router.push({
			pathname: "/admin/user-management/multi-edit",
			query: { name: "UserManagement" },
		})
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		event.preventDefault()
	}

	const toggleVisibility = (event: Event) => {
		event.preventDefault()
		setVisible(!visible)
	}

	const handleIconClick = (event: Event, index: number) => {
		event.preventDefault()
		router.push({
			pathname: "/admin/user-management/edit-company",
			query: { detail: JSON.stringify(list[index]) },
		})
	}

	const handleSearch = (event: Event) => {
		event.preventDefault()
		const GetUserUserByObjectProps = {
			userEmbStatus: "pending",
		} as unknown as GetUserUserByObjectProps

		// Make an API call to get new data
		GetUserUserByObject(GetUserUserByObjectProps).then((response) => {
			setList([response])
		})
	}

	function createTable() {
		// Get the starting index and ending index of the items to display on the current page
		const startIndex = (currentPage - 1) * itemsPerPage
		const endIndex = startIndex + itemsPerPage

		// Get the items to display on the current page
		const currentItems = list.slice(startIndex, endIndex)

		// Calculate the total number of pages based on the number of items per page
		const totalPages = Math.ceil(list.length / itemsPerPage)

		// Render the page numbers
		const renderPageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
			<Text
				css={{
					fontSize: "15px",
					padding: "5px",
					border: "1px solid blue",
					margin: "10px",
					borderRadius: "5px",
					color: "#000000",
				}}
				key={page}
				onClick={() => setCurrentPage(page)}
			>
				{page}
			</Text>
		))

		// Handle "Next" and "Previous" button clicks
		const handleNextClick = (event: Event) => {
			event.preventDefault()
			if (currentPage < totalPages) {
				setCurrentPage(currentPage + 1)
			}
		}

		const handlePreviousClick = (event: Event) => {
			event.preventDefault()

			if (currentPage - 1 > 0) {
				setCurrentPage(currentPage - 1)
			}
		}

		const handleEdit = (event: Event, data: Record<any, any>) => {
			event.preventDefault()
			router.push({
				pathname: "/admin/user-management/service-selection",
				query: {
					isAllEdit: isAllEdit,
					object: JSON.stringify(data),
				},
			})
		}

		return (
			<Flex css={{ flexDirection: "column", position: "center", right: "0" }}>
				<Table css={{ center: "0" }}>
					<EvenRow>
						<Th>Company name</Th>
						<Th>Company address</Th>
						<Th>Name</Th>
						<Th>Contact info</Th>
						<Th>Last access</Th>
						<Th>Status</Th>
						<Th>Approval</Th>
						<Th></Th>
					</EvenRow>
					<TBody>
						{currentItems.map((item, index) => (
							<EvenRow key={item?.id || item?.userCn || index}>
								<Td>{item?.companyDisplayName ?? "Not Available"}</Td>
								<Td>{item?.companyStreetAddress ?? "Not Available"}</Td>
								<Td>{item?.userCn ?? "Not Available"}</Td>
								<Td>{item?.userMail ?? "Not Available"}</Td>
								<Td>{item?.companyLastUpdate ?? "Not Available"}</Td>
								<Td>{item?.userEmbStatus ?? "Not Available"}</Td>
								<Td>{item.userEmbProfile ?? "Not Available"}</Td>

								<Td onClick={(e) => handleIconClick(e as unknown as Event, index)}>
									<Flex
										css={{
											width: "40px",
											height: "30px",
											justifyContent: "center",
											alignItem: "center",
											background: "#005AAF",
											padding: "5px",
											borderRadius: "5px",
										}}
									>
										<Edit width="15" height="15" />
									</Flex>

									{/* {index === activeRowIndex && showOptions && (
                <Flex>
                  <Button variant="secondary" css={{width: "50px" , marginRight: "5px",marginTop:"5px"}}  onClick={handleEdit.bind(this,list[index])}   >Edit</Button>
                  
                  <Button variant = "secondary" css={{width: "50px",marginTop:"5px"}     }>Delete</Button>
                </Flex>
                 
               )}         */}
								</Td>
							</EvenRow>
						))}
					</TBody>
				</Table>

				{list.length > 0 && (
					<Flex style={{ flexDirection: "column", marginTop: "10px" }}>
						<Text
							css={{ padding: "15px", size: "80px", width: "80px" }}
							onClick={(e) => {
								handlePreviousClick(e as unknown as Event)
							}}
							className={currentPage === 1 ? "disabled" : ""}
						>
							Prev
						</Text>
						{renderPageNumbers}
						<Text
							css={{ padding: "15px", size: "80px", width: "80px" }}
							onClick={(e) => {
								handleNextClick(e as unknown as Event)
							}}
							className={currentPage === totalPages ? "disabled" : ""}
						>
							Next
						</Text>
					</Flex>
				)}
			</Flex>
		)
	}

	return (
		<Flex as="form" css={{ flexDirection: "column" }}>
			<Flex css={{ flexDirection: "column", paddingRight: "50px" }}>
				<Flex css={{ flexDirection: "row" }}>
					<Text color="brand-primary" size="sm" weight="bold">
						USER MANAGEMENT
					</Text>

					<Button css={{ marginLeft: "10px", width: "100px", height: "30px", alignContent: "end" }}>
						New User
					</Button>
				</Flex>

				<Flex css={{ flexDirection: "row", paddingTop: "10px" }}>
					<TextField id="companyName" {...register("embNameCompany")}>
						Company name
					</TextField>

					<TextField css={{ paddingLeft: "30px" }} id="displayName" {...register("displayName")}>
						User name
					</TextField>

					<TextField css={{ paddingLeft: "30px" }} id="email" {...register("mail")}>
						Main e-mail
					</TextField>

					<Button
						css={{ marginLeft: "10px", width: "400px", height: "30px", marginTop: "20px" }}
						onClick={(e) => {
							toggleVisibility(e as unknown as Event)
						}}
					>
						{!visible ? "More Field" : "Less Field"}
					</Button>
				</Flex>

				<Flex css={{ flexDirection: "row", paddingTop: "10px", width: "85%" }}>
					<TextField id={"User account"}>User account</TextField>

					<TextField css={{ paddingLeft: "30px" }} id="status" {...register("embStatus")}>
						User status
					</TextField>

					<TextField css={{ paddingLeft: "30px" }} id="profile" {...register("embProfile")}>
						Main profile
					</TextField>
				</Flex>
			</Flex>
			<Flex css={{ flexDirection: "column", width: "80%" }}>
				{visible && (
					<Flex style={{ flexDirection: "column", paddingTop: "10px" }}>
						<Flex css={{ flexDirection: "row" }}>
							<TextField id={"Company administrator name"}>Company administrator name</TextField>

							<TextField id={"Services"} css={{ paddingLeft: "30px" }}>
								Services
							</TextField>

							<TextField id={"Application"} css={{ paddingLeft: "30px" }}>
								Application
							</TextField>
						</Flex>

						<Flex css={{ flexDirection: "row", paddingTop: "10px" }}>
							<TextField id={"Business company type"}>Business company type</TextField>

							<TextField id={"Market segment"} css={{ paddingLeft: "30px" }}>
								Market segment
							</TextField>

							<TextField id={"Aircraft type"} css={{ paddingLeft: "30px" }}>
								Aircraft type
							</TextField>
						</Flex>

						<Flex css={{ flexDirection: "row", paddingTop: "10px", width: "65%" }}>
							<TextField id={"Company status"}>Company status</TextField>

							<TextField id={"Country"} css={{ paddingLeft: "30px" }}>
								Country
							</TextField>
						</Flex>
					</Flex>
				)}
			</Flex>

			<Flex style={{ flexDirection: "row" }}>
				<Button css={{ marginTop: "10px", width: "10%" }} onClick={(e) => handleSearch(e as unknown as Event)}>
					Search
				</Button>

				<Flex css={{ right: "0" }}>
					<Button css={{ margin: "10px", width: "100px", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
						Export Data
					</Button>
					<Button
						css={{ margin: "10px", width: "100px" }}
						onClick={(e) => navigateToMultiEdit(e as unknown as Event)}
					>
						Multi-edit
					</Button>
				</Flex>
			</Flex>

			<Flex css={{ marginTop: "5%" }}>{list.length > 0 && createTable()}</Flex>
		</Flex>
	)
}

const Table = styled("table", {
	borderCollapse: "collapse",
	borderSpacing: 0,
	width: "100%",
	flexDirection: "column",
})

const Th = styled("th", {
	padding: 12,
	border: "1px solid #DADCE0",
	borderLeft: "0px solid",
	fontSize: "12px",
	borderRight: "0px solid",
	textAlign: "left",
	color: "#98A9BC",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
})

const TBody = styled("body", {
	border: "1px solid",
	display: "contents",
})

const Td = styled("td", {
	padding: 12,
	color: "#252631",
	fontSize: "12px",
	border: "1px solid #DADCE0",
	borderLeft: "0px solid",
	borderRight: "0px solid",
	textAlign: "left",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
})

const EvenRow = styled("tr", {
	width: "100%",
})

export default UserManagement

UserManagement.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
