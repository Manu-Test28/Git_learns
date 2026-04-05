module.exports = {
  default: {
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    format: [
      '@cucumber/pretty-formatter',
      'allure-cucumberjs/reporter'          // ← ADD THIS
    ],
    formatOptions: {
      resultsDir: 'allure-results'           // ← ADD THIS
    },
    paths: ['features/**/*.feature'],
    parallel: 1,
    publishQuiet: true,
    requireModule: ['ts-node/register'],
  },
};
