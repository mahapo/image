module.exports = {
  preset: '@nuxt/test-utils',
  moduleNameMapper: {
    '~image/(.*)': '<rootDir>/src/runtime/$1',
    '^.+\\.css$': '<rootDir>/test/fixture/utils/CSSStub.js'
  }
}
