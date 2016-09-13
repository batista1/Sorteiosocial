app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdDateLocaleProvider){
  $mdDateLocaleProvider.shortMonths = ['jan', 'fev', 'mar','abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
   $mdThemingProvider.theme('default')
   .backgroundPalette('grey', {
                'default': '100'
            })
   .primaryPalette('light-blue', {
                'default': '600'
            })
   $mdThemingProvider.theme('dark').dark()
   .backgroundPalette('grey', {
                'default': '100'
            })	
  $stateProvider
  .state('auth', {
    url: "/auth",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "view": { templateUrl: "template/autologin.html?"+ window.version,controller: "autologin"}
       }
  })
  .state('app', {
    url: "/app",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "view": { templateUrl: "template/root.html?"+ window.version,controller: "Main"}
       }
  })
  .state('app.home', {
    url: "/home",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/home.html?"+ window.version/*,controller: "Main"*/}
       }
  })
  .state('app.users', {
    url: "/users",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/users.html?"+ window.version,controller: "users"}
       }
  })
  .state('app.adverts', {
    url: "/adverts",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/adverts.html?da"+ window.version,controller: "adverts"}
       }
  })
  .state('app.advert', {
    url: "/advert/:id",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/advert.html?da"+ window.version,controller: "advert"}
       }
  })
  .state('app.product', {
    url: "/product",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/product.html?assa"+ window.version,controller: "product"}
       }
  })
  .state('app.add_product', {
    url: "/add_product",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/add_product.html?"+ window.version,controller: "add_product"}
       }
  })
  .state('app.faq', {
    url: "/faq",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/faq.html?sa"+ window.version,controller: "faq"}
       }
  })
  .state('app.depoimentos', {
    url: "/depoimentos",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/depoimentos.html?"+ window.version,controller: "depoimentos"}
       }
  })
  .state('app.parceiros', {
    url: "/parceiros",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/parceiros.html?"+ window.version,controller: "parceiros"}
       }
  })
  .state('app.config', {
    url: "/config",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "root": { templateUrl: "template/config.html?a"+ window.version,controller: "config"}
       }
  })
  .state('locais', {
    url: "/locais",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "view": { templateUrl: "template/locais.html?"+ window.version,controller: "locais"}
       }
  })
  $urlRouterProvider.otherwise("/app/home")
})