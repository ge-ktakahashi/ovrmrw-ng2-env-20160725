'use strict';
// Karma configuration
// Generated on Fri Mar 25 2016 00:06:13 GMT+0900 (JST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'], // jasmine / mocha


    // list of files / patterns to load in the browser
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',

      './.dest-test-ng2/webpack.bundle.spec.vendor.js',
      './.dest-test-ng2/webpack.bundle.spec.main.js',
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './.dest-test-ng2/webpack.bundle.spec.vendor.js': ['sourcemap'],
      './.dest-test-ng2/webpack.bundle.spec.main.js': ['sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


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
    browsers: ['PhantomJS'], // PhantomJS / Firefox / Chrome


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    mochaReporter: {
      // colors: {
      //   success: 'white'
      // },
      // output: 'autowatch',
      divider: '/'
    },


    // restartOnFileChange: true,
  })
}