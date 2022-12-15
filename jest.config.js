/** @type {import('jest').Config} */
const config = {
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
};

module.exports = config;
