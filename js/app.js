var app = angular.module('BruneiWeather', []);



app.factory('weatherData', ['$http', function ($http) {
	return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Bandar%20Seri%20Begawan&units=metric')
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);


app.controller('MainController', ['$scope', 'weatherData', function($scope, weatherData) {
	weatherData.success(function(data){
		$scope.weather = data;
	});
}]);



