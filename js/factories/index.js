var application = exports = angular.module('factories', []);

application
  .factory('User', require('./user'));

