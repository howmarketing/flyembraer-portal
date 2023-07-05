/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import DatePicker, { DateObject } from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker"

import CalendarIcon from "components/Icons/Calendar"
import * as S from "./styles"

type DateTimePickerProps = {
	onChangeValue?: (value: string) => void
	label?: string
	formatView?: string
	format?: string
	initialValue?: string
	error?: string
}

const DateTimePicker = ({
	onChangeValue,
	label,
	formatView = "DD/MM/YYYY HH:mm",
	format = "DD/MM/YYYY HH:mm",
	initialValue = "",
	error,
}: DateTimePickerProps) => {
	const [date, setDate] = useState<DateObject | string>(initialValue)

	const handleChange = (date: DateObject) => {
		const dateFormatted = date?.format(format) || ""
		setDate(date)

		onChangeValue?.(dateFormatted)
	}

	useEffect(() => {
		setDate(initialValue)
	}, [initialValue])

	return (
		<S.Wrapper>
			<S.Label>
				{label}
				{error && <S.Error>{error}</S.Error>}

				<S.WrapperInput>
					<DatePicker
						format={formatView}
						value={date}
						onChange={handleChange}
						plugins={[<TimePicker hideSeconds style={{ minWidth: "100px" }} />]}
					/>
					<CalendarIcon />
				</S.WrapperInput>
			</S.Label>
		</S.Wrapper>
	)
}

export default DateTimePicker
