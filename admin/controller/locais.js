app.controller('locais', function($scope, $timeout, $rootScope, $localStorage, $mdToast) {
	
	$scope.allow = function(){
		$timeout(function(){
		$rootScope.megabigload = true
	}, 2000)
	}
	if (localStorage.token) {
		$scope.allow()
	}
	$scope.save = function(){
		$rootScope.socket.emit("save_config", $scope.site, $scope.api, $scope.payment, $scope.smtp, $scope.server, localStorage.token)
		console.log("saved")
	}
	$rootScope.socket.emit("load_adm", localStorage.token)
	$rootScope.socket.on("load_adm_success", function(data){
		console.log(data)
		$scope.site = data.site
		$scope.api = data.api
		$scope.smtp = data.email
		$scope.payment = data.payment
		$scope.server = data.server
	})
	
 })