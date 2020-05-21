module.exports = {
  preset: 'react-native',
  clearMocks: true,
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$':
      '<rootDir>/node_modules/react-native/Libraries/Image/RelativeImageStub',
  },
  testPathIgnorePatterns: ['node_modules', '-test.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*))',
  ],
  globals: {
    window: {},
  },
  setupFiles: ['./src/utils/testUtils/mocks.js'],
};
