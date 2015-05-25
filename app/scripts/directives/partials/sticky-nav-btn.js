'use strict';

/**
Sticky Nav Button Directive
**/

angular.module('smouche')
  .directive('stickyNavBtn', [ function () {
    return {
      restrict: 'E',
      scope: {
        icon: '@',
        href: '@'
      },
      replace: false,
      template: '<li><a href="{{href}}"><i class="fontawesome-{{icon}}"></i></a></li>',
      link: function(scope, element, attr) {

      }
    };
  }]);
