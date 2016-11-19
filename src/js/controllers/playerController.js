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
		self.player = player;
	};
	
	$scope.updatePlayer = function(player) {
		playerFactory.updatePlayer(self.player).then(function(player) {
			if(player.success) {
				self.serverError = false;
				console.log('Post called');
			} else {
				self.serverError = 'Post datas failed.';
			}	
		}, function(error) {
			self.serverError = error;
		});
	};	
};
playerController.$inject = ['$scope', '$http', 'config', 'playerFactory'];
ihr.controller('playerController', playerController);