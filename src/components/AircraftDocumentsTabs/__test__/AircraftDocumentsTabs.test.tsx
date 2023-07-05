import { AircraftInformation as ComponentA, AirportManuals as ComponentB } from "../index"

describe("Index file", () => {
	test("exports all components", () => {
		expect(ComponentA).toBeDefined()
		expect(ComponentB).toBeDefined()
	})
})
