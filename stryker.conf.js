module.exports = function(config) {
  config.set({
    mutator: {
      name: "javascript",
      // excludedMutations: ['ArrayLiteral', 'BooleanLiteral', 'ObjectLiteral', 'StringLiteral']
      excludedMutations: [],
    },
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mutate: ["src/**/*.js"],
  });
};
