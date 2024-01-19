/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  // https://jestjs.io/docs/en/configuration#testmatch-array-string
  testMatch: ["**/__tests__/**/*.test.js"],
  collectCoverage: false,
  testTimeout: 5_000,
  coverageReporters: ["json-summary", "text-summary", "lcov", "json"],
};
