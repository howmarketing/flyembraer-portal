/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useEffect, useState, useContext } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/Tabs"
import * as yup from "yup"

import Button from "components/Button"
import { Flex } from "components/Flex"
import { getUserNames } from "api/user/getUserName"
import Image from "next/image"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import type { NextPageWithLayout } from "pages/_app"
// import { Select } from "components/Select"
import { SelectPrefix } from "components/SelectPrefix/SelectPrefix"
// import { SelectProfile } from "components/SelectProfile/SelectProfile"
import Text from "components/Text"
import TextField from "components/TextField"
import { putUser } from "api/user/putUser"
import { User } from "types/User"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { styled } from "@stitches/react"
import { useRouter } from "next/router"

const EditCompany: NextPageWithLayout = () => {
	const router = useRouter()
	const [userData, setUserData] = useState<User | Record<any, any>>({} as User)
	const data = JSON.parse(((router.query?.detail || "") as string) || JSON.stringify({}))

	const userProfileSchema = yup.object({
		personalTitle: yup.string(),
		name: yup.string(),
		title: yup.string(),
		email: yup.string().email(),
		email2: yup.string().email(),
		phone: yup.string(),
		phoneExtension: yup.string(),
		cn: yup.string(),
		embProfile: yup.string(),
		embCreationDate: yup.string(),
		embApprovalDate: yup.string(),
		embNameCompany: yup.string(),
		streetAddress: yup.string(),
		embStatus: yup.string(),
	})

	type GetProfileProps = yup.InferType<typeof userProfileSchema>

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<GetProfileProps>({
		resolver: yupResolver(userProfileSchema),
	})

	const response = (myData: GetProfileProps) => {
		// console.log(data)
		putUser({ dn: data?.user_dn ?? "", username: data?.user_cn ?? "", ...myData })
	}

	const updatePage = (event: any) => {
		event.preventDefault()
	}

	useEffect(() => {
		if (!userData) {
			const res = getUserNames(data.user_cn)
			res.then((da) => {
				const userFound = da[0]
				setUserData(userFound)
			})
		}
	}, [])

	return (
		<Flex as="form" css={{ flexDirection: "column" }}>
			{userData && (
				<StyledTab defaultValue="EDIT USER">
					<StyledTabList>
						<StyledTabTrigger value="EDIT USER">EDIT USER</StyledTabTrigger>
						<StyledTabTrigger value="EDIT SERVICES">EDIT SERVICES</StyledTabTrigger>
					</StyledTabList>

					<TabsContent value="EDIT USER">
						<Flex css={{ flexDirection: "row" }}>
							<Flex css={{ marginLeft: "auto", marginTop: "-88px" }}>
								<Button
									variant="secondary"
									css={{
										margin: "10px",
										width: "100px",
										whiteSpace: "nowrap",
										textOverflow: "ellipsis",
									}}
								>
									Back
								</Button>
								<Button
									variant="primary"
									css={{ margin: "10px", width: "100px" }}
									onClick={handleSubmit(response)}
								>
									Save
								</Button>
							</Flex>
						</Flex>

						<Flex css={{ flexDirection: "column" }}>
							<Text css={{ color: "#005AAF", fontWeight: "bold" }}>USER DATA</Text>

							<Flex css={{ marginTop: "10px", flexDirection: "column" }}>
								<Flex css={{ flexDirection: "column" }}>
									<Flex css={{ flexDirection: "row" }}>
										<Image
											src="/img/placeholder-profile-photo.svg"
											width={150}
											height={150}
										></Image>

										<Flex css={{ flexDirection: "column" }}>
											<Flex css={{ flexDirection: "row", width: "600px" }}>
												<SelectPrefix
													id={""}
													label="Prefix:*"
													{...register("personalTitle")}
													defaultValue={userData.personalTitle}
													css={{ width: "80px" }}
												/>

												<TextField
													id={""}
													defaultValue={userData.displayName}
													{...register("embNameCompany")}
													// defaultValue={initialValues.displayName}
													css={{ width: "420px", marginLeft: "5px" }}
												>
													Name:*
												</TextField>
											</Flex>

											<Flex css={{ flexDirection: "row", marginLeft: "5px", marginTop: "10px" }}>
												<TextField
													id={""}
													{...register("title")}
													defaultValue={userData.title}
													css={{ width: "500px" }}
												>
													Job Title:*
												</TextField>
											</Flex>

											<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
												<TextField
													id={""}
													defaultValue={userData.embProfile}
													{...register("embProfile")}
													css={{ width: "43%", marginLeft: "5px" }}
												>
													Profile:*
												</TextField>

												<TextField
													id={""}
													{...register("embStatus")}
													defaultValue={userData.embStatus.toUpperCase()}
													css={{ width: "43%", marginLeft: "5px" }}
												>
													Status:*
												</TextField>
											</Flex>
										</Flex>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id="mail"
											defaultValue={userData.mail}
											{...register("email")}
											css={{ width: "100%" }}
										>
											Main email *
										</TextField>

										<TextField
											id="confirmMail"
											defaultValue={userData.embMail2}
											css={{ width: "100%", marginLeft: "40px" }}
										>
											Confirm primary email
										</TextField>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id="mail2"
											defaultValue={userData.embMail2 ?? "Not Available"}
											{...register("email2")}
										>
											Secondary email *
										</TextField>

										<TextField
											id="confirmMail2"
											// defaultValue={initialValues.displayName}
											css={{ marginLeft: "40px" }}
										>
											Confirm secondary email
										</TextField>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<Flex css={{ flexDirection: "row" }}>
											<TextField id="ddi" {...register("phoneExtension")}>
												Main phone *
											</TextField>

											<TextField
												id={""}
												css={{ marginTop: "20px", marginLeft: "10px" }}
												defaultValue={userData.telephoneNumber}
												{...register("phone")}
											></TextField>

											<TextField
												id={""}
												css={{ marginLeft: "10px" }}
												// defaultValue={initialValues.displayName}
											>
												Extension
											</TextField>
										</Flex>

										<Flex css={{ flexDirection: "row" }}>
											<TextField
												id={""}
												{...register("phoneExtension")}
												// defaultValue={initialValues.displayName}
												css={{ marginLeft: "35px" }}
											>
												Secondary phone
											</TextField>
										</Flex>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id={""}
											disabled
											// defaultValue={initialValues.displayName}
										>
											Account
										</TextField>

										<TextField
											id={""}
											// defaultValue={initialValues.displayName}
											disabled
											css={{ marginLeft: "40px" }}
										>
											Registration date
										</TextField>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id={""}
											disabled
											// defaultValue={initialValues.displayName}
										>
											Approver
										</TextField>

										<TextField
											id={""}
											// defaultValue={initialValues.displayName}
											disabled
											css={{ marginLeft: "40px" }}
										>
											Approval date
										</TextField>
									</Flex>

									<Flex css={{ width: "47%", flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id={""}
											disabled
											// defaultValue={initialValues.displayName}
										>
											Last update
										</TextField>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id={""}
											disabled
											// defaultValue={initialValues.displayName}
										>
											Reject / Block Details
										</TextField>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id={""}
											disabled
											// defaultValue={initialValues.displayName}
										>
											Comments
										</TextField>
									</Flex>

									<Text css={{ color: "#005AAF", fontWeight: "bold", marginTop: "30px" }}>
										COMPANY DATA
									</Text>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id={""}
											disabled
											defaultValue={userData.embNameCompany ?? "Not Available"}
										>
											Company Name
										</TextField>

										<TextField
											id={""}
											defaultValue={userData.co ?? "Not Available"}
											disabled
											css={{ marginLeft: "40px" }}
										>
											{"Country "}
										</TextField>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField id={""} disabled defaultValue={userData.st ?? "Not Available"}>
											Sate/Province
										</TextField>

										<TextField
											id={""}
											defaultValue={userData.location ?? "Not Available"}
											disabled
											css={{ marginLeft: "40px" }}
										>
											{"City "}
										</TextField>
									</Flex>

									<Flex css={{ flexDirection: "row", marginTop: "10px" }}>
										<TextField
											id={""}
											disabled
											defaultValue={userData.streetAddress ?? "Not Available"}
										>
											Address
										</TextField>

										<TextField
											id={""}
											defaultValue={userData.embNameCompanyAdmin ?? "Not Available"}
											disabled
											css={{ marginLeft: "40px" }}
										>
											{"Company administrator "}
										</TextField>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					</TabsContent>

					<TabsContent value="EDIT SERVICES">COMING SOON....</TabsContent>
				</StyledTab>
			)}
		</Flex>
	)
}

export default EditCompany

EditCompany.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}

const Title = styled("h1", {
	fontSize: "18px",
	color: "#005AAF",
	paddingBottom: "15px",
	paddingTop: "13px",
	fontWeight: "400",
})

const StyledTabTrigger = styled(TabsTrigger, {
	all: "unset",
	appearance: "none",
	color: "#005AAF",
	paddingRight: "33px",
	fontWeight: "500",
})

const StyledTabList = styled(TabsList, {
	display: "flex",
	gap: "2rem",
})

const StyledTab = styled(Tabs, {
	display: "flex",
	flexDirection: "column",
	gap: "52px",
	paddingTop: "22px",
})
