(function() {

	angular.module('Util')
	.service('greeting', Greeting);

	function Greeting() {

		var greeting = function() {		
			return 'Hello, friend!'
		}

		return {
			greeting: greeting
		};
	}
})();