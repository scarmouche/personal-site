'use strict';

/**
Contact Page Directive
**/

angular.module('smouche')
  .directive('homePage', [ function () {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: '/views/home.html',
      link: function(scope, element, attr) {

      }
    };
  }]);
