(function () {

    angular.module('Theme')
    .service('ThemeService', [() => {

        function theme(){
            return 'theme'
        }

        return {
            theme: theme
        }
    }]);

})();