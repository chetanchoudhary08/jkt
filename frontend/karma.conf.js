module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    reporters: ['progress'],
    logLevel: config.LOG_INFO
  });
};
