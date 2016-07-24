app.controller("users", function ($scope, $rootScope, $timeout, $window){
	$scope.counter = {}
	$rootScope.socket.emit("mgmt_user", "fetch")
	$rootScope.socket.removeListener("mgmt_user", "fetch")
	$rootScope.socket.on("mgmt_user", function(data){
		console.log(data)
		$scope.users = data
		$scope.$apply()
	})
	$rootScope.socket.on("count_user", function(data, logged, online){
		console.log(data)
		$scope.counter = {"logged":logged, "online":online}
		
		$scope.count_user = data
		console.log(data)
		$scope.labels = []
		$scope.ind = []
		angular.forEach(data, function(v, k){
			$scope.labels.push("Dia "+v._id.day)
			$scope.ind.push(v.count)
			console.log(v)
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
        labels: lb,
        datasets: [{
            label: 'Número de cadastros por dia',
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