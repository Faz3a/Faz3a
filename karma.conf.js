// Karma configuration
// Generated on Sun Aug 07 2016 19:20:40 GMT+0300 (Jordan Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['requirejs','chai','mocha'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'test/*.js', included: true}
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
    'karma-requirejs',
    'karma-chai',
    'karma-mocha',
    'karma-coverage',
    'karma-phantomjs-launcher'
],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots',
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
