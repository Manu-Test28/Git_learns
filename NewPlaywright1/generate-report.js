const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'playwright-report/report.json',
  output: 'playwright-report/report.html',
  reportSuiteAsScenarios: true,
  launchReport: false
};

reporter.generate(options);
