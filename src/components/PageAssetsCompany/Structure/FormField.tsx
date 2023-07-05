import React from "react"

interface FormFieldProps {
	label: string
	type: "text" | "email" | "tel" | "date" | "select"
	options?: string[]
}

const FormField: React.FC<FormFieldProps> = ({ label, type, options }) => {
	const renderInputField = () => {
		switch (type) {
			case "text":
			case "email":
			case "tel":
			case "date":
				return <input type={type} />
			case "select":
				if (options) {
					return (
						<select>
							{options.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					)
				}
				return null
			default:
				return null
		}
	}

	return (
		<div>
			<label>{label}</label>
			{renderInputField()}
		</div>
	)
}

export default FormField
