app.controller('finish', function($scope, $localStorage, $rootScope){
	$scope.title = "Confirmar realização do sorteio?"
	$scope.sortear = function(){
		$scope.load = true
		$scope.title = "Realizando sorteio"
		$scope.text = "Revisando de ticktes válidos..."
		setTimeout(function() {
			$scope.text = "Tickets revisados"
			$scope.text_c = true
			$scope.text2 = "Desclassificando Tickets inválidos..."
			$scope.$apply()
		}, 5000);
		setTimeout(function() {
			$scope.text2 = "Tickets inválidos excluídos"
			$scope.text2_c = true
			$scope.text3 = "Eliminando Tickets de marcação duplicada..."
			$scope.$apply()
		}, 13000);
		setTimeout(function() {
			$scope.text3 = "Tickets duplicados excluídos"
			$scope.text3_c = true
			$scope.text4 = "Eliminando marcação de famoso e figuras publicas..."
			$scope.$apply()
		}, 20000);
		setTimeout(function() {
			$scope.text4 = "Marcação de famoso e figuras publicas anulados"
			$scope.text4_c = true
			$scope.text5 = "Embaralhando Ticktes..."
			$scope.$apply()
		}, 28000);
		setTimeout(function() {
			$scope.text5 = "Tickets embaralhados"
			$scope.text5_c = true
			$scope.text6 = "Listando tickets válidos..."
			$scope.$apply()
		}, 36000);
		setTimeout(function() {
			$scope.text6 = "Listagem concluída"
			$scope.text6_c = true
			$scope.text7 = "Aplicando segurança no sorteio..."
			$scope.$apply()
		}, 41000);
		setTimeout(function() {
			$scope.text7 = "Tickets criptografados"
			$scope.text7_c = true
			$scope.text8 = "Realizando sorteios de Ticktes validados..."
			$scope.$apply()
		}, 45000);
		setTimeout(function() {
			$scope.win = true
			$scope.people = "fulano"
			$scope.$apply()
		}, 52000);		
	}
	$scope.finish = function(){
		
	}
})