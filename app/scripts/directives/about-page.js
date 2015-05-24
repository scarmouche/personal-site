'use strict';

/**
About Page Directive
**/

angular.module('personalAngularApp')
  .directive('aboutPage', [ function () {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: '/views/about.html',
      link: function(scope, element, attr) {

      }
    };
  }]);
