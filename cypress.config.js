const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  e2e: {
    baseUrl: 'https://automationexercise.com',
    redirectionLimit: 100,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    blockHosts: [
      '*googlesyndication.com',
      '*google-analytics.com',
      '*googletagmanager.com',
      '*googletagservices.com',
      '*doubleclick.net',
      '*adservice.google.com',
      '*facebook.net'
    ],
    testIsolation: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
    },
  },
});
