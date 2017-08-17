(function() {

    angular.module('Restrict')
    .service('RestrictService', [
        '$http',
        ($http) => {

            var restrict = {};

            var set = function(obj){
                restrict = obj;
            };

            var get = function(){
                return restrict;
            };

            return {
                get: get,
                set: set
            };
        }
    ]);

})();
