import { styled } from "../../../stitches.config"

type StepperProps = {
	stepsNumber: number
	stepActive: number
} & React.ComponentProps<typeof Wrapper>

const Stepper = ({ stepsNumber, stepActive, ...props }: StepperProps) => {
	const STEPS = Array.from({ length: stepsNumber }, (_, i) => i + 1)
	return (
		<Wrapper {...props}>
			{STEPS.map((index) => (
				<StepWrapper
					key={index}
					css={{
						"--step-color": stepActive >= index ? "#005AAF" : "#D9D9D9",
					}}
				>
					{index > 1 && <StepLine />}
					<Step />
				</StepWrapper>
			))}
		</Wrapper>
	)
}

const Wrapper = styled("div", {
	width: "100%",
	height: "auto",
	display: "flex",
	justifyContent: "space-between",
})

const StepWrapper = styled("div", {
	width: "100%",
	display: "flex",
	alignItems: "center",

	"&:first-of-type": {
		flexShrink: 2,
		width: "min-content",
	},
})

const StepLine = styled("div", {
	width: "100%",
	height: "1px",
	backgroundColor: "var(--step-color)",

	"@largeMobile": {
		height: "2px",
	},
})

const Step = styled("div", {
	width: "14px",
	height: "14px",
	borderRadius: "14px",
	backgroundColor: "var(--step-color)",
	flexShrink: "0",

	"@largeMobile": {
		width: "24px",
		height: "24px",
		borderRadius: "24px",
	},
})

export default Stepper
