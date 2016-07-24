app.controller("adverts", function ($scope, $rootScope, $timeout, $window){
	$scope.counter = {}
	$scope.filter = {
		"start_date": new Date(new Date().setMonth(new Date().getMonth()-1)),
		"end_date": new Date()
	}
	$rootScope.socket.emit("mgmt_adv", "fetch", $scope.filter)
	$rootScope.socket.removeListener("mgmt_adv")
	$rootScope.socket.on("mgmt_adv", function(data){
		$scope.users = data
		$scope.$apply()
	})
	$rootScope.socket.removeListener("mgmt_adv_graph")
	$rootScope.socket.on("mgmt_adv_graph", function(data){
		$scope.labels = []
		$scope.ind = []
		angular.forEach(data, function(v, k){
			if (v._id) {
				$scope.labels.push(v._id.nome)
				$scope.ind.push(v.count)
			}
		})
		$scope.startchart($scope.labels, $scope.ind)
		$scope.$apply()
	})


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
        limit: 10,
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