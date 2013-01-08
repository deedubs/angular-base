var application = exports = angular.module('services', ['factories']);

application
  .service('CurrentUser', require('./current-user'));