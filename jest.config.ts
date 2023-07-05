import type { Config } from "@jest/types"
import createNextJestConfig from "next/jest"
const nextConfig = {
	// Any custom Next.js configuration options can be provided here
	dir: "./",
}
// Add any custom config to be passed to Jest
const jestConfig: Config.InitialOptions = {
	...createNextJestConfig(nextConfig),
	// Add more setup options before each test is run
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias" to work
	moduleDirectories: ["node_modules", "<RootDir>"],
	testEnvironment: "jest-environment-jsdom",
	collectCoverage: true,
	// collectCoverageFrom: ["src/components/**/*.tsx", "!src/components/**/stories.tsx", "!src/components/Icons/*"],
	collectCoverageFrom: ["src/components/Button/__test__/*.test.ts*"],
	// Add the transform option to handle ECMAScript Modules
	transform: { "^.+\\.tsx?$": "babel-jest" },
}

export default jestConfig

// import type { Config } from "@jest/types"

// const config: Config.InitialOptions = {
// 	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
// 	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// 	moduleNameMapper: {
// 		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
// 	},
// 	transform: {
// 		"^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
// 	},

// 	testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
// 	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
// 	moduleDirectories: ["node_modules", "<RootDir>"],
// 	testEnvironment: "jest-environment-jsdom",
// 	collectCoverage: true,
// 	collectCoverageFrom: [
// 		"src/components/**/*.tsx",
// 		"!src/components/**/stories.*",
// 		"!src/components/**/Icon*",
// 		"!src/components/Icons/*",
// 	],
// }

// export default config
