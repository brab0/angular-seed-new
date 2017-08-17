(function() {

    angular.module('Auth')
    .config([
        '$stateProvider', 
        ($stateProvider) => {

            $stateProvider
            .state('app.auth.login', {
                url: 'login',
                views: {
                    'content@app': {
                        controller: 'LoginController',
                        templateUrl: 'app/main/auth/login/view.html'
                    }
                }
            });
        }
    ]);
})();