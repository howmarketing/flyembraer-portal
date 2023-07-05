import { yupResolver } from "@hookform/resolvers/yup"
import { styled } from "@stitches/react"
import Button from "components/Button"
import { Flex } from "components/Flex"
import { SelectPrefix } from "components/SelectPrefix/SelectPrefix"
import TextField from "components/TextField"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const LegalRepresentative = () => {
	const legalRepresentativeSchema = yup.object({
		prefix: yup.string().max(40, "Field may only contain 40 characters"),
		fullName: yup
			.string()
			.required()
			.min(3, "Field must contain at least 3 characters")
			.max(60, "Field may only contain 60 characters"),
		jobTitle: yup.string().required().max(50, "Field may only contain 50 characters"),
		email: yup.string().email().required().min(5).max(50, "Field may only contain 50 characters"),
		emailConfirmation: yup.string().email().required().min(5).max(50, "Field may only contain 50 characters"),
		phone: yup.string().required().min(8).max(30, "Field may only contain 30 characters"),
		phoneExtension: yup.string().min(8).max(30, "Field may only contain 30 characters"),
	})

	type LegalRepresentative = yup.InferType<typeof legalRepresentativeSchema>

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LegalRepresentative>({ resolver: yupResolver(legalRepresentativeSchema) })

	const response = (data: LegalRepresentative) => console.log(data)

	return (
		<Flex
			as="form"
			css={{
				m: "12px",
				gap: "8px",
				flexDirection: "column",
			}}
			onSubmit={handleSubmit(response)}
		>
			<SelectPrefix
				id="prefix"
				label="Prefix: *"
				error={errors.prefix?.message}
				{...register("prefix")}
			></SelectPrefix>

			<TextField id="fullName" error={errors.fullName?.message} {...register("fullName")}>
				Full name *:
			</TextField>

			<TextField id="jobTitle" error={errors.jobTitle?.message} {...register("jobTitle")}>
				Job title *:
			</TextField>

			<TextField id="email" error={errors.email?.message} {...register("email")}>
				Email address *:
			</TextField>

			<TextField
				id="emailConfirmation"
				error={errors.emailConfirmation?.message}
				{...register("emailConfirmation")}
			>
				Email confirmation *:
			</TextField>

			<TextField id="phone" error={errors.phone?.message} {...register("phone")}>
				Phone *:
			</TextField>

			<TextField id="phoneExtension" error={errors.phoneExtension?.message} {...register("phoneExtension")}>
				Extension *:
			</TextField>

			<Button type="submit">Change legal rep.</Button>
			<Button type="submit">Request documentation</Button>

			<ButtonLegal>teste</ButtonLegal>
		</Flex>
	)
}

const ButtonLegal = styled("button", {
	width: "60px",
	backgroundColor: "red",
	borderRadius: "9999px",
	fontSize: "13px",
	border: "0",
})

export default LegalRepresentative
