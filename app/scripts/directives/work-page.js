'use strict';

/**
Work Page Directive
**/

angular.module('smouche')
  .directive('workPage', [ function () {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: '/views/work.html',
      link: function(scope, element, attr) {

      }
    };
  }]);
