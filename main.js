var helloAngular = angular.module('helloAngular');

helloAngular.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateURL: 'homeView.html',
			controller: 'homeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}])