module.exports = {
  default: {
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    requireModule: ['ts-node/register'],
    paths: ['features/**/*.feature'],
    format: ['@shelex/cucumberjs-allure2-reporter'],
    formatOptions: {
      outputFolder: 'allure-results',
      clean: true
    },
    parallel: 1,
    publishQuiet: true
  },
};
