(function () {

	angular.module('Auth')
	.controller('LoginController', [
		'$scope',			
		($scope) => {
			$scope.login = 'login'
		}
	]);
})();
