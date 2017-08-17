(function() {

    angular
    .module('Directives')
    .directive('boilerplate', boilerplate)

    function boilerplate() {
        
        function link() {

        }

        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/directives/boilerplate/view.html',
            link: link
        }
        
    }

})();