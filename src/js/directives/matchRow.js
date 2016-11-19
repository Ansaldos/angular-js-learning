// In HTML 'matchRow' --> 'macth_row'
ihr.directive('matchRow', [function () {
	return {
		restrict: 'AE', // A - attribute, E - element, AE both
		templateUrl: 'templates/directives/matchRow.html',
		scope: {
			matches: '=matches',	// '@' -al csak stringet ad át, nem objektumot, '=' -el változót, '&' -el pedig függvényt ad át
			serverError: '=',
		},
		controller: ['$scope', '$http', 'config', 'matchFactory', function ($scope, $http, config, matchFactory) {	// Akkor érdemes link helyett controllert használni, ha nincs szükség a html elemre

			//Check input data - $scope.watch -al érdemes a valóságban csinálni
			if(typeof $scope.matches !== 'undefined') {
				if(!Array.isArray($scope.matches)) {
					$scope.matches = [];
					//console.error("A megadott matches attribútum nem tömb!");
				}
			}
			 
			// Update or delete row
			$scope.updateRow = function (match) {
				matchFactory.postMatch(match).then(
					function (matches) {
						if(matches.data.success) {
							self.serverError = false;
						} else {
							self.serverError = true;
						}					
					},
					function (error) {
						console.error(error);
						self.serverError = error;
					});
			};
			 
			$scope.deleteRow = function (match) {
				if(!confirm('Biztosan törli a ' + match.home + ' és ' + match.away + " meccset?")) {
					return;
				}
				
				var index = $scope.matches.indexOf(match);
				matchFactory.deleteMatch(index).then(
					function (matches) {
						if(response.data.succes) {
							$scope.matches.splice(index, 1);
							self.serverError = false;
						} else {
							console.log('Nem érkezett adat a szervertől!')
						}
						//console.log(matches);
					},
					function (error) {
						console.error(error);
						self.serverError = error;
					});
				/*var url = config.apiServer + '/matches/' + index;
				$http.delete(url).then(function (response) {
					if(response.data.succes) {
						$scope.matches.splice(index, 1);
					} else {
						console.log('Nem érkezett adat a szervertől!')
					}
				});*/
			};
			 
		}],
	};
}]);