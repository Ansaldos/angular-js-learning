// Mana user datas - Scopeless controller: lenyegesen gyorsabb, mint a scope objektum nem kerul mindig peldanyositasra
var userController = function($http) {
	console.log($http);
	
	var self = this;
	// User data
	this.user = {
		name: {
			first: "Vér",
			last: "Pistike"
		},
		job: "Programozó",
		age: 33
	}

	// Handle submit
	self.regUser = function($event) {
		$event.preventDefault();
		console.log(self.user);
	}
};
userController.$inject = ['$http']; // Utólagos injection - akár a $scope-ot is át lehet adni
ihr.controller('userController', userController);