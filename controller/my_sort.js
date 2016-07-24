app.controller('my_sort', function($scope, $rootScope, $localStorage) {
   $scope.cb = {
    'ofer': true,
    'frete': false,
    'cb1': true

   }

            
    // 1st ngRepeat demo
    $scope.slides = []
    $rootScope.socket.emit("fetch_my_pub", $localStorage.user._id)
    $rootScope.socket.removeListener("fetch_my_pub")
    $rootScope.socket.on("fetch_my_pub", function(r){
        console.log(r)

    $scope.cards = r;
    $scope.$apply()
    console.log($scope.slides)
    })
})