import { yupResolver } from "@hookform/resolvers/yup"
import Button from "components/Button"
import { CountriesSelect } from "components/CountriesSelect"
import { Flex } from "components/Flex"
import { SelectCompanyStatus } from "components/SelectCompanyStatus/SelectCompanyStatus"
import TextField from "components/TextField"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const GeneralInformation = () => {
	const generalInformationSchema = yup.object({
		companyName: yup.string().min(3).max(60, "Field may only contain 60 characters"),
		embAddressNickname: yup.string().max(64, "Field may only contain 64 characters"),
		address: yup.string().min(2).max(100, "Field may only contain 100 characters"),
		postalCode: yup.string().min(2).max(14, "Field may only contain 14 characters"),
		city: yup.string().min(2).max(64, "Field may only contain 100 characters"),
		state: yup.string().max(64, "Field may only contain 64 characters"),
		country: yup.string().max(100, "Field may only contain 100 characters"),
		embURL: yup.string().url().max(40, "Field may only contain 40 characters"),
		description: yup.string().max(1000, "Field may only contain 1000 characters"),
		embInterestFlyEmbraer: yup.string().max(1000, "Field may only contain 1000 characters"),
		embStatus: yup.string().max(50, "Field may only contain 50 characters"),
	})

	type GeneralInformation = yup.InferType<typeof generalInformationSchema>

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<GeneralInformation>({ resolver: yupResolver(generalInformationSchema) })

	const response = (data: GeneralInformation) => console.log(data)

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
			<TextField id="companyName" error={errors.companyName?.message} {...register("companyName")}>
				Company Name:
			</TextField>
			<TextField
				id="embAddressNickname"
				error={errors.embAddressNickname?.message}
				{...register("embAddressNickname")}
			>
				Address Nickname:
			</TextField>
			<TextField id="address" error={errors.address?.message} {...register("address")}>
				Address:
			</TextField>
			<TextField id="postalCode" error={errors.postalCode?.message} {...register("postalCode")}>
				Postal code:
			</TextField>
			<TextField id="city" error={errors.city?.message} {...register("city")}>
				City:
			</TextField>
			<TextField id="state" error={errors.state?.message} {...register("state")}>
				State/Province:
			</TextField>
			<CountriesSelect id="country" label="Country:" error={errors.country?.message} {...register("country")} />
			<TextField id="embURL" error={errors.embURL?.message} {...register("embURL")}>
				URL:
			</TextField>
			<TextField id="description" error={errors.description?.message} type="area" {...register("description")}>
				Description:
			</TextField>
			<TextField
				id="embInterestFlyEmbraer"
				error={errors.embInterestFlyEmbraer?.message}
				type="area"
				{...register("embInterestFlyEmbraer")}
			>
				Interests in FlyEmbraer:
			</TextField>
			<SelectCompanyStatus
				id="embStatus"
				label="Company Status:"
				error={errors.embStatus?.message}
				{...register("embStatus")}
			/>
			<Button type="submit">SUBMIT</Button>
		</Flex>
	)
}

export default GeneralInformation
