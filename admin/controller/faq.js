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
                    $scope.cancel = function(){ $mdDialog.cancel()}
                }   
            }
        })
    }    
    $scope.bnt_edit = function(data, ev) {
        $rootScope.data = data
        console.log(data)
        $mdDialog.show({
            templateUrl: 'modal/faq.html?' + window.version,
            targetEvent: ev,
            ariaLabel: 'Publicação',
            clickOutsideToClose: true,
            controller: function($scope, $localStorage, $rootScope, $mdDialog) {
                $scope.data = $rootScope.data
                $scope.save = function(){
                    console.log($scope.data)
                    $rootScope.socket.emit("faq_edit", $scope.data)
                    $scope.cancel = function(){ $mdDialog.cancel()}
                }   
            }
        })
    }               
    $rootScope.socket.on("faq_save", function(res){
        $mdDialog.cancel()
        console.log(res)
        $scope.card.push(res)
    })         

    
    $rootScope.socket.on("faq_edit", function(res){
        $mdDialog.cancel()
        angular.forEach($scope.card, function(v, k){
            if (res._id == v._id) {
                $scope.card[k]=res
                $scope.$apply()
            }

        })
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