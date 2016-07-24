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
        "root": { templateUrl: "template/home.html?"+ window.version,controller: "Main"}
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
        "root": { templateUrl: "template/adverts.html?"+ window.version,controller: "adverts"}
       }
  })
  .state('config', {
    url: "/config",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "view": { templateUrl: "template/config.html?"+ window.version,controller: "config"}
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