app.controller('profile', function($scope, $localStorage, $rootScope){
	$scope.user = $localStorage.user
	console.log($scope.user)
	$scope.save = function(){
		$rootScope.socket.emit("update_profile", $scope.user)
		$rootScope.socket.on("update_profile", function(res){
			console.log(res)

		})
	}
})