var application = angular.module('angular-base', []);

require('factories');

application.config(require('./lib/routes'));
application.config(require('./lib/authentication'));

application.run(function ($rootScope) {
  $rootScope.currentUser = {name: 'Dan Williams'};

  console.log('angular-base ready!');
});