import { yupResolver } from "@hookform/resolvers/yup"
import Button from "components/Button"
import { Flex } from "components/Flex"
import TextField from "components/TextField"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const MoreInformation = () => {
	const moreInformationSchema = yup.object({
		mfir: yup.string().max(50, "Field may only contain 50 characters"),
		blockDetails: yup.string().max(150, "Field may only contain 50 characters"),
		rejectDetails: yup.string().max(150, "Field may only contain 50 characters"),
		companyNickname: yup.string().max(60, "Field may only contain 50 characters"),
		companyCode: yup.string().max(10, "Field may only contain 50 characters"),
		note: yup.string().max(150, "Field may only contain 50 characters"),
	})

	type MoreInformation = yup.InferType<typeof moreInformationSchema>

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MoreInformation>({ resolver: yupResolver(moreInformationSchema) })

	const response = (data: MoreInformation) => console.log(data)

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
			<TextField id="mfir" error={errors.mfir?.message} {...register("mfir")}>
				MFIR:
			</TextField>

			<TextField id="blockDetails" error={errors.blockDetails?.message} type="area" {...register("blockDetails")}>
				Block details:
			</TextField>

			<TextField
				id="rejectDetails"
				error={errors.rejectDetails?.message}
				type="area"
				{...register("rejectDetails")}
			>
				Reject details:
			</TextField>

			<TextField id="companyNickname" error={errors.companyNickname?.message} {...register("companyNickname")}>
				Company nickname:
			</TextField>

			<TextField id="companyCode" error={errors.companyCode?.message} {...register("companyCode")}>
				Company Code:
			</TextField>

			<TextField id="note" error={errors.note?.message} type="area" {...register("note")}>
				Note:
			</TextField>

			<Button type="submit">Save changes</Button>
		</Flex>
	)
}

export default MoreInformation
