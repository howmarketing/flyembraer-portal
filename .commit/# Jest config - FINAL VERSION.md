# Jest config - FINAL VERSION

````ts
import type { Config } from "@jest/types"
import createNextJestConfig from "next/jest"

const nextConfig = {
  // Any custom Next.js configuration options can be provided here
  dir: "./"
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
  collectCoverageFrom: ["src/components/**/*.tsx", "!src/components/**/stories.tsx", "!src/components/Icons/*"]
}

export default jestConfig

````

- [X] imports the necessary types from @jest/types and the createNextJestConfig function from next/jest. It defines a nextConfig object that can hold custom Next.js configuration options if needed

- [X] The jestConfig object merges the result of createNextJestConfig(nextConfig) with additional Jest configuration options. It includes the setupFilesAfterEnv property, which specifies the setup files to be executed before each test. In this case, it references a jest.setup.js file located in the root directory

- [X] The moduleDirectories property is set to include both the "node_modules" directory and the "<RootDir>" placeholder, which is typically resolved to the root directory of your project. This allows Jest to resolve module imports correctly

- [X] The testEnvironment property is set to "jest-environment-jsdom" to use the JSDOM environment for testing

- [X] The collectCoverage property is set to true to enable code coverage collection during tests. The collectCoverageFrom property specifies the files to include in the coverage report, excluding any files matching the patterns specified

- [X] Overall, this configuration should work well for your Next.js project using TypeScript and Stitches, and it includes the necessary setup for Jest to work with Next.js

# First version of `jest.config.ts`[🔗](jest.config.ts.md:41:5)

````ts
import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  testMatch: ["**/__tests__/**/*.(js|jsx|ts|tsx)", "**/?(*.)+(spec|test).(js|jsx|ts|tsx)"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  }
}

export default config
````

# Jest TypeScript compliance with the old config for `jest.config` using ".js" (**_`jest.config.js`_**)[🔗](jest.config.ts.md:65:5)

````ts
import type { Config } from "@jest/types"

const createJestConfig = require("next/jest")

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const nextConfig = {
  dir: "./",
}

// Add any custom config to be passed to Jest
const customConfig: Config.InitialOptions = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias" to work
  moduleDirectories: ["node_modules", "<RootDir>"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.tsx",
    "!src/components/**/stories.tsx",
    "!src/components/Icons/*",
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customConfig, nextConfig)
````

> # The **_`jest.config.ts`_** starter point configuration. [🔗](jest.config.ts.md:96:5)

````ts
import type { Config } from "@jest/types"
import createNextJestConfig from "next/jest"

const nextConfig = {
  // Any custom Next.js configuration options can be provided here
}

const jestConfig: Config.InitialOptions = {
  ...createNextJestConfig(nextConfig),
  // Add any custom Jest configuration options here
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
  // Additional options as needed
}

export default jestConfig

````
