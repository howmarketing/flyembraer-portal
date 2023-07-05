export function shuffleArray(array: string[]) {
	// Loop through the array in reverse order, starting from the last element
	for (let i = array.length - 1; i > 0; i--) {
		// Generate a random index j between 0 and i (inclusive)
		const j = Math.floor(Math.random() * (i + 1))
		// Swap the current element at index i with the random element at index j
		;[array[i], array[j]] = [array[j], array[i]]
	}
	// Return the shuffled array
	return array
}
