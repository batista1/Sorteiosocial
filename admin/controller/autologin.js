app.controller('autologin', function($scope, $rootScope, $stateParams, $state, $localStorage, $mdToast) {
	$scope.data_login = {}
	$scope.data_login.port = 8080
	$scope.c = function(){
    	$rootScope.socket = io.connect($scope.data_login.host+":"+$scope.data_login.port)  
	    //Ao retornar um erro na conexão
	    $rootScope.socket.removeListener("connect_error");
	    $rootScope.socket.on('connect_error', function() {
	    	$rootScope.socket.disconnect()
	        console.log('Falha de conexão');
	        $scope.loginform.$setPristine()
	        $mdToast.show($mdToast.simple().content("Não foi possível conectar").position('bottom right').hideDelay(2000));
	        $scope.$apply()
	    });  
	    $rootScope.socket.removeListener("connect_error");
	    $rootScope.socket.on('connect', function() {
	        console.log('Conectado');
	        $mdToast.show($mdToast.simple().content("Conexão estabelecida").position('bottom right').hideDelay(2000));
	        $scope.passhare = true
	        $scope.$apply()
	    });  
    }

    $scope.p = function(){
    	$rootScope.socket.emit("access_server", $scope.data_login.pass)
	    $rootScope.socket.removeListener("access_server");
	    $rootScope.socket.on('access_server', function(data) {
	    	if (data.error) {
	        	$scope.passform.$setPristine()
	        	$mdToast.show($mdToast.simple().content("Chave incorreta").position('bottom right').hideDelay(2000));
	    	}else{
	    		$localStorage.token = {"host": $scope.data_login.host, "port": $scope.data_login.port}
	    		$state.go("app.home")	    		
	    	}
	    })
    }
})