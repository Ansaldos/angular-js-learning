// Service for handle match datas
ihr.service('matchService', ['matchFactory', function(matchFactory) {
	var service = this;
	service.cache = {};
	
	service.get = function() {
		matchFactory.getMatches().then(
		function (matches) {
			service.cache.matches = matches;
		},
		function (error) {
			console.error(error);
			service.lastError = error;
		}	
	)};
	
}]);