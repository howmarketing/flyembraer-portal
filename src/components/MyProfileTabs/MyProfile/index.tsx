import Image from "next/image"

import { useCallback } from "react"

import { useMutation } from "react-query"

import { useDropzone } from "react-dropzone"

import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useGetUserAvatar } from "api/download-center/getPersonAvatar"
import { putPersonAvatar } from "api/download-center/putPersonAvatar"
import { useGetProfile } from "api/profile/getProfile"
import { putUser } from "api/user/putUser"

import Button from "components/Button"
import { Flex } from "components/Flex"
import { MediaMatch } from "components/MediaMatch"
import { SelectPrefix } from "components/SelectPrefix/SelectPrefix"
import Text from "components/Text"
import TextArea from "components/TextArea"
import TextField from "components/TextField"

import { UpdatePassword } from "./UpdatePassword"

export const MyProfileTab = () => {
	const { mutate } = useMutation(putUser)

	const userProfileSchema = yup.object({
		personalTitle: yup.string().required("This field is required"),
		displayName: yup.string().max(50).required("This field is required"),
		title: yup.string().max(50),
		email: yup
			.string()
			.email()
			.max(125)
			.oneOf([yup.ref("emailConfirmation"), null], "Emails must match")
			.required("This field is required"),
		emailConfirmation: yup
			.string()
			.email("This is not a valid email address")
			.max(125)
			.oneOf([yup.ref("email"), null], "Emails must match")
			.required("This field is required"),
		embMail2: yup
			.string()
			.email()
			.max(125)
			.oneOf([yup.ref("emailConfirmation2"), null], "Emails must match")
			.required("This field is required"),
		emailConfirmation2: yup
			.string()
			.email("This is not a valid email address")
			.max(125)
			.oneOf([yup.ref("embMail2"), null], "Emails must match")
			.required("This field is required"),
		phone: yup.string().max(25).required("This field is required"),
		otherTelephone: yup.string().max(25).required("This field is required"),
		ddi: yup.string().max(4).required("This field is required"),
		ddi2: yup.string().max(4).required("This field is required"),
		cn: yup.string().nullable(),
		embProfile: yup.string().nullable(),
		embCreationDate: yup.string().nullable(),
		embApprovalDate: yup.string().nullable(),
		embNameCompany: yup.string().nullable(),
		streetAddress: yup.string().nullable(),
		embStatus: yup.string().nullable(),
		embApprovalUser_name: yup.string().nullable(),
	})

	type GetProfileProps = yup.InferType<typeof userProfileSchema>

	const { data } = useGetProfile({
		onSuccess(data) {
			reset({
				personalTitle: data.personalTitle ?? "",
				displayName: data.displayName ?? "",
				title: data.title ?? "",
				email: data.mail ?? "",
				emailConfirmation: data.mail ?? "",
				phone: data.telephoneNumber ?? "",
				cn: data.cn,
				embProfile: data.embProfile,
				embCreationDate: data.embCreationDate,
				embApprovalDate: data.embApprovalDate,
				embNameCompany: data.embNameCompany,
				streetAddress: data.streetAddress,
				embStatus: data.embStatus,
				embApprovalUser_name: data.embApprovalUser_name,
			})
		},
		cacheTime: 1000 * 60, // 1 min
		staleTime: 1000 * 60, // 1 min
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<GetProfileProps>({
		resolver: yupResolver(userProfileSchema),
		mode: "all",
	})

	const response = (formValues: GetProfileProps) =>
		mutate({
			dn: data?.dn ?? "",
			username: data?.cn ?? "",
			prefix: formValues?.personalTitle,
			fullName: formValues?.displayName,
			jobTitle: formValues?.title,
			email: formValues?.email,
			email2: formValues?.embMail2,
			phone: formValues.phone,
			phone2: formValues?.otherTelephone,
			ddi: formValues?.ddi,
			ddi2: formValues?.ddi2,
		})

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const image = acceptedFiles[0]
		putPersonAvatar(image)
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
	})

	const { data: imageUrl } = useGetUserAvatar()

	return (
		<Flex as="form" onSubmit={handleSubmit(response)} css={{ flexDirection: "column", gap: "38px" }}>
			{/* Profile photo and main personal personal information */}
			<Flex css={{ flexDirection: "column", gap: "20px" }}>
				{/* Save and back button for web only */}
				<MediaMatch greaterThan="web" asChild>
					<Flex css={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
						<Button variant="secondary" css={{ width: "5rem" }}>
							Back
						</Button>
						<Flex css={{ width: "7.438rem" }}>
							<Button type="submit">Save</Button>
						</Flex>
					</Flex>
				</MediaMatch>

				<Flex
					css={{
						flexDirection: "column",
						gap: "2rem",
						justifyContent: "space-between",
						"@largeMobile": {
							flexDirection: "column",
							columnGap: "20px",
						},
						"@web": {
							flexDirection: "row",
							alignItems: "center",
							width: "100%",
						},
					}}
				>
					<Flex
						css={{
							flexDirection: "column",
							alignItems: "center",
							gap: "8px",
							"@web": {
								flex: 1,
							},
						}}
					>
						<Text
							weight="bold"
							size="md"
							color="brand-primary"
							css={{
								"@web": {
									alignSelf: "flex-start",
								},
							}}
						>
							USER DATA
						</Text>

						<Flex css={{ width: "155px" }}>
							<Image src={imageUrl ?? "/img/placeholder-profile-photo.svg"} width={155} height={155} />
						</Flex>

						<Flex>
							<Button {...getRootProps()} type="button" css={{ fontWeight: "$normal" }}>
								<input {...getInputProps()} />
								UPLOAD PICTURE
							</Button>
						</Flex>
					</Flex>

					{/* Main user info section */}
					<Flex
						css={{
							flexDirection: "column",
							gap: "20px",
							"@web": {
								flex: 2,
							},
						}}
					>
						<Flex css={{ gap: "1rem" }}>
							<SelectPrefix
								id="personalTitle"
								label="Prefix"
								{...register("personalTitle")}
								error={errors.personalTitle?.message}
								defaultValue={data?.personalTitle ?? ""}
								css={{
									width: "90px",
								}}
								required
							/>

							<TextField
								id="displayName"
								{...register("displayName")}
								error={errors.displayName?.message}
								required
							>
								Name
							</TextField>
						</Flex>

						<Flex>
							<TextField id="title" {...register("title")} error={errors.title?.message}>
								Job title
							</TextField>
						</Flex>
						<Flex
							css={{
								flexDirection: "column",
								gap: "20px",
								"@web": {
									flexDirection: "row",
									justifyContent: "space-between",
								},
							}}
						>
							<TextField
								id="embProfile"
								{...register("embProfile")}
								error={errors.embProfile?.message}
								disabled={true}
								required
							>
								Profile
							</TextField>
							<TextField
								id="embStatus"
								{...register("embStatus")}
								error={errors.embStatus?.message}
								disabled={true}
								required
							>
								Status
							</TextField>
						</Flex>
					</Flex>
				</Flex>
			</Flex>

			{/* Rest of information */}
			<Flex
				css={{
					flexDirection: "row",
					rowGap: "20px",
				}}
			>
				<Flex
					css={{
						flexDirection: "column",
						rowGap: "20px",
						width: "100%",
						"@largeMobile": { alignContent: "center" },
					}}
				>
					<Flex
						css={{
							flexDirection: "column",
							gap: "20px",
							"@largeMobile": { flexDirection: "column", gap: "20px" },
							"@web": { flexDirection: "row", gap: "62px" },
						}}
					>
						<TextField id="email" {...register("email")} error={errors.email?.message} required>
							Main email
						</TextField>

						<TextField
							id="emailConfirmation"
							{...register("emailConfirmation")}
							error={errors.emailConfirmation?.message}
						>
							Confirm primary email
						</TextField>
					</Flex>

					<Flex
						css={{
							flexDirection: "column",
							gap: "20px",
							"@largeMobile": { flexDirection: "column", gap: "20px" },
							"@web": { flexDirection: "row", gap: "62px" },
						}}
					>
						<TextField id="embMail2" {...register("embMail2")} error={errors.embMail2?.message} required>
							Secondary email
						</TextField>

						<TextField
							id="emailConfirmation2"
							{...register("emailConfirmation2")}
							error={errors.emailConfirmation2?.message}
							required
						>
							Confirm secondary email
						</TextField>
					</Flex>

					<Flex
						css={{
							flexDirection: "column",
							gap: "20px",
							"@largeMobile": { flexDirection: "column", gap: "20px" },
							"@web": { flexDirection: "row", gap: "62px" },
						}}
					>
						<Flex css={{ alignContent: "space-between", alignItems: "end", columnGap: "8px", flex: 1 }}>
							<TextField
								id="ddi"
								{...register("ddi")}
								error={errors.ddi?.message}
								css={{ width: "90px", "& label": { width: "200%" } }}
								required
							>
								Main phone
							</TextField>
							<TextField id="phone" {...register("phone")} error={errors.phone?.message} required />
						</Flex>

						<Flex css={{ alignContent: "space-between", alignItems: "end", columnGap: "8px", flex: 1 }}>
							<TextField
								id="ddi2"
								{...register("ddi2")}
								error={errors.ddi2?.message}
								css={{ width: "60px", "& label": { width: "200%" } }}
								required
							>
								Secondary phone
							</TextField>
							<TextField id="otherTelephone" {...register("otherTelephone")} required />
						</Flex>
					</Flex>

					<Flex
						css={{
							flexDirection: "column",
							gap: "20px",
							"@largeMobile": { flexDirection: "column", gap: "20px" },
							"@web": { flexDirection: "row", gap: "62px" },
						}}
					>
						<TextField id="cn" {...register("cn")} error={errors.cn?.message} disabled={true}>
							Account
						</TextField>

						<TextField
							id="embCreationDate"
							{...register("embCreationDate")}
							error={errors.embCreationDate?.message}
							disabled={true}
						>
							Registration date
						</TextField>
					</Flex>

					<Flex
						css={{
							flexDirection: "column",
							gap: "20px",
							"@largeMobile": { flexDirection: "column", gap: "20px" },
							"@web": { flexDirection: "row", gap: "62px" },
						}}
					>
						<TextField
							id="embApprovalUser_name"
							{...register("embApprovalUser_name")}
							error={errors.embApprovalUser_name?.message}
							disabled={true}
						>
							Approver
						</TextField>

						<TextField
							id="embApprovalDate"
							{...register("embApprovalDate")}
							error={errors.embApprovalDate?.message}
							disabled={true}
						>
							Approval date
						</TextField>
					</Flex>

					{/* V This lastUpdate texfield needs a component to track the latest date or a new service from backend to do so V */}
					<Flex css={{ "@largeMobile": { margin: "unset" } }}>
						<TextField id="lastUpdate" disabled={true}>
							Last update
						</TextField>
					</Flex>

					{/* V This rejectDetails texfield possibly needs a new service from backend */}
					<Flex
						css={{
							flexDirection: "column",
							gap: "20px",
							"@largeMobile": { gap: "20px", margin: "unset" },
						}}
					>
						<TextArea
							id="rejectDetails"
							disabled={true}
							css={{
								height: "135px",
								"@largeMobile": { width: "100%", height: "135px" },
							}}
						>
							Reject / Block Details
						</TextArea>

						<TextArea
							id="rejectDetails"
							disabled={true}
							css={{
								height: "135px",
								"@largeMobile": { width: "100%", height: "135px" },
							}}
						>
							Comments
						</TextArea>
					</Flex>
				</Flex>
			</Flex>

			<MediaMatch lessThan="web" asChild>
				<Flex css={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
					<Button variant="secondary" css={{ width: "5rem" }}>
						Back
					</Button>
					<Flex css={{ width: "7.438rem" }}>
						<Button type="submit">Save</Button>
					</Flex>
				</Flex>
			</MediaMatch>

			<UpdatePassword {...data} />
		</Flex>
	)
}
