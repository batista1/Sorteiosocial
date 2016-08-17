app.controller("autologin", function($scope, $rootScope, $state, $localStorage){
	var sk = $rootScope.socket
	sk.emit("autologin", localStorage.login)
	sk.on("autologin", function(res){
		console.log(res)
		$localStorage.user = res
		$state.go("app.search_sort")
	})
})