var ihr = angular.module('ihr', ['ngRoute']);
ihr.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
	
	$httpProvider.defaults.withCreditentials = true;
	$httpProvider.defaults.headers.common.Token = '&#@s#&#@65dcvedfgdssaa54wfdfeas651';
	
	$routeProvider.when('/soccer', {
		controller: 'soccerController',
		controllerAs: 'ctrl',
		templateUrl: 'templates/soccer.html',
	}).when('/register', {
		controller: 'userController',
		controllerAs: 'ctrl',
		templateUrl: 'templates/register.html',
	}).when('/player', {
		controller: 'playerController',
		controllerAs: 'ctrl',
		templateUrl: 'templates/player.html',
	}).otherwise({
		controller: 'soccerController',
		controllerAs: 'ctrl',
		templateUrl: 'templates/soccer.html',
	});
}]);


// Konstans definiálása, amely bárhonnan elérhető az alkalmazáson belül
ihr.constant('config', {
	apiServer: 'http://192.168.0.15:3000',
});


// '[ ] -el kell létrehozni az uglify -hoz, hogy megfelelően működjön
// Különben nem fogja tudni mit kell átadni, így meg explicit módon meg van mondva
/*ihr.controller('greetController', ['$scope', '$http', function($scope, $http) {
	//window.lastScope = $scope; // Debugging
	$scope.greet = 'hola';
	
	// Own watcher createion
	$scope.$watch('greet', function (newData, oldData) {
		console.log(newData, oldData);
	});
}]);*/