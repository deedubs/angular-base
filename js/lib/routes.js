module.exports = function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {templateUrl: '/t/home.html'})
    .when('/settings', {templateUrl: '/narf'})
    .when('/login', {templateUrl: '/t/home.html'})
    .otherwise({redirectTo: '/'});
}