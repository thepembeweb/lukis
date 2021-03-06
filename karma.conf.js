// Karma configuration
// Generated on Sat Sep 14 2013 08:23:07 GMT+0700 (WIT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],

    preprocessors: {
      '**/*.html': []
    },


    // list of files / patterns to load in the browser
    files: [
      // 'vendor/es5-shim/es5-shim.js',
      // 'vendor/es5-shim/es5-sham.js',
      'vendor/jquery/jquery.js',
      'vendor/jasmine-jquery/lib/jasmine-jquery.js',
      'vendor/jasmine.async/lib/jasmine.async.js',
      'vendor/jasmine-flight/lib/jasmine-flight.js',

      {pattern: 'tests/lib/jasmine/matchers/*.js', included: true},

      'tests/test-main.js',

      {pattern: 'vendor/flight/**/*.js', included: false},
      {pattern: 'vendor/mustache/**/*.js', included: false},
      {pattern: 'vendor/requirejs-text/**/*.js', included: false},
      {pattern: 'apps/libs/**/*.js', included: false},
      {pattern: 'apps/src/**/*.js', included: false},
      {pattern: 'apps/src/**/*.json', included: false},
      {pattern: 'apps/src/ui/**/*.html', included: false},
      {pattern: 'tests/**/*.js', included: false}
    ],


    // list of files to exclude
    exclude: [
      'apps/src/main.js',
      'apps/src/app.js',
      'apps/src/app.build.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
