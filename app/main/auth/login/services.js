(function() {

    angular.module('Auth')
    .service('LoginService', [
        '$http',
        'settings',
        ($http, settings) => {

            var login = {};

            var set = function(obj){
                login = obj;
            };

            var get = function(){
                return login;
            };

            return {
                get: get,
                set: set
            };
        }
    ]);

})();
