// Handle matches
ihr.factory('matchFactory', ['$q', '$http', 'config', function ($q, $http, config) {
	return {
		url: config.apiServer + '/matches',
		getMatches: function () {
			var deferred = $q.defer(); // Run async task
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
		postMatch: function (match) {		
			console.log(match);
			var deferred = $q.defer(); // Run async task
			$http.post(this.url + '/' + match.id, match).then(function(responseData) {
				if(responseData.data.success) {
					deferred.resolve(responseData);
				} else {
					deferred.reject(responseData.data.error);
				}
			}, function (error) {
				deferred.reject('Error in request: ' + error.responseData.statusText);
			});
			
			return deferred.promise;
		},
		deleteMatch: function (index) {
			var deferred = $q.defer(); // Run async task
			$http.delete(this.url + '/' + index).then(function(response) {
				if(!response) {
					deferred.reject('Bad delete request');
				} else {
					deferred.resolve(response);
				}
			}, function(error) {
				deferred.reject('Error in request: ' + error.response.statusText);
			});
			
			return deferred.promise;
		},
	};
}]);