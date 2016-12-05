/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'holiday-list',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    apiURL:'http://localhost:9000',
    'ember-cli-mirage':{enabled: true},
 
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    contentSecurityPolicy: {
      'connect-src':"http://localhost:9000"     
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    //ENV['ember-cli-mirage'] = {
    //   enabled: true
    //}
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';


    //ENV['ember-cli-mirage'] = {
    //   enabled: false
    //}
  }

  if (environment === 'production') {

  }

  return ENV;
};