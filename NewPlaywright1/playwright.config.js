const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['list'],
    ['junit', { outputFile: 'results/test-results.xml' }]
  ],
});
