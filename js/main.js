var helloAngular = angular.module('helloAngular', ['ngRoute', 'helloControllers']);

helloAngular.config(['$routeProvider',
 function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/homeView.html',
			controller: 'homeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);