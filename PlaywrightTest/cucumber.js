module.exports = {
  default: {
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    format: ['@cucumber/pretty-formatter'],
    paths: ['features/**/*.feature'],
    parallel: 1,
    publishQuiet: true,
    requireModule: ['ts-node/register'],
  },
};
