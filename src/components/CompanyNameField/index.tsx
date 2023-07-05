import { useRouter } from "next/router"

import { ChangeEvent, useEffect, useState } from "react"
// import { useContext } from "react"

import { useGetCompanyName } from "api/company/getCompanyName"

import Button from "components/Button"
import { Flex } from "components/Flex"

// import { RegisterUserContext } from "contexts/RegisterUserContext"

import { useCurrentStepsStore } from "stores/steps"

import type { CompanyExistsDTO, Companies } from "types/CompanyExistsDTO"

import { keyframes, styled } from "../../../stitches.config"

type CompanyNameFieldProps = {
	label: string
}

export const CompanyNameField = ({ label }: CompanyNameFieldProps) => {
	const router = useRouter()

	// const { setData, data } = useContext(RegisterUserContext)

	const setStep = useCurrentStepsStore((state) => state.setStep)

	const [companyName, setCompanyName] = useState("")
	const [suggestedCompanies, setSuggestedCompanies] = useState<CompanyExistsDTO>()
	const [showSuggestedCompanies, setShowSuggestedCompanies] = useState(false)
	const [canHideSuggestionsAfterSelectedCompany, setCanHideSuggestionsAfterSelectedCompany] = useState(false)

	useGetCompanyName(companyName, {
		onSuccess(data) {
			setSuggestedCompanies(data)
		},
		onError() {
			setSuggestedCompanies({})
		},
		retry: false,
	})

	function handleChangeCompanyName(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target
		setCompanyName(value)
	}

	function handleRegisterNewCompany() {
		router.push("/register/company")
		setStep(2)
	}

	function handleSelectCompany(company: Companies) {
		setCompanyName(company?.displayName ?? "")
		setShowSuggestedCompanies(false)
		setCanHideSuggestionsAfterSelectedCompany(true)
		// setData({ ...data, companyData: company })
	}

	useEffect(() => {
		if (companyName.length > 0 && canHideSuggestionsAfterSelectedCompany === false) {
			setShowSuggestedCompanies(true)
			return
		}
		setShowSuggestedCompanies(false)
	}, [companyName, canHideSuggestionsAfterSelectedCompany])

	return (
		<Wrapper>
			<Label htmlFor={label}>{label}</Label>
			<Input
				id={label}
				type="text"
				value={companyName}
				onInputCapture={() => setCanHideSuggestionsAfterSelectedCompany(false)}
				onChange={(event) => handleChangeCompanyName(event)}
				expanded={showSuggestedCompanies}
				autoFocus
			/>
			{showSuggestedCompanies && (
				<SuggestedCompanies tabIndex={0} data-state="open">
					<StyledList>
						{suggestedCompanies?.companies && suggestedCompanies?.companies?.length > 0 ? (
							suggestedCompanies?.companies?.map((company) => (
								<ListItems key={company.displayName}>
									<StyledSuggestedCompanies onClick={() => handleSelectCompany(company)}>
										{company.displayName}
									</StyledSuggestedCompanies>
								</ListItems>
							))
						) : (
							<>
								<span style={{ padding: "8px", display: "inline-block" }}>No companies found</span>
							</>
						)}
					</StyledList>
					{!suggestedCompanies?.companyExists && (
						<Flex css={{ p: "8px" }}>
							<Button onClick={handleRegisterNewCompany} variant="tertiary">
								Register a new company
							</Button>
						</Flex>
					)}
				</SuggestedCompanies>
			)}
		</Wrapper>
	)
}

const slideDownAndFade = keyframes({
	"0%": { transform: "translateY(-30px)" },
	"100%": { transform: "translateY(0)" },
})

const StyledSuggestedCompanies = styled("button", {
	all: "unset",
	appearance: "none",
	display: "inline-block",
	width: "100%",
	padding: "8px",
	cursor: "pointer",

	"&:focus-visible": {
		boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 1)",
	},
})

const SuggestedCompanies = styled("div", {
	width: "100%",
	height: "fit-content",
	maxHeight: "270px",

	position: "absolute",
	top: "53px", //Input + label height + 1

	background: "$white",

	borderRadius: "$2",
	btr: "unset",

	border: "1px solid $gray100",
	borderTop: "1px solid transparent",

	zIndex: 1,
	overflowY: "auto",

	"@media (prefers-reduced-motion: no-preference)": {
		animationDuration: "150ms",
		animationTimingFunction: "ease-in-out",
		willChange: "transform",
		'&[data-state="open"]': { animationName: slideDownAndFade },
	},

	"&:focus-visible": {
		boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",
	},
})

const Wrapper = styled("div", {
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "$4",
	position: "relative",
})

const Label = styled("label", {
	fontSize: "$sm",
	lineHeight: "$1",
	fontWeight: "$thin",
	color: "$black200",
})

const Input = styled("input", {
	width: "100%",
	height: "2.0625rem",

	display: "inline-block",
	px: "$16",

	color: "$gray200",
	background: "$white",
	borderRadius: "$2",
	border: "1px solid $gray100",
	boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",

	fontSize: "$sm",

	zIndex: "1",

	variants: {
		expanded: {
			true: {
				bbr: "unset",
				boxShadow: "unset",
				border: "1px solid $gray100",
				borderBottom: "1px solid transparent",
			},
		},
	},
})

const StyledList = styled("ul", {
	overflowX: "hidden",
})

const ListItems = styled("li", {
	paddingRight: "16px",
	borderTop: "1px solid $gray100",

	"&:last-child": {
		borderBottom: "1px solid $gray100",
	},
})
