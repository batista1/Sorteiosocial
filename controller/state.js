app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdDateLocaleProvider){
  
   $mdThemingProvider.theme('default')
   .backgroundPalette('grey', {
                'default': '100'
            })
   .primaryPalette('teal', {
                'default': '200'
            })
  
   $mdThemingProvider.theme('dark').dark()
  $stateProvider
  .state('app', {
    url: "/app",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "view": { templateUrl: "template/root.html?a"+ window.version, controller: 'root'}
       }
  })
    .state('app.pay', {
      url: "/pay",
      views: {
          "subview": { templateUrl: "template/pay.html?"+ window.version, controller : "pay"}
         }
    })
  .state('app.home', {
    url: "/home",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "subview": { templateUrl: "template/home.html?"}
       }
  })
  .state('app.new_sort', {
    url: "/new_sort",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "subview": { templateUrl: "template/new_sort.html?"+ window.version,  controller: 'new_sort'}
       }
  })
  .state('app.search_sort', {
    url: "/search_sort",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "subview": { templateUrl: "template/search_sort.html?"+ window.version,  controller: 'search_sort'}
       }
  })
  .state('app.my_sort', {
    url: "/my_sort",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "subview": { templateUrl: "template/my_sort.html?"+ window.version,  controller: 'my_sort'}
       }
  })
  .state('app.my_part', {
    url: "/my_part",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "subview": { templateUrl: "template/my_part.html?"+ window.version,  controller: 'my_part'}
       }
  })
  .state('app.details', {
    url: "/details/:user/:id",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "subview": { templateUrl: "template/details.html?"+ window.version, controller: "details"}
       }
  })
  .state('login', {
    url: "/login",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "view": { templateUrl: "template/login.html?"+ window.version, controller: 'login'}
       }
  })
  .state('autologin', {
    url: "/autologin",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "view": { controller: 'autologin'}
       }
  })
  .state('register', {
    url: "/register",
    views: {
        //"painel": { templateUrl: "template/root/panel/panel.html?"+ window.version, controller: "painel"} ,
        "view": { templateUrl: "template/register.html?"+ window.version,controller: "register"}
       }
  })
  $urlRouterProvider.otherwise("/login")
})