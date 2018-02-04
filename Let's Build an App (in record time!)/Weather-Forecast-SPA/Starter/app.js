var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

//routes

weatherApp.config(function($routeprovider) {
	
	$routeprovider
	
	.when('/', {
		template: 'pages/home.htm',
		controller: 'homeController'
	})
	.when('/forecast', {
		template: 'pages/forecast.htm',
		controller: 'forecastController'
	})
	
})
//ctrl

weatherApp.controller('homeController',['$scope', function($scope) {
	

	
}])

weatherApp.controller('forecastController', ['$scope', function($scope) {
	
	
	
}])