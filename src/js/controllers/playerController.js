var playerController = function($scope, $http, config, playerFactory) {
	var self = this;
	this.players = [];
	this.serverError = false;
	
	// Call factory's method here
	this.players = playerFactory.getPlayers().then(function(players) {
		console.log(players);
		self.players = players;
		self.serverError = false;
	}, function(error) {
		self.serverError = error;
	});
	
	// TODO UPDATE METHOD
	
};
playerController.$inject = ['$scope', '$http', 'config', 'playerFactory'];
ihr.controller('playerController', playerController);