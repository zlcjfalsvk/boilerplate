/* eslint-disable */
export default {
  displayName: 'services',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/services',
  moduleNameMapper: {
    '^@prisma/postgre(|/.*)$': '<rootDir>/../../prisma/postgre/client/$1',
  },
};
