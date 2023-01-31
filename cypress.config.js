const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.tiscoinsure.com/",
    excludeSpecPattern: "*.js",
    specPattern: "**/*.{feature,features}",
    // experimentalSourceRewriting: true,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
});
