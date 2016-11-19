var soccerController = function($scope, $http, config, matchService) {
	var self = this;
	this.matches = [];
	this.serverError = false;
	
	// Set watch - nem éri el alapvetően, mert máshonnan jön a változó, ezért kell egy függvény ami ezzel tér vissza
	$scope.$watch(function() {
		return matchService.cache.matches;
	}, function(newValue, oldValue) {
		console.log('Matches: ' + newValue);
		
		if(newValue) {
			self.matches = newValue;	
		}
	});
	
	matchService.get();
	
};
soccerController.$inject = ['$scope', '$http', 'config', 'matchService'];
ihr.controller('soccerController', soccerController);