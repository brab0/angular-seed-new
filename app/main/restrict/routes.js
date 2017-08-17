(function() {

    angular.module('Restrict')
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