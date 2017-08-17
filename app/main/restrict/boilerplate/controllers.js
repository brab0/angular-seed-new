(function () {

	angular.module('Restrict')
	.controller('BoilerplateController', [
		'$scope',			
		($scope) => {
			$scope.boilerplate = 'boilerplate'
		}
	]);
})();
