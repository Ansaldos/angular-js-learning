ihr.factory('playerFactory', ['$q', '$http', 'config', function($q, $http, config) {
	return {
		url: config.apiServer+'/players',
		getPlayers: function(){
			var deferred = $q.defer();
				$http.get(this.url).then(function(response) {
				// Check data is not null
				if(!response.data) {
					deferred.reject('Bad object');
				} else {
					deferred.resolve(response.data);
				}
			}, function(error) {
				deferred.reject('Error in request: ' + error.statusText);
			});
			
			return deferred.promise;
		},
		updatePlayer: function(){
			var deferred = $q.defer();
			
			$http.post(this.url + '/' + player.id, player).then(function(responseData) {
				if(responseData.data.success) {
					deferred.resolve(responseData);
				} else {
					deferred.reject(responseData.data.error);
				}
			}, function (error) {
				deferred.reject('Error in update: ' + error.responseData.statusText);
			});
			return deferred.promise;
		},
	};
}]);