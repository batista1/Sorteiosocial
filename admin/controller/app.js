var app = angular.module('vPadApp', ['ngAnimate', 'ngMessages', 'ngMaterial', 'ui.router', 'md.data.table', 'ngStorage', 'flow', 'ngGlue', 'textAngular']);
console.log("Iniciando APP!")

//App principal
app.controller('Main', function(
    $scope,
    $rootScope,
    $timeout,
    $http,
    $localStorage,
    $state,
    $mdDialog,
    $mdSidenav
) {
    console.log("load main")
    if ($localStorage.token) {
        console.log("com token")
        $rootScope.socket = io.connect($localStorage.token.host + ":" + $localStorage.token.port)
        $rootScope.socket.emit("load_adm")
    }else{
        console.log("sem token")
    }
    $rootScope.socket.on("load_adm", function(config) {
        AWS.config.update({
            accessKeyId: config.aws.client,
            secretAccessKey: config.aws.secret
        });
        $rootScope.bucket = new AWS.S3({
            region: 'sa-east-1',
            params: {
                Bucket: 'sorteiosocial'
            }
        })
    })
    if (!$rootScope.socket) {
        $state.go("auth")
    }



    $scope.buildToggler = function(navID) {
        $mdSidenav(navID).toggle()
    }
    $rootScope.megabigload = $scope.megabigload
    $rootScope.megabigload = true
        //Variáveis
        //$rootScope.socket = io.connect(window.ws)    




});
app.config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('src/icons/mdi.svg')
});