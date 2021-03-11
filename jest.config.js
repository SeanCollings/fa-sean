module.exports = {
  testTimeout: 10000,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/config/**',
  ],
  coveragePathIgnorePatterns: ['jest.config.js'],
  testEnvironment: 'jsdom',
};
