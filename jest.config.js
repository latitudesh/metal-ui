module.exports = {
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js"
  },
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.js',
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
