app.controller("root", function($scope, $mdSidenav, $localStorage, $state){
    if ($localStorage.user) { 
        $scope.logedd = true
        $scope.user = $localStorage.user
    }else if (!localStorage.login) {
        location.hash = "#/login"
        console.log($scope.user)
    }

    $scope.logout = function(){
        localStorage.clear();
        $scope.logedd = false
        location.hash = "#/login"
    }
})