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

# Total compliance configuration

## Old compliance

### #File: jest.config.ts

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

-----

### #File: tsconfig.json

````JSON
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": "./src",
    "downlevelIteration": true
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "next.config.js",
    "jest.setup.js",
    "jest.config.ts"
  ],
  "exclude": ["node_modules"]
}
````

-----

### #File: next.config.js

````js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
````

-----

### #File: jest.setup.js

````js
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect"
````

-----

### #File: .eslintrc.json

````JSON
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@next/next/no-img-element": "off",
    "react/jsx-key": "off"
  }
}
````

-----

### #File: .prettierrc

````JSON
{
  "trailingComma": "es5",
  "semi": false,
  "singleQuote": false,
  "endOfLine": "auto"
}
````
# new Compliance configuratio-

### File: jest.config.ts

````ts
import type { Config } from "@jest/types";
import createNextJestConfig from "next/jest";

const nextConfig = {
  // Any custom Next.js configuration options can be provided here
  dir: "./",
};

// Add any custom config to be passed to Jest
const jestConfig: Config.InitialOptions = {
  ...createNextJestConfig(nextConfig),
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
  // Add the transform option to handle ECMAScript Modules
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
};

export default jestConfig;
`````

----

### File: tsconfig.json

````JSON
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": "./src",
    "downlevelIteration": true
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "next.config.js",
    "jest.setup.js",
    "jest.config.ts"
  ],
  "exclude": ["node_modules"]
}
`````

----

### File: next.config.js

````js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
`````

----

### File: jest.setup.js

````js
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect"
`````

----

### File: .eslintrc.json

````JSON
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@next/next/no-img-element": "off",
    "react/jsx-key": "off"
  }
}
`````

----

### File: .prettierrc

````JSON
{
  "trailingComma": "es5",
  "semi": false,
  "singleQuote": false,
  "endOfLine": "auto"
}
`````

---
