# to Jest not recognizing ECMAScript Modules (ESM) syntax.

## To fix the error and enable support for ECMAScript Modules, you can follow these steps:

### Update the Jest configuration in the jest.config.ts file as follows:

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
````

### Install the necessary dependencies. In the root folder of your project, run the following command:

````bash

npm install --save-dev babel-jest @babel/core @babel/preset-env
````

### Create a .babelrc file in the root folder of your project with the following content:

````json

{
  "presets": ["@babel/preset-env"]
}
````

### Update the tsconfig.json file as follows:

````json

{
  "compilerOptions": {
    "target": "es2017", // Update the target to es2017 or higher
    // ...
  },
  // ...
}
````

### Run your tests again using the npm test command, and the error related to ECMAScript Modules should be resolved.

- Here's a bash script that automates these steps for you:


````bash

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

## Step 2: Install dependencies
echo "Installing dependencies..."
npm install --save-dev babel-jest @babel/core @babel/preset-env

# Step 3: Create .babelrc file
echo "Creating .babelrc file..."
echo '{
  "presets": ["@babel/preset-env"]
}' > .babelrc

# Step 4: Update tsconfig.json
echo "Updating tsconfig.json..."
sed -i 's/"target": "es5"/"target": "es2017"/g' tsconfig.json

echo "Setup complete!"
````

- Save the script as fix-jest-error.sh, make it executable (chmod +x fix-jest-error.sh), and run it in the root folder of your project using ./fix-jest-error.sh. It will perform the necessary steps to fix the error for you.

- Please note that the script assumes you are using a Unix-based system (e.g., Linux or macOS) with Bash installed. If you're using a different operating system or shell, you may need to make adjustments to the script accordingly.

- After running the script, you can try running your tests again, and the error related to ECMAScript Modules should be resolved.
