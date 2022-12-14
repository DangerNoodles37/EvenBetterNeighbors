import regeneratorRuntime from 'regenerator-runtime';

module.exports = () => {
  global.testServer = require('./server/server.js');
};

// old setupfilesafter env:
// "@testing-library/jest-dom/extend-expect"

// old webpack config files:
// "globalSetup": "./jest-setup.js",
// "globalTeardown": "./jest-teardown.js",
