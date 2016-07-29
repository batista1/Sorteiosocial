app.controller('config', function($scope, $timeout, $rootScope, $localStorage, $mdToast) {
	
	$scope.allow = function(){
		$timeout(function(){
		$rootScope.megabigload = true
	}, 2000)
	}
	if (localStorage.token) {
		$scope.allow()
	}
	$scope.save = function(){
		console.log("enviou save")
		$rootScope.socket.emit("save_config", $scope.site, $scope.api, $scope.payment, $scope.smtp, $scope.server, '579abb75be04d2b0294d88a2')
	}
	$rootScope.socket.on('save_config', function(){console.log("config saved!")})
	$rootScope.socket.emit("open_config", '579abb75be04d2b0294d88a2')
	$rootScope.socket.on("open_config", function(data){
		console.log(data)
		$scope.site = data.site
		$scope.api = data.api
		$scope.smtp = data.email
		$scope.payment = data.payment
		$scope.server = data.server
		$scope.$apply()
	})	
 })