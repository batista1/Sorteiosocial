app.controller('parceiros', function($scope, $rootScope, $mdDialog){
    $scope.data = {}


    AWS.config.update({
        accessKeyId: 'AKIAI53O74F3ANQJGKTQ',
        secretAccessKey: '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'
    });
    AWS.config.region = 'sa-east-1';


    $scope.card = []
    $scope.bnt_new = function(ev) {
        $mdDialog.show({
            templateUrl: 'modal/parceiros.html?' + window.version,
            targetEvent: ev,
            ariaLabel: 'Publicação',
            clickOutsideToClose: true,
            controller: function($scope, $localStorage, $rootScope, $mdDialog) {
                $scope.save = function(){
                    console.log($scope.data)
                    $rootScope.socket.emit("parceiros_save", $scope.data, $scope.img)
                }   
                $scope.cancel = function(){ $mdDialog.cancel()}


                $scope.bucket = new AWS.S3({
                    region: 'sa-east-1',
                    params: {
                        Bucket: 'vstorage.com.br'
                    }
                })


                $scope.pre_files = []
                $scope.file_changed = function(element) {
                    var file = element.files
                    $scope.upoading = true
                    angular.forEach(file, function(file, k) {
                        $scope.count++
                            $scope.$apply()
                        $scope.bucket.upload({
                            Key: 'sorteiosocial/Sorteio-Social' + new Date().getTime() + '-' + file.name,
                            ContentType: file.type,
                            Body: file
                        }, function(err, data) {
                            $scope.img = data.Location
                            console.log($scope.img)
                            $scope.show_img = true
                            $scope.upoading = false
                            $scope.$apply()
                        });            
                    })
                };





            }
        })
    }               
    $rootScope.socket.on("parceiros_save", function(res){
        $mdDialog.cancel()
        console.log(res)
        $scope.card.push(res)
    })
    $rootScope.socket.emit("parceiros_load")
    $rootScope.socket.removeListener("parceiros_load")
    $rootScope.socket.on("parceiros_load", function(res){
        console.log(res)
        $scope.card = res
        $scope.$apply()

    })
    $scope.delete_parceiros = function(card, index){
        console.log(card._id)
        $scope.card.splice(index, 1);
        $rootScope.socket.emit("parceiros_remove", card._id)
    }
})