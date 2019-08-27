module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/jestSetup',
    '<rootDir>/__tests__/__mocks__/'
  ],
  moduleDirectories: [
    'src',
    'node_modules'
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "js",
    "tsx",
    "jsx"
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__tests__/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__tests__/__mocks__/fileMock.js"
  }
}
