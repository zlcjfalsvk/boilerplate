/* eslint-disable */
export default {
  displayName: 'service',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/service',
  moduleNameMapper: {
    '^@prisma/postgre(|/.*)$': '<rootDir>/../../prisma/postgre/client/$1',
    '^@wasm(|/.*)$': '<rootDir>/../src/wasm/$1',
  },
};