app.controller('search_sort', function($scope, $rootScope, $localStorage) {
   $scope.cb = {
    'ofer': true,
    'frete': false,
    'cb1': true

   }

    // 1st ngRepeat demo
    $scope.slides = []
    $rootScope.socket.emit("search_sort", $localStorage.user._id)
    $rootScope.socket.removeListener("search_sort")
    $rootScope.socket.on("search_sort", function(r){
        $scope.cards = r;
        $scope.$apply()
    })
})