'use strict';

/**
Sticky Nav Directive
**/

angular.module('smouche')
  .directive('stickyNav', [ function () {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: '/views/partials/sticky-nav.html',
      link: function(scope, element, attr) {

      }
    };
  }]);
