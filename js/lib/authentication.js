module.exports = function ($httpProvider) {
  $httpProvider.responseInterceptors.push(function ($q, $location) {
    function success (response) {
      return response;
    }

    function error (response) {
      if (response.status === 401) {
        window.afterSignin = $location.path();
        $location.path('/login');
      }

      return $q.reject(response);
    }

    return function (promise) {
      return promise.then(success, error);
    }
  });
}