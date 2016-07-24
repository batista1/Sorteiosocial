app.controller('my_part', function($scope, $rootScope, $localStorage) {
   $scope.cb = {
    'ofer': true,
    'frete': false,
    'cb1': true

   }

    // 1st ngRepeat demo
    console.log($localStorage.user.id)
    $rootScope.socket.emit("fetch_my_part", $localStorage.user.id)
    $rootScope.socket.removeListener("fetch_my_part")
    $rootScope.socket.on("fetch_my_part", function(r){
        console.log(r)
        $scope.cards = r;
        $scope.$apply()
    })
})