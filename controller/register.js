app.controller("register", function($scope, $rootScope, $localStorage, $state, $mdToast){
    $scope.submit = function(){
        console.log($scope.user)
        $rootScope.socket.emit("cadastrar", $scope.user)
    }
    $rootScope.socket.removeListener("cadastrar")
    $rootScope.socket.on("cadastrar", function(res){
        if (res.email != true) {
            console.log(res)
            $localStorage.user = res
            $state.go("app.search_sort")
        }
        else{
            $mdToast.show($mdToast.simple().content("Email já cadastrado").position('bottom right').hideDelay(2000));
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
            fields: 'id,name,email, first_name, about, gender, location, picture.type(normal), cover'
        }, function(response) {
            console.log(response)
            $rootScope.fb_data = {
                'facebook_id': response.id,
                'dados': {
                    'nome': response.name,
                    'first_name': response.first_name,
                    'email': response.email,
                    'picture': response.picture.data.url,
                    'cover': response.cover.source
                }
            }
            $scope.$apply()
            $rootScope.socket.emit("cadastrar", $rootScope.fb_data, $rootScope.fb_data.facebook_id);
        });
    }
})
//