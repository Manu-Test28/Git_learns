module.exports = {
  default: {
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    format: ['@shelex/cucumberjs-allure2-reporter'],
    paths: ['features/**/*.feature'],
    parallel: 1,
    publishQuiet: true,
    requireModule: ['ts-node/register'],
  },
};
