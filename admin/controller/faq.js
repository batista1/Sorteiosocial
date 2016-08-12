app.controller('faq', function($scope, $rootScope, $mdDialog){
	$scope.card = []
	$scope.bnt_new = function(ev) {
        $mdDialog.show({
            templateUrl: 'modal/faq.html?' + window.version,
            targetEvent: ev,
            ariaLabel: 'Publicação',
            clickOutsideToClose: true,
            controller: function($scope, $localStorage, $rootScope, $mdDialog) {
            	$scope.save = function(){
            		console.log($scope.data)
            		$rootScope.socket.emit("faq_save", $scope.data)
            	}   
            }
        })
    }	            
	$rootScope.socket.on("faq_save", function(res){
		$mdDialog.cancel()
		console.log(res)
		$scope.card.push(res)
	})
    $rootScope.socket.emit("faq_load")
    $rootScope.socket.removeListener("faq_load")
    $rootScope.socket.on("faq_load", function(res){
    	console.log(res)
    	$scope.card = res
    	$scope.$apply()

    })
    $scope.delete_faq = function(card, index){
    	console.log(card._id)
    	$scope.card.splice(index, 1);
    	$rootScope.socket.emit("faq_remove", card._id)
    }
})