var helloControllers = angular.module('helloControllers', []);

helloControllers.controller('homeCtrl', ['$scope', function($scope){
	$scope.things = [
		{name: 'John', age: 20},
		{name: 'Jane', age: 30},
		{name: 'James', age: 40},
		{name: 'Jimmy', age: 50}
	];
}])