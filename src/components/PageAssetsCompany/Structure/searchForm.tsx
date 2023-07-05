import React from "react"
import FormField from "./FormField"

const MyForm: React.FC = () => (
	<div>
		<FormField label="Address" type="text" />
		<FormField label="Email" type="email" />
		<FormField label="Phone Number" type="tel" />
		<FormField label="Date of Birth" type="date" />
		<FormField label="Country" type="select" options={["USA", "Canada", "UK"]} />
		{/* ... and so on */}
	</div>
)

export default MyForm
