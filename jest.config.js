module.exports = {
    verbose: true,
    watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
}
