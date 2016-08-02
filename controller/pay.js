app.controller("pay", function($scope, $rootScope, $http, $filter, $httpParamSerializerJQLike, $localStorage) {
    $scope.user_dados = $localStorage.user.dados
    $scope.data = {}

    $scope.step = 'info'
    $scope.today = new Date()
    $rootScope.socket.emit("load_config")
    $rootScope.socket.removeListener("load_config")
    $rootScope.socket.on("load_config", function(config) {
        $rootScope.config = config
        $scope.pacotes = $rootScope.config.config
        //$scope.data.valor = "20"
        $scope.$apply()
    })


    $scope.data.card = 4235647728025682
    Mercadopago.setPublishableKey("TEST-de99f6bd-7fa0-4db1-a4c8-aea58fb612dd");


    $scope.test_card = function() {
        var c = $filter('limitTo')($scope.data.card, 6)
        Mercadopago.getInstallments({
            bin: c,
            amount: $scope.data.valor
        }, function(r, s) {
            console.log(s);
            $scope.card_d = s
            $scope.data.parc = s[0].payer_costs[0].installment_amount
            $scope.$apply()
        })
    }
    $scope.pay = function() {
        
        var element = document.getElementById('formPayment');
        var form = $httpParamSerializerJQLike($scope.data)
        Mercadopago.createToken(element, function(e, r) {
            if (r.error) {
                alert("Ocorreu um erro: " + JSON.stringify(r));
            } else {
                $scope.send_pay = {
                    "val": $scope.data.valor,
                    "installments": $scope.data.parc,
                    "token": r.id,
                    "desc": "Compra de crédito SorteioSocial",
                    "payment_method_id": $scope.card_d[0].payment_method_id,
                    "payer": {
                        "email": $scope.data.email
                    }
                }
                console.log($scope.send_pay)
        		$scope.step = 'confirm'
            	$scope.response_mp = r            	
            	console.log($scope.response_mp)
                $scope.$apply()
            }
        })
    }
    $scope.submit_pay = function(){
    	$rootScope.socket.emit("pay", $scope.send_pay, $localStorage.user._id)	
	    $rootScope.socket.removeListener("confirm_pay")
        $rootScope.socket.on("confirm_pay", function(r){
        	console.log(r)
        	if (r.error != 'refused') {        		
        		$scope.step = 'approved'
                $localStorage.user.points=r.value.points      
        		$scope.$apply()		
        	}else{
        		$scope.step = 'repproved'
        	}

        	$scope.load_show = false
        	$scope.$apply()
        })
    }
	    //
})