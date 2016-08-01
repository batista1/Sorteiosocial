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
})