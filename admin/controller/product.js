app.controller("product", function($scope, $rootScope){
	socket = $rootScope.socket
	socket.emit("fetch_prod")
	socket.removeListener("fetch_prod")
	socket.on("fetch_prod", function(data){
		$scope.data = data
		console.log(data)
		$scope.$apply()

	})
	
})