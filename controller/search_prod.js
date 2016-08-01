app.controller('search_prod', function($scope, $rootScope, $localStorage) {
   $scope.cb = {
    'ofer': true,
    'frete': false,
    'cb1': true

   }

    // 1st ngRepeat demo
    $scope.slides = []
    $rootScope.socket.emit("fetch_prod", $localStorage.user._id)
    $rootScope.socket.removeListener("fetch_prod")
    $rootScope.socket.on("fetch_prod", function(r){
        $scope.cards = r;
        $scope.$apply()
    })
    $scope.make_lance = function(id){
        $rootScope.socket.emit("lance", id, $localStorage.user._id, $localStorage.user.username)
    }
    $rootScope.socket.removeListener('new_lance')
    $rootScope.socket.on('new_lance', function(res)
    {
        console.log(res)
        angular.forEach($scope.cards, function(v, k){
            if (v._id == res._id) {
                $scope.cards[k] = res
                $scope.$apply()
            }
        })
    })
})