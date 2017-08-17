(function() {

    angular.module('Auth')
    .service('AuthService', [
        '$http',
        'settings',
        ($http, settings) => {

            var auth = {};

            var set = function(obj){
                auth = obj;
            };

            var get = function(){
                return auth;
            };

            return {
                get: get,
                set: set
            };
        }
    ]);

})();
