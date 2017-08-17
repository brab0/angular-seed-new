(function(){
    angular.module('Main', [
        'ui.router',
        'Util',
        'Directives',
        'Theme',
        'Auth',
        'Restrict'        
    ])
    .config([
        '$locationProvider',
        ($locationProvider) => {
            $locationProvider.html5Mode(true).hashPrefix('');
        }
    ]);
})();