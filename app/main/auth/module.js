(function () {

  angular.module('Auth', [])
  .config([
    '$httpProvider',
    '$qProvider', (
      $httpProvider,
      $qProvider
    ) => {
      
      $httpProvider.defaults.useXDomain = true;

      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $httpProvider.interceptors.push([
        '$q',
        '$location',
        ($q, $location) => {
          return {
            'request': function (config) {
              config.headers = config.headers || {};
              
              return config;
            },
            'responseError': function (response) {
              if (response.status == 401) {            
                $location.path('/login')
              }

              return $q.reject(response)
            }
          };
        }
      ]);
    }
  ]);
})();
