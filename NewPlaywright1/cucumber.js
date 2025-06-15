module.exports = {
  default: {
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    requireModule: ['ts-node/register'],
    paths: ['features/**/*.feature'],
    parallel: 1,
    publishQuiet: true,
    format: [
      './node_modules/@shelex/cucumberjs-allure2-reporter'
    ],
    formatOptions: {
      outputFolder: 'allure-results',
      clean: true
    }
  },
};
