var app = angular.module('Sorteio', ['ngAnimate', 'ngMaterial', 'ngMessages', 'ui.router', 'ngStorage', 'flow', 'angular-carousel','md.data.table', 'timer']);
console.log("Iniciando APP!")

//App principal
app.controller('Main', function(
    $scope,
    $rootScope,
    $mdDialog,
    $window,
    $localStorage,
    $state,
    $mdToast,
    $state,
    $mdSidenav
) {

    $scope.buildToggler = function(navID) {
        $mdSidenav(navID).toggle()
    }

    $rootScope.cancel = function() {$mdDialog.cancel();};
    //Variáveis
    $rootScope.socket = io.connect(window.ws)

    //Ao retornar reconectar
    $rootScope.socket.on('reconnect', function() {
        console.log('Reconectado!')
        //$state.go($state.$current, null, { reload: true });        
    })
    //Ao retornar um erro na conexão
    $rootScope.socket.removeListener("connect_error");
    $rootScope.socket.on('connect_error', function() {
        console.log('Falha de conexão');
    });
    
    $rootScope.socket.removeListener("add_pont");
    $rootScope.socket.on("add_pont", function(res) {
        if (res.id == $localStorage.user.id) {
            $localStorage.user.points++
        }
    })
    console.log($localStorage.user)
    
    $rootScope.socket.removeListener("login_confirm");
    $rootScope.socket.on("login_confirm", function(res) {
        console.log(res)
        if (!res.error) {
            $scope.logedd = true
            $localStorage.user = res
            $scope.$apply()
            $mdDialog.cancel()
            $state.go('account.new_advert')
        }else{
            $mdToast.show($mdToast.simple().content("Informações incorretas").position('bottom right').hideDelay(2000));
            $scope.PopupLogin()
        }
    })
});
app.config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('src/icons/mdi.svg')
});