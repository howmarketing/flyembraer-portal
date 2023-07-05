import create from "zustand"

type TotalStepsStore = {
	totalSteps: number
	setTotalSteps: (step: number) => void
}

export const useTotalStepsStore = create<TotalStepsStore>((set) => ({
	totalSteps: 3,
	setTotalSteps: (step: number) =>
		set(() => ({
			totalSteps: step,
		})),
}))

type CurrentStepsStore = {
	currentStep: number
	setStep: (step: number) => void
	nextStep: () => void
	previousStep: () => void
}

export const useCurrentStepsStore = create<CurrentStepsStore>((set) => ({
	currentStep: 1,
	setStep: (step: number) =>
		set(() => ({
			currentStep: step,
		})),
	nextStep: () =>
		set((state) => ({
			currentStep: state.currentStep + 1,
		})),
	previousStep: () =>
		set((state) => ({
			currentStep: state.currentStep - 1,
		})),
}))
