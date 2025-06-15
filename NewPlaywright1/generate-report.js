const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'playwright-report', // where report.json is saved
  reportPath: 'playwright-report',
  metadata:{
    browser: {
        name: 'chrome',
        version: '114'
    },
    device: 'Local test machine',
    platform: {
        name: 'Windows',
        version: '10'
    }
  },
  customData: {
    title: 'Run info',
    data: [
        {label: 'Project', value: 'Playwright + Cucumber'},
        {label: 'Release', value: '1.0.0'},
        {label: 'Execution Time', value: new Date().toLocaleString()},
    ]
  }
});
