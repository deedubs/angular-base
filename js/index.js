var factories = require('factories');
var services = require('services');

var application = angular.module('angular-base', ['factories', 'services']);



application.config(require('./lib/routes'));
application.config(require('./lib/authentication'));

application.run(function ($rootScope, CurrentUser) {
  $rootScope.currentUser = CurrentUser;

  console.log('angular-base ready!');
});