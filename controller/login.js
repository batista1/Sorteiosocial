app.controller("login", function($scope, $rootScope, $localStorage, $state, $mdToast, $window){
    $scope.submit = function(){
        console.log("emit")
        $rootScope.socket.emit("login", $scope.user)
    }
    $rootScope.socket.removeListener("login_confirm")
    $rootScope.socket.on("login_confirm", function(res){
        if (res.error != "error") {
            $localStorage.user = res
            $state.go("app.search_sort")
        }
        else{
            console.log("error")
            $mdToast.show($mdToast.simple().content("Informações incorretas").position('bottom right').hideDelay(2000));
        }
    })
    $scope.fblogin = function() {
        FB.login(function(r) {
            console.log(r)
            $scope.fbcheck(r)
        }, {
            scope: 'public_profile,email'
        });
    }
    $scope.fbcheck = function(r) {
        FB.api('/me', {
            fields: 'id,name, email, first_name, about, gender, location, picture.type(normal), cover'
        }, function(response) {
            console.log(response)
            $rootScope.fb_data = {
                'facebook_id': response.id,
                'dados': {
                    'nome': response.name,
                    'email': response.email
                }
            }
            $scope.$apply()
            $rootScope.socket.emit("login", $rootScope.fb_data.dados, $rootScope.fb_data.facebook_id);
        });
    }
})