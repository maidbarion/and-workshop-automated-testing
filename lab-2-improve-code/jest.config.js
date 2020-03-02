module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**'
    ],
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            // global thresholds
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    moduleDirectories: [
        'node_modules',
        // add the directory with the test-utils.js file, for example:
        'utils', // a utility folder
        __dirname // the root directory
    ],
    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'json', 'jsx'],
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    // Indicates whether each individual test should be reported during the run
    verbose: false
};
