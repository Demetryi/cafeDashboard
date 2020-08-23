module.exports = {
  moduleDirectories: ['node_modules'],
  rootDir: '.',
  collectCoverageFrom: ['./**/*.(js|jsx|ts|tsx)'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.vscode',
    '/.eslintrc.js',
    '/.prettierrc.js',
    '/jest.config.js',
    '/coverage/',
    '/.next/',
    '/src/pages/_app.tsx',
    '/src/pages/_document.tsx',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/.next/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'css'],
  transform: {
    '^.+\\.(j|t)s(x)?$': 'babel-jest',
  },
  testMatch: [
    './**/?(*.)(spec|test).{js,ts,tsx,mjs}',
    './**/__tests__/**/*.{js,ts,tsx,mjs)}',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
