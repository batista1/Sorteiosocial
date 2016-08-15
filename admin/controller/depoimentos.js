app.controller('depoimentos', function($scope, $rootScope, $mdDialog){
	$scope.data = {}




	$scope.card = []
	$scope.bnt_new = function(ev) {
        $mdDialog.show({
            templateUrl: 'modal/depoimentos.html?' + window.version,
            targetEvent: ev,
            ariaLabel: 'Publicação',
            clickOutsideToClose: true,
            controller: function($scope, $localStorage, $rootScope, $mdDialog) {
            	$scope.save = function(){
            		console.log($scope.data)
            		$rootScope.socket.emit("depoimentos_save", $scope.data, $scope.img)
            	}   
            	$scope.cancel = function(){ $mdDialog.cancel()}


            	$scope.pre_files = []
			    $scope.file_changed = function(element) {
			        var file = element.files
			        $scope.upoading = true
			        angular.forEach(file, function(file, k) {
			            $scope.count++
			                $scope.$apply()
			            $rootScope.bucket.upload({
			                Key: 'sorteiosocial/Sorteio-Social' + new Date().getTime() + '-' + file.name,
			                ContentType: file.type,
			                Body: file
			            }, function(err, data) {
			                $scope.img = data.Location
			                console.log($scope.img)
			                $scope.show_img = true
			        		$scope.upoading = false
			                $scope.$apply()
			            });            
			        })
			    };





            }
        })
    }	            
	$rootScope.socket.on("depoimentos_save", function(res){
		$mdDialog.cancel()
		console.log(res)
		$scope.card.push(res)
	})
    $rootScope.socket.emit("depoimentos_load")
    $rootScope.socket.removeListener("depoimentos_load")
    $rootScope.socket.on("depoimentos_load", function(res){
    	console.log(res)
    	$scope.card = res
    	$scope.$apply()

    })
    $scope.delete_depoimentos = function(card, index){
    	console.log(card._id)
    	$scope.card.splice(index, 1);
    	$rootScope.socket.emit("depoimentos_remove", card._id)
    }
})