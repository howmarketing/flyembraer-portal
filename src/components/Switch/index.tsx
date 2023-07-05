import { useId } from "react"
import * as S from "./styles"

type SwitchProps = {
	label?: string
	onCheckedChange?: (checked: boolean) => void
	defaultChecked?: boolean
	name?: string
	disabled?: boolean
}

const Switch = ({ name, disabled, label, onCheckedChange, defaultChecked }: SwitchProps) => {
	const id = useId()

	const handleChange = (checked: boolean) => {
		onCheckedChange?.(checked)
	}

	return (
		<S.Wrapper>
			<S.SwitchRoot
				name={name}
				disabled={disabled}
				id={id}
				onCheckedChange={handleChange}
				checked={defaultChecked}
			>
				<S.SwitchThumb />
			</S.SwitchRoot>
			{label && <S.Label htmlFor={id}>{label}</S.Label>}
		</S.Wrapper>
	)
}

export default Switch
