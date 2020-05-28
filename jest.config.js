module.exports = {
  'projects': [
    '<rootDir>/app/soapbox',
  ],
  'testPathIgnorePatterns': [
    '<rootDir>/node_modules/',
    '<rootDir>/vendor/',
    '<rootDir>/config/',
    '<rootDir>/log/',
    '<rootDir>/static/',
    '<rootDir>/tmp/',
    '<rootDir>/webpack/',

    // Temporarily disable these tests
    // https://gitlab.com/soapbox-pub/soapbox-fe/-/issues/34
    '<rootDir>/app/soapbox/components/__tests__/avatar-test.js',
    '<rootDir>/app/soapbox/components/__tests__/avatar_overlay-test.js',
  ],
  'setupFiles': [
    'raf/polyfill',
  ],
  'setupFilesAfterEnv': [
    '<rootDir>/app/soapbox/test_setup.js',
  ],
  'collectCoverageFrom': [
    'app/soapbox/**/*.js',
    '!app/soapbox/features/emoji/emoji_compressed.js',
    '!app/soapbox/locales/locale-data/*.js',
    '!app/soapbox/service_worker/entry.js',
    '!app/soapbox/test_setup.js',
  ],
  'coverageDirectory': '<rootDir>/coverage',
  'moduleDirectories': [
    '<rootDir>/node_modules',
    '<rootDir>/app',
  ],
};
