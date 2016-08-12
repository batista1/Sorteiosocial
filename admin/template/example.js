/*
@author Lucas Willemen
@description Nova publicação
@date 17/06/2016
*/
app.controller('new_advert', function($scope, $rootScope, $mdToast, $mdSidenav, $localStorage, $state, $http, $mdDialog, $mdMedia) {
    // Verifica se esta carregando ou não
    $scope.isLoading = false;
    $scope.myDate = new Date()
    $scope.data = {
        "fotos": [],
        "cat": {}
    }
    
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    
    $scope.step = "p"
    $scope.user = $localStorage.user
    $scope.fu = function() {
        $scope.step = "s"
    }
    $http.get("model/categorias.json?1")
        .success(function(data) {
            $scope.cat = data.categoria
                //$scope.$apply()
        })

    $http.get("model/state.json").success(function(r) {
        $scope.state = r
    })

    $scope.request_cep = function(cep) {
        $http.get("http://viacep.com.br/ws/" + cep + "/json/").success(function(r) {
            $scope.cep_search = true
            $scope.user.dados.cidade = r.localidade
            $scope.user.dados.estado = r.uf
            $scope.user.dados.logradouro = r.logradouro
            $scope.user.dados.bairro = r.bairro
            $scope.$apply()
        })
    }
    $scope.opencat = function(cat) {
        $scope.data.cat.scat = false;
        $scope.data.cat.tcat = false;
        $scope.subcat = $scope.cat[cat].segunda_categoria;
        $scope.data.cat.pcat = {
            "nome": $scope.cat[cat].nome,
            "id": $scope.cat[cat].id
        }
        $scope.tercat = null
        $scope.selected_cat = null

    }
    $scope.openseccat = function(subcat) {
        $scope.data.cat.tcat = false;
        $scope.data.cat.scat = {
            "nome": $scope.subcat[subcat].nome,
            "id": $scope.subcat[subcat].id,
            "containSub": Boolean($scope.subcat[subcat].terceira_categoria)
        }
        if ($scope.subcat[subcat].terceira_categoria) {
            $scope.tercat = $scope.subcat[subcat].terceira_categoria
        } else {
            $scope.selected_cat = $scope.subcat[subcat].nome
            $scope.tercat = null
            if ($scope.data.cat.pcat.id == 7 && $scope.data.cat.scat.id == 0) {
                $http.get("http://fipeapi.appspot.com/api/1/carros/marcas.json").success(function(r) {
                    $scope.marcas = r
                })
            }
        }
    }
    $scope.opentercat = function(tercat) {
        $scope.selected_cat = $scope.tercat[tercat].nome
        $scope.data.tercat = $scope.tercat[tercat].nome
        $scope.data.cat.tcat = {
            "nome": $scope.tercat[tercat].nome,
            "id": $scope.tercat[tercat].id
        }
    }
    $scope.select_marca = function(i) {
        $scope.data.auto = {}
        $scope.data.auto.marca = i
        $scope.marca_id = i.id
        $http.get("http://fipeapi.appspot.com/api/1/carros/veiculos/" + i.id + ".json").success(function(r) {
            $scope.modelos = r
        })
    }
    $scope.select_modelo = function(i) {
        $scope.data.auto.modelo = i
        console.log(i)
        $http.get("http://fipeapi.appspot.com/api/1/carros/veiculo/" + $scope.marca_id + "/" + i.id + ".json").success(function(r) {
            $scope.versao = r
        })
    }
    $scope.select_versao = function(i) {
        $scope.data.auto.vercao = i

    }




    AWS.config.update({
        accessKeyId: 'AKIAJJIOBP6PAF5XGFAA',
        secretAccessKey: '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'
    });
    AWS.config.region = 'sa-east-1';
    $scope.bucket = new AWS.S3({
        region: 'sa-east-1',
        params: {
            Bucket: 'storage.mercadofacil.site'
        }
    })

    $scope.imagens = []
    $scope.count = 0

    $scope.pre_files = []
    $scope.file_changed = function(element) {
        var file = element.files
        console.log($scope.data.fotos);
        if(file.length > 10 || $scope.data.fotos.length >= 10){
            alert('Você só pode adicionar no máximo 10 imagens.');
            return;
        }
        angular.forEach(file, function(file, k) {
            $scope.count++
                $scope.$apply()
            $scope.bucket.upload({
                Key: 'mercadofacil/Mercado-Facil-' + new Date().getTime() + '-' + file.name,
                ContentType: file.type,
                Body: file
            }, function(err, data) {
                $scope.count--
                    $scope.data.fotos.push({
                        "url": data.Location,
                        "key": data.Key
                    })
                $scope.pre_files.push({
                    "url": data.Location,
                    "key": data.Key
                })
                $scope.$apply()
            });
            
        })
    };




    $scope.excluir_imagem = function(k, key) {
        $scope.bucket.deleteObject({
            Key: key
        }, function(err, data) {
            $scope.data.fotos.splice(k, 1)
            $scope.pre_files.splice(k, 1)
            $scope.$apply()
        })
    }




    $scope.menu = function(navID) {
        $mdSidenav(navID).toggle()
    }


    $scope.add_item = function() {
        
        console.log($scope.data);
        // Verifica se todos os campos obrigatórios foram preenchidos
        $scope.isLoading = true;
        erro = false;
        if(!$scope.data.title){
            erro = "Você deixou de preencher o título do anúncio.";
        }else if(!$scope.data.desc){
            erro = "Você deixou de preencher a descrição do anúncio.";
        }else if(!$scope.data.valor_compra){
            erro = "Você deixou de preencher o valor do anúncio.";
        }else if(!$scope.data.fotos || $scope.data.fotos.length == 0){
            erro = "Você precisa colocar fotos no anúncio.";
        }else if(!$scope.data.pagamento.dinheiro && !$scope.data.pagamento.mercadopago && !$scope.data.pagamento.pagseguro && !$scope.data.pagamento.cartao){
            erro = "Você deixou de selecionar a forma de pagamento.";
        }else if(!$scope.data.cat.pcat){
            erro = "Você precisa selecionar uma categoria.";
        }else if(!$scope.data.cat.scat){
            erro = "Você precisa selecionar uma categoria secundária.";
        }else if($scope.data.cat.scat.containSub == true && !$scope.data.cat.tcat){
            erro = "Você precisa selecionar uma categoria terciária.";
        }
            
        // Exibi o erro caso algum campo não tenha sido preenchido com sucesso
        if(erro)
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Ooops!')
                .textContent(erro)
                .ariaLabel(erro)
                .ok('OK')
            );
        else
            $rootScope.socket.emit("cadastrar_item", $scope.data, $scope.user)
            
        // Para o carregamento circular
        $scope.isLoading = false;
    }
    
    
    $rootScope.socket.on("cadastrar_item_resposta", function() {
        $state.go("done")

    })

})