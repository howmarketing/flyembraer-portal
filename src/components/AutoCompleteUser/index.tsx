/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { getUserNames } from "api/user/getUserName"
import AutoComplete from "components/AutoComplete"
import { GroupBase, OptionsOrGroups } from "react-select"

export type OptionType = {
	value?: string
	label?: string
}

type AutoCompleteUserProps = {
	onChangeValue?: (value: OptionType) => void
}

const AutoCompleteUser = ({ onChangeValue }: AutoCompleteUserProps) => {
	const loadOptionsUsers = async (
		inputValue: string,
		callback: (options: OptionsOrGroups<OptionType, GroupBase<OptionType>>) => void
	): Promise<OptionsOrGroups<OptionType, GroupBase<OptionType>>> => {
		try {
			if (!inputValue) callback([])

			const users = await getUserNames({ name: inputValue })
			const options = users.map((option) => ({ value: option.cn, label: option.displayName }))
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
			loadOptions={loadOptionsUsers}
			placeholder="Search users"
			cacheOptions
			loadingMessage="Loading..."
			noOptionsMessage="No users found"
			onChange={onChangeValue}
			isClearable
		/>
	)
}
export default AutoCompleteUser
