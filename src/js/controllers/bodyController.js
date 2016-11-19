ihr.controller('bodyController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.currentPage = 'soccer';
	$scope.getCurrentPage = function(name) {
		return 'templates/' + $scope.currentPage + '.html';
	};
	
	// Scope változó esetén a $timeout-ot kell használni, egyébként lehet a setTimeout metódust
	/*$timeout(function () {
		$scope.currentPage = 'register';
	}, 3000);*/
	
	$scope.switchPage = function ($event) {
		$event.preventDefault();
		$scope.currentPage = $event.currentTarget.getAttribute('href').replace('#', '');
	};
	
	$scope.checkPage = function (name) {
		return location.hash === '#/' + name;
	};
}]);