Package.describe({
  name: 'ox2:cordova-loader',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'DO NOT USE TESTING',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  // Core
  api.use([
    'ecmascript'
    ]);
  // 3rd party
  api.use([

    ]);
  // Files
  api.addFiles('lib/ox2-cordova-loader.js', C);
  // Exports
  // api.export('ox2CordovaLoader')

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ox2:cordova-loader');
  api.addFiles('tests/package-tests.js');
});
