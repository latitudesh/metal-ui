module.exports = {
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js"
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
