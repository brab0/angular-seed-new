(function() {

    angular.module('Restrict')
    .config([
        '$stateProvider', 
        ($stateProvider) => {

            $stateProvider
            .state('app.boilerplate', {
                url: 'boilerplate',
                views: {
                    'content@app': {
                        controller: 'BoilerplateController',
                        templateUrl: 'app/main/restrict/boilerplate/list.html'
                    }
                }
            });
        }
    ]);
})();