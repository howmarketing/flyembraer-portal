/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AsyncSelect from "react-select/async"

import { GroupBase, OptionsOrGroups } from "react-select"
import * as S from "./styles"

export type OptionType = {
	value?: string
	label?: string
}

type AutoCompleteProps = {
	placeholder?: string
	loadOptions: (
		inputValue: string,
		callback: (options: OptionsOrGroups<OptionType, GroupBase<OptionType>>) => void
	) => Promise<OptionsOrGroups<OptionType, GroupBase<OptionType>>>
	noOptionsMessage?: string
	loadingMessage?: string
	cacheOptions?: boolean
	defaultOptions?: boolean
	isClearable?: boolean
	onChange?: (value: OptionType) => void
} & Omit<AsyncSelect, "loadOptions">

const AutoComplete = ({
	loadOptions,
	cacheOptions = true,
	defaultOptions,
	loadingMessage,
	noOptionsMessage,
	placeholder,
	isClearable,
	onChange,
	...rest
}: AutoCompleteProps) => {
	return (
		<S.Wrapper>
			<AsyncSelect
				{...rest}
				placeholder={placeholder}
				loadOptions={loadOptions}
				noOptionsMessage={() => noOptionsMessage}
				loadingMessage={() => loadingMessage}
				cacheOptions={cacheOptions}
				defaultOptions={defaultOptions}
				isClearable={isClearable}
				onChange={(value) => {
					if (onChange) onChange(value as OptionType)
				}}
			/>
		</S.Wrapper>
	)
}
export default AutoComplete
