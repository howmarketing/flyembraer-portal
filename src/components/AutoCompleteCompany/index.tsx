/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { getCompanyName } from "api/company/getCompanyName"
import AutoComplete from "components/AutoComplete"
import { GroupBase, OptionsOrGroups } from "react-select"

export type OptionType = {
	value?: string
	label?: string
}

type AutoCompleteCompanyProps = {
	onChangeValue?: (value: OptionType) => void
}

const AutoCompleteCompany = ({ onChangeValue }: AutoCompleteCompanyProps) => {
	const loadOptions = async (
		inputValue: string,
		callback: (options: OptionsOrGroups<OptionType, GroupBase<OptionType>>) => void
	): Promise<OptionsOrGroups<OptionType, GroupBase<OptionType>>> => {
		try {
			if (!inputValue) callback([])

			const { companies } = await getCompanyName(inputValue)
			const options = companies?.map((option) => ({ value: option.cn, label: option.displayName })) || []
			callback(options)

			return options
		} catch (error) {
			console.error("Erro ao buscar as opções", error)
			callback([])
			return []
		}
	}

	return (
		<AutoComplete
			loadOptions={loadOptions}
			placeholder="Search companies"
			cacheOptions
			loadingMessage="Loading..."
			noOptionsMessage="No companies found"
			onChange={onChangeValue}
			isClearable
		/>
	)
}
export default AutoCompleteCompany
