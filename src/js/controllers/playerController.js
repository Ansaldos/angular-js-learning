var playerController = function($scope, $http, config, playerFactory) {
	var self = this;
	self.players = [];
	self.player = {};
	self.serverError = false;
	
	// Call factory's method here
	self.players = playerFactory.getPlayers().then(function(players) {
		console.log(players);
		self.players = players;
		self.serverError = false;
	}, function(error) {
		self.serverError = error;
	});
	
	$scope.getPlayer = function(player) {
		$event.preventDefault();
		self.player = player;
	};
	
	$scope.updatPlayer = function(player) {
		$event.preventDefault();
	};
	
	// TODO UPDATE METHOD
	
};
playerController.$inject = ['$scope', '$http', 'config', 'playerFactory'];
ihr.controller('playerController', playerController);