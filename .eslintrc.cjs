module.exports = {
  "env": {
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "plugins": [
    "import"
  ],
  "rules": {
    "import/extensions": ["error", "always", { "js": "never", "jsx": "never" }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
  }
};
