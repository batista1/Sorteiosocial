app.controller("details", function($scope, $stateParams, $rootScope, $http){

	$scope.data = {"pubs": {"data":{"fotos":[]}}}
	$rootScope.socket.emit("open_sort", $stateParams.user)
	$rootScope.socket.removeListener("open_sort")
	$rootScope.socket.on("open_sort", function(d){
		console.log(d)
		$scope.data = d
		$scope.desserts = d.tickets
		$scope.$apply()
	})

    $scope.query = {
        order: '',
        limit: 5,
        page: 1
    };
	$scope.like_insta = function(){
		$http.get(window.cors+$scope.data.pubs.data.insta.perfil).success(function(r){
			var cors_result = JSON.parse(r.split('window._sharedData = ')[1].split(';</script>')[0]).entry_data.PostPage[0].media
			$scope.load_like_insta = true
			console.log(cors_result)			
			$scope.page = window.open($scope.data.pubs.data.insta.perfil, "page", "width=800,height=800")
			function check(){
				setTimeout(function() {
					if ($scope.page.closed === true){
						$http.get(window.cors+$scope.data.pubs.data.insta.perfil).success(function(res){
							var cors_response = JSON.parse(res.split('window._sharedData = ')[1].split(';</script>')[0]).entry_data.PostPage[0].media
							console.log(cors_result)
							console.log(cors_response)
						})
					}else {check()}
				}, 1000);
			} check()				
		})
	}
})