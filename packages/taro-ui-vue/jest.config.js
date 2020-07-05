module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'tsx', 'ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  coverageDirectory: '<rootDir>/tests/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{vue}', '!**/node_modules/**'],
  globals: {
    'ts-jest': {
      tsConfig: './jest.tsconfig.json',
    },
  },
}
