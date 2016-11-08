// Karma configuration
// Generated on Tue Nov 08 2016 12:11:38 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: './www/lib/jquery/jquery.js', included: true},
      {pattern: './www/lib/angular/js/angular.js', included: true},
      {pattern: './node_modules/angular-mocks/angular-mocks.js', included: true},
      {pattern: './www/lib/angular/js/angular-resource.js', included: true},
      {pattern: './www/lib/angular/js/angular-animate.js', included: true},
      {pattern: 'node_modules/angular-ui-router/release/angular-ui-router.js', included: true},
      {pattern: './www/lib/angular/js/angular-ui-bootstrap.js', included: true},
      {pattern: './www/js/app.js', included: true},
      {pattern: './www/js/services.js', included: true},
      {pattern: './www/js/nav-controller.js', included: true},
      {pattern: './www/js/controllers.js', included: true},
      {pattern: './www/js/controllers.spec.js', included: false},
      'test-main.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
