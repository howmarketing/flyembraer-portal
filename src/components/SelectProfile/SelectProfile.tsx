import { useGetProfiles } from "api/profile/getAllProfiles"
import Select, { SelectOptionsProps, SelectProps } from "components/Select"
import { forwardRef } from "react"

type ProfileSelectProps = {
	onChangeValue?: (option: SelectOptionsProps) => void
} & SelectProps

export const ProfileSelect = forwardRef<HTMLSelectElement, ProfileSelectProps>((props, ref) => {
	const { data, isFetching, isError } = useGetProfiles()

	const dataInSelectFormat = data?.map((profile) => ({
		value: profile?.code ?? "",
		displayValue: profile?.displayName ?? "",
	}))

	const handleChange = (option: SelectOptionsProps) => {
		if (props.onChangeValue) {
			props.onChangeValue(option)
		}
	}

	return (
		<Select
			{...props}
			options={dataInSelectFormat}
			onChange={(e) => {
				props.onChange?.(e)

				const option = dataInSelectFormat?.find((option) => option.value === e.target.value)

				if (option) {
					handleChange(option)
				}
			}}
			disabled={isFetching || isError}
			ref={ref}
		/>
	)
})

ProfileSelect.displayName = "ProfileSelect"
