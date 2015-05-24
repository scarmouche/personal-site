'use strict';

/**
Contact Page Directive
**/

angular.module('personalAngularApp')
  .directive('contactPage', [ function () {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: '/views/contact.html',
      link: function(scope, element, attr) {

      }
    };
  }]);
