#!/bin/bash

# Function to generate unit test files
generate_unit_tests() {
    for file in $1/*; do
        if [[ -d $file ]]; then
            # If the directory is "__test__", generate tests in it
            if [[ $(basename "$file") == "__test__" ]]; then
                generate_unit_tests_in_test_dir "$file"
            else
                # If the directory is not "__test__", recursively generate tests
                generate_unit_tests "$file"
            fi
        elif [[ $file == *".tsx" ]]; then
            # If the file is a TypeScript file, generate the corresponding unit test file
            test_file="${file%.*}.test.tsx"
            echo "Generating unit test: $test_file"
            
            # Add necessary imports and typings to the test file
            echo "import { render } from 'next-test-utils';" >> "$test_file"
            echo "import $({file%.*}) from '${file}';" >> "$test_file"
            
            # Add a simple test case
            echo "describe('${file}', () => {" >> "$test_file"
            echo "  it('renders without crashing', () => {" >> "$test_file"
            echo "    render(<${file%.*} />);" >> "$test_file"
            echo "  });" >> "$test_file"
            echo "});" >> "$test_file"
        fi
    done
}

# Function to generate unit test files within "__test__" directories
generate_unit_tests_in_test_dir() {
    for file in $1/*; do
        if [[ $file == *".tsx" ]]; then
            # If the file is a TypeScript file, generate the corresponding unit test file
            test_file="__test__/${file%.*}.test.tsx"
            echo "Generating unit test: $test_file"
            
            # Add necessary imports and typings to the test file
            echo "import { render } from 'next-test-utils';" >> "$test_file"
            echo "import $({file%.*}) from '${file}';" >> "$test_file"
            
            # Add a simple test case
            echo "describe('${file}', () => {" >> "$test_file"
            echo "  it('renders without crashing', () => {" >> "$test_file"
            echo "    render(<${file%.*} />);" >> "$test_file"
            echo "  });" >> "$test_file"
            echo "});" >> "$test_file"
        fi
    done
}

# Set the root directory where the tests will be generated
root_directory="./src/components"

# Call the function to generate unit tests for each directory
generate_unit_tests "$root_directory"

