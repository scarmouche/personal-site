'use strict';

/**
Sticky Nav Directive
**/

angular.module('smouche')
  .directive('stickyNav', ['$window', function ($window) {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: '/views/partials/sticky-nav.html',
      link: function(scope, element, attr) {

        angular.element($window).bind('scroll', function() {

          if ($window.scrollY < 100 && element[0].style.position !== 'fixed') {
            scope.isStuck = false;
          } else {
            scope.isStuck = true;
          }
          scope.$apply();

        });
      }
    };
  }]);
