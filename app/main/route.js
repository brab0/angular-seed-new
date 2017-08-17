(function() {

    angular.module('Main')
    .config(($stateProvider, $urlRouterProvider) => {
        
        $stateProvider.state('app', {
            abstract: true,
            url: '/',
            templateUrl: 'app/theme/parts/content.html'
        })

        $urlRouterProvider.otherwise('/login')
    })

})();
