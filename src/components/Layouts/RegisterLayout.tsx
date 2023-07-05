import dynamic from "next/dynamic"

import React, { ReactElement } from "react"

import Text from "components/Text"

import { useCurrentStepsStore, useTotalStepsStore } from "stores/steps"

import { styled } from "../../../stitches.config"
import { SuccessScreen } from "forms/register/SuccessScreen"
import { RegisterUserContextProvider } from "contexts/RegisterUserContext"
import { AirplaneBackground } from "components/Background"
import { ArrowLeft } from "components/Icons/ArrowLeft"
import Link from "next/link"

const DynamicStepper = dynamic(() => import("components/Stepper"), {
	ssr: false,
})

type RegisterLayoutProps = {
	children: ReactElement
	title: string
}

export const RegisterLayout = ({ children, title }: RegisterLayoutProps) => {
	const steps = useTotalStepsStore((state) => state.totalSteps)
	const currentStep = useCurrentStepsStore((state) => state.currentStep)

	return (
		<RegisterUserContextProvider>
			<Wrapper>
				<AirplaneBackground />
				<ContentWrapper>
					<Content>
						{currentStep === 99 ? (
							<SuccessScreen />
						) : (
							<>
								<Text
									as="h1"
									size="lg"
									weight="thin"
									color="black"
									css={{
										textAlign: "center",
										"@largeMobile": {
											textAlign: "center",
											fontSize: "$xxl",
											lineHeight: "3rem",
											color: "$brand-secondary",
										},
									}}
								>
									{title}
								</Text>

								<DynamicStepper
									stepsNumber={steps}
									stepActive={currentStep}
									css={{ width: "75%", m: "auto" }}
								/>

								{children}
							</>
						)}
					</Content>
				</ContentWrapper>
			</Wrapper>

			<Link href={"/"}>
				<StyledBackButton>
					<ArrowLeft width={8} height={16} fill={"#005AAF"} />
				</StyledBackButton>
			</Link>
		</RegisterUserContextProvider>
	)
}

const Wrapper = styled("div", {
	width: "100%",
	height: "100%",
	position: "relative",
})

const ContentWrapper = styled("div", {
	width: "100%",
	height: "100%",
	py: "5rem",
	position: "relative",
})

const Content = styled("div", {
	maxWidth: "100%",
	width: "600px",
	height: "auto",
	p: "2rem",
	mx: "auto",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	backgroundColor: "$white",
	borderRadius: "0.5rem",
})

const StyledBackButton = styled("button", {
	position: "absolute",
	top: "1rem",
	left: "1.15rem",
	zIndex: "8",
	width: "40px",
	height: "40px",
	border: "none",
	borderRadius: "50%",
	backgroundColor: "#FFFFFF40",

	"&:hover": {
		backgroundColor: "#FFFFFF80",
	},
})
