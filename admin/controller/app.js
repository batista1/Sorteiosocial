var app = angular.module('vPadApp', ['ngAnimate', 'ngMessages', 'ngMaterial','ui.router','md.data.table', 'ngStorage', 'flow', 'ngGlue', 'textAngular']);
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
    if ($localStorage.token) {
        $rootScope.socket = io.connect($localStorage.token.host+":"+$localStorage.token.port) 
        $rootScope.socket.emit("load_adm")
    }
    if (!$rootScope.socket) {$state.go("auth")}
    

    $scope.buildToggler = function(navID) {
        $mdSidenav(navID).toggle()
    }
    $rootScope.megabigload = $scope.megabigload
        $rootScope.megabigload = true
    //Variáveis
    //$rootScope.socket = io.connect(window.ws)    

  AWS.config.update({
        accessKeyId: 'AKIAJ5BT5SOZJ2O2ZFTQ',
        secretAccessKey: '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'
    });
    $rootScope.bucket = new AWS.S3({
        region: 'sa-east-1',
        params: {
            Bucket: 'sorteiosocial'
        }
    })


});
app.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('src/icons/mdi.svg')
});
