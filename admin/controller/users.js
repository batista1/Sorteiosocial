app.controller("users", function ($scope, $rootScope, $timeout, $window){
	$scope.counter = {}
	$scope.users_data = {}
	$rootScope.socket.emit("mgmt_user", "fetch")
	$rootScope.socket.removeListener("mgmt_user", "fetch")
	$rootScope.socket.on("mgmt_user", function(data, data1){
		$scope.users_data.count = data
		$scope.users_data.count_r = data1
		console.log(data1)
		$scope.$apply()
	})
	$rootScope.socket.on("count_user", function(data, logged, online){
		$scope.counter = {"logged":logged, "online":online}		
		$scope.count_user = data
		$scope.labels = []
		$scope.ind = []
		console.log(data)
		angular.forEach(data, function(v, k){
			$scope.labels.push("Dia "+v._id.day)
			$scope.ind.push(v.count)
		})
		$scope.startchart($scope.labels, $scope.ind)
		$scope.$apply()
	})
	$scope.query = {
        order: '',
        limit: 8,
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

$scope.startchart = function(lb, ind){
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: lb.reverse(),
        datasets: [{
            label: 'Número de cadastros por dia',
            data: ind.reverse()
        }],
        options: {
	        responsive: true,
    		maintainAspectRatio: true
	    }
    },
});
}
 
})