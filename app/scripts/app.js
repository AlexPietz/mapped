'use strict';

/**
 * @ngdoc overview
 * @name mappedApp
 * @description
 * # mappedApp
 *
 * Main module of the application.
 */


$(document).ready(function() {

  var map = L.mapbox.map('map', 'jmlabs.k3egm800', {
    center: [35.59, -82.56], // lat, long
    zoom: 13
  });


angular
  .module('mappedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
