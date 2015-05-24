'use strict';

/**
 * @ngdoc overview
 * @name personalAngularApp
 * @description
 * # personalAngularApp
 *
 * Main module of the application.
 */
 
angular
  .module('personalAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home-page></home-page>'
      })
      .state('work', {
        url: '/work',
        template: '<work-page></work-page>'
      })
      .state('about', {
        url: '/about',
        template: '<about-page></about-page>'
      })
      .state('contact', {
        url: '/contact',
        template: '<contact-page></contact-page>'
      });

    $locationProvider.html5Mode(true);

  });
