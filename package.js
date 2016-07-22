Package.describe({
  name: 'planefy:paypal-ipn-listener',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Simple PayPal IPN listener for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mbreuer23/meteor-ipn-listener.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "body-parser": "1.14.1",
  "paypal-ipn" : "3.0.0",
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3');
  api.use([
    'ecmascript',
    'underscore',
<<<<<<< HEAD
    'http',
    'ejson',
    'meteorhacks:picker@1.0.3',
  ]);

  api.mainModule('listener.js', 'server');
=======
    'meteorhacks:picker@1.0.3',
  ]);

  api.mainModule('paypal-ipn-listener.js', 'server');
>>>>>>> 91c5fa8221aedff568ac111f030309a351b42463
});

Package.onTest(function(api) {
  api.use('planefy:paypal-ipn-listener');
  api.use('ecmascript');
  api.use('http');
<<<<<<< HEAD
  api.use('ejson');
  api.use('practicalmeteor:chai@2.1.0');
  api.use('practicalmeteor:sinon@1.14.1_2');

  api.mainModule('listener.tests.js', 'server');
=======
  api.use('practicalmeteor:chai@2.1.0');

  api.mainModule('paypal-ipn-listener-tests.js');
>>>>>>> 91c5fa8221aedff568ac111f030309a351b42463
});
