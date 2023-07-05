import { useRef, useState } from "react"

import Button from "components/Button"
import { Flex } from "components/Flex"
import Text from "components/Text"
import TextField from "components/TextField"
import AutoCompleteCompany from "components/AutoCompleteCompany"

type SearchProps = {
	moduleName: string
	onChangeTerm: (term: string) => void
}

export const Search = ({ moduleName, onChangeTerm }: SearchProps) => {
	const ref = useRef<HTMLInputElement>(null)
	const [searchTerm, setSearchTerm] = useState("")
	function test1(value: any) {
		setSearchTerm(value)
	}
	function handleChangeTerm() {
		const term = ref.current?.value ?? ""
		onChangeTerm(searchTerm)
	}
	function handleClearResults() {
		onChangeTerm("")
	}

	return (
		<div>
			<div>
				<Text
					css={{ fontSize: "20px", fontWeight: "500", marginBlock: "12px", height: "12px", display: "block" }}
				>
					SEARCH {moduleName}
				</Text>
			</div>
			<Flex
				css={{
					height: "0",
					width: "100%",
					border: "1px solid $brand-primary",
					marginBottom: "36px",
					maxWidth: "1500px",
				}}
			></Flex>
			<Flex css={{ marginBottom: "24px", gap: "16px" }}>
				{/* <TextField id="searchTerm" placeholder="Search for any column" ref={ref} /> */}
				<AutoCompleteCompany onChangeValue={test1} />
				<Button variant="tertiary" onClick={handleClearResults}>
					Clear Results
				</Button>
				<Button type="submit" onClick={handleChangeTerm}>
					Search &gt;
				</Button>
			</Flex>
		</div>
	)
}
