app.controller("new_sort", function($scope, $rootScope, $localStorage, $state, $http, $mdToast) {
    $scope.user = $localStorage.user
    $scope.myDate = new Date();
      $scope.minDate = new Date(
          $scope.myDate.getFullYear(),
          $scope.myDate.getMonth(),
          $scope.myDate.getDate() + 1);
    $scope.data = {
        "instagram": true,
        "face": true,
        "fotos": []
    }
    $rootScope.socket.removeListener("new_sort")
    $rootScope.socket.on("new_sort", function(r) {
        $state.go("app.my_sort")
    })


    $rootScope.socket.emit("load_config")
    $rootScope.socket.removeListener("load_config")
    $rootScope.socket.on("load_config", function(config) {
        $rootScope.config = config
        $scope.pacotes = $rootScope.config.config
        $scope.$apply()
    })
    $scope.save = function() {
        $scope.load = true
        if ($scope.form.$valid) {
            console.log($scope.data)
                $rootScope.socket.emit("test_url_insta", $scope.data.insta.perfil, $localStorage.user, $scope.data)
        } else {
            $scope.load = false
        }
    }
    $rootScope.socket.removeListener("test_url_insta")
    $rootScope.socket.on("test_url_insta", function(res){
        console.log(res)
        if (res == false) {
            $scope.form.$setPristine()
            $scope.load = false
            $scope.$apply()
            $mdToast.show($mdToast.simple().content("Essa publicação já existe").position('bottom right').hideDelay(2000));            
        }
        else{
            $mdToast.show($mdToast.simple().content("Publicação cadastrada").position('bottom right').hideDelay(2000));
            location.hash = '#/app/details/'+res._id+'/'
        }
    })
    $scope.completeUpload = function($file, $message) {
        $scope.data.fotos.push({
            "nome": angular.fromJson($message).name
        })
    }
    $scope.test_fb = function() {
        $http.get(window.cors + $scope.data.fb.perfil)
            .then(function(response) {
                console.log(response.status)
                $scope.url_valid_error_fb = false
            }, function(response) {
                console.log(response.status)
                $scope.url_valid_error_fb = true
            });
    }
    
    $scope.accs = {}
    $rootScope.socket.on("res", function(r){console.log(r)})
    $scope.test_insta = function() {
        $http.get(window.cors + $scope.data.insta.perfil)
        .then(function(response ) {
            if (response.data.split('window._sharedData = ')[1]) {
              var res = JSON.parse(response.data.split('window._sharedData = ')[1].split(';</script>')[0]).entry_data
              var insta_json = res.PostPage[0].media
              $scope.data.desc = insta_json.caption
              $scope.data.img = insta_json.display_src
              $scope.res_data = insta_json
              if (res.PostPage) {
                if (insta_json.comments.count>39) {
                      $scope.url_valid_warning_insta = true 
                    $scope.url_valid_error_insta = false  
                  }else{
                $scope.url_valid_error_insta = false
                      $scope.url_valid_warning_insta = false 
            }
            }else{
              $scope.url_valid_error_insta = true                    
            }
            }else{
              $scope.url_valid_error_insta = true
            }
        }, function(response) {
            $scope.url_valid_error_insta = true
        });
    }
    $scope.user = $localStorage.user

 /* $http.get("https://www.instagram.com/oauth/authorize/?client_id=f8fafb94cbef4036a15b0f44cdd5e7f1&redirect_uri=http://www.sorteiosocial.com/#/autologin&response_type=token&public_content+liks+comments")
.success(function(r){
  console.log(r)
})*/
})