(function() {

    angular.module('Auth')
    .config([
        '$stateProvider', 
        ($stateProvider) => {

            $stateProvider
            .state('app.auth', {
                absolute: '/',
                url: 'auth'
            });
        }
    ]);
})();