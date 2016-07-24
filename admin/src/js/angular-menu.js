  angular.module('common.services', ['common.services'])
  .factory('menu', [
      '$location',
      '$rootScope',
      function ($location) {

        var sections = [];

        sections.push({
          name: 'Cadastros',
          type: 'toggle',
          ico: 'file-document-box',
          pages: [{
            name: 'Clientes',
            type: 'link',
            state: 'vpad.cliente',
            icon: 'account-multiple-outline'
          }, {
            name: 'Serviços',
            state: 'vpad.service',
            type: 'link',
            icon: 'briefcase'
          }, {
            name: 'Produtos',
            state: 'vpad.product',
            type: 'link',
            icon: 'camera'
          }]
        });

        var self;

        return self = {
          sections: sections,

          toggleSelectSection: function (section) {
            self.openedSection = (self.openedSection === section ? null : section);
          },
          isSectionSelected: function (section) {
            return self.openedSection === section;
          },

          selectPage: function (section, page) {
            page && page.url && $location.path(page.url);
            self.currentSection = section;
            self.currentPage = page;
          }
        };

        function sortByHumanName(a, b) {
          return (a.humanName < b.humanName) ? -1 :
            (a.humanName > b.humanName) ? 1 : 0;
        }

      }])
      
   
  angular.module('ngMenu', ['common.services'])
  .run(['$templateCache', function ($templateCache) {
      $templateCache.put('partials/menu-toggle.tmpl.html',
        '<md-list-item class="md-button-toggle"\n' +
        '  ng-click="toggle()"\n' +
        '  style="padding:0px"\n'+
        '  aria-controls="docs-menu-{{section.name | nospace}}"\n' +
        '  flex layout="row"\n' +
        '  aria-expanded="{{isOpen()}}">\n' +
        '  <md-item-content style="width: 90%;"md-ink-ripple layout="row" layout-align="start center">\n'+
        '  <div class="inset"><md-icon md-svg-icon="{{section.ico}}"></md-icon></div>\n' +
        '  <div class="inset" flex>{{section.name}}</div>\n' +
        '  <div class="inset"><md-icon aria-hidden="true" md-svg-icon="arrow-down" class=" pull-right md-toggle-icon"\n' +
        '  ng-class="{\'toggled\' : isOpen()}"></md-icon></div>\n' +
        '  </md-item-content>\n'+
        '</md-list-item>\n' +
        '<md-list ng-show="isOpen()" id="docs-menu-{{section.name | nospace}}" class="menu-toggle-list">\n' +
        '  <div  ng-repeat="page in section.pages">\n' +
        '    <menu-link section="page"></menu-link>\n' +
        '  </div>\n' +
        '</md-list>\n' +
        '');
    }])
 .directive('menuToggle', ['$timeout', function ($timeout ) {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'partials/menu-toggle.tmpl.html',
        link: function (scope, element) {
          var controller = element.parent().controller();

          scope.isOpen = function () {
            return controller.isOpen(scope.section);
          };
          scope.toggle = function () {
            controller.toggleOpen(scope.section);
          };
          
          var parentNode = element[0].parentNode.parentNode.parentNode;
          if (parentNode.classList.contains('parent-list-item')) {
            var heading = parentNode.querySelector('h2');
            element[0].firstChild.setAttribute('aria-describedby', heading.id);
          }
        }
      };
    }])

    .run(['$templateCache', function ($templateCache) {
      var p = "painelprincipal"
      $templateCache.put('partials/menu-link.tmpl.html',
        '<md-list-item ui-sref-active="active"  \n' +
        '  ui-sref="{{section.state}}" ng-click="focusSection();console.log('+p+')">\n' +
        '    <div style="padding-left: 24px;" class="inset"><md-icon md-svg-icon="{{section.icon}}"></md-icon></div>'+
        '    <div class="inset">{{section | humanizeDoc}}</div>\n' +
        '</md-list-item>\n' +
        '');
    }])
    .directive('menuLink', function () {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'partials/menu-link.tmpl.html',
        link: function ($scope, $element) {
          var controller = $element.parent().controller();

          $scope.focusSection = function () {
            // set flag to be used later when
            // $locationChangeSuccess calls openPage()
            controller.autoFocusContent = true;
          };
        }
      };
    })







 //take all whitespace out of string
    .filter('nospace', function () {
      return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
      };
    })
    //replace uppercase to regular case
    .filter('humanizeDoc', function () {
      return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
          return doc.name.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }
        
        return doc.label || doc.name;
      };
  });






























