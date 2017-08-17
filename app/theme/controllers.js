(function () {
	
	angular.module('Theme')
	.controller('ThemeController', [
		'$scope',
		'ThemeService',
		($scope, ThemeService) => {

		$scope.logout = function () {
			console.log('logout');
		};
	}])

})();
