app.controller("advert", function($scope, $stateParams, $rootScope, $http){

	$scope.data = {"pubs": {"data":{"fotos":[]}}}
	console.log($stateParams.id)
	$rootScope.socket.emit("open_sort", $stateParams.id)
	$rootScope.socket.removeListener("open_sort")
	$rootScope.socket.on("open_sort", function(d){
		console.log(d)
		$scope.data = d
		$scope.users = d.tickets
		$scope.title = d.data.titulo
		$scope.vencedores = []
		if (d.pre_vencedores) {
			$scope.vencedores = d.pre_vencedores
		}
		$scope.$apply()
	})

	//Aprovar
	$scope.aprovar = function(ev, id, index){
		console.log(id)
		$rootScope.socket.emit("aprovar_sort", id)
		$scope.users[index].approved = true
	}

	$scope.add_vencedor = function(ev, user){
		$rootScope.socket.emit("add_vencedor", user, $stateParams.id)
		console.log(user)
		$scope.vencedores.push(user)

	}

	$scope.remove_vencedor = function(ev, user, index){
		$rootScope.socket.emit("remove_vencedor", user, $stateParams.id)
		console.log(user)
		$scope.vencedores.splice(index, 1)
		//$scope.vencedores.push(user)

	}

	//Reprovar
	$scope.reprovar = function(ev, id, index){
		console.log(id)
		$rootScope.socket.emit("reprovar_sort", id)
		$scope.users[index].approved = false
	}


	$rootScope.socket.removeListener("mgmt_adv_graph_line")
	$rootScope.socket.on("mgmt_adv_graph_line", function(data){
		console.log(data)
		$scope.labels_line = []
		$scope.ind_line = []
		angular.forEach(data.reverse(), function(v, k){
			if (v._id) {
				$scope.labels_line.push(v._id)
				$scope.ind_line.push(v.count)
			}
		})
		$scope.startchartline($scope.labels_line, $scope.ind_line)
		$scope.$apply()
	})

	$scope.query = {
        order: '',
        limit: 5,
        page: 1
    };

    $rootScope.socket.removeListener("count_login").on("count_login", function(data){
    	$scope.counter.logged =data
    	$scope.$apply()
    })
        $rootScope.socket.removeListener("count_online").on("count_online", function(data){
    	$scope.counter.online = data
    	$scope.$apply()
    })



$scope.startchartline = function(lb, ind){
var ctx = document.getElementById("chart_line");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: lb,
        datasets: [{
            label: 'Número de registros nessa categoria',
            data: ind
        }],
        options: {
	        responsive: true,
    		maintainAspectRatio: true
	    }
    },
});
}

$scope.startchart = function(lb, ind){
var ctx = document.getElementById("chart_bar");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: lb,
        datasets: [{
            label: 'Número de registros nessa categoria: ',
            data: ind
        }],
        options: {
	        responsive: true,
    		maintainAspectRatio: true
	    }
    },
});
}
 
})