#!/bin/bash

# Step 1: Update jest.config.ts
echo "Updating jest.config.ts..."
echo "import type { Config } from \"@jest/types\";
import createNextJestConfig from \"next/jest\";

const nextConfig = {
  // Any custom Next.js configuration options can be provided here
  dir: \"./\",
};

// Add any custom config to be passed to Jest
const jestConfig: Config.InitialOptions = {
  ...createNextJestConfig(nextConfig),
  // Add more setup options before each test is run
  setupFilesAfterEnv: [\"<rootDir>/jest.setup.js\"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias\" to work
  moduleDirectories: [\"node_modules\", \"<RootDir>\"],
  testEnvironment: \"jest-environment-jsdom\",
  collectCoverage: true,
  collectCoverageFrom: [
    \"src/components/**/*.tsx\",
    \"!src/components/**/stories.tsx\",
    \"!src/components/Icons/*\",
  ],
  // Add the transform option to handle ECMAScript Modules
  transform: {
    \"^.+\\\\.tsx?$\": \"babel-jest\",
  },
};

export default jestConfig;" > jest.config.ts

echo "Step 1: Clearing Jest cache..."
yarn jest --clearCache

echo "Step 2: Installing dependencies..."
yarn add --dev babel-jest @babel/core @babel/preset-env
# echo "Installing dependencies..."
# npm install --save-dev babel-jest @babel/core @babel/preset-env

# Step 3: Create .babelrc file
echo "Step 3: Creating .babelrc file..."
echo '{
  "presets": ["@babel/preset-env"]
}' > .babelrc

# Step 4: Update tsconfig.json
echo "Step 4: Updating tsconfig.json..."
sed -i 's/"target": "es5"/"target": "es2017"/g' tsconfig.json

echo "Setup complete!"
