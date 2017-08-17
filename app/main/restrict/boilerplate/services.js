(function() {

    angular.module('Restrict')
    .service('Boilerplate', [
        '$http',
        'settings',
        ($http, settings) => {

            var boilerplate = {};

            var set = function(obj){
                boilerplate = obj;
            };

            var get = function(){
                return boilerplate;
            };

            return {
                get: get,
                set: set
            };
        }
    ]);

})();
