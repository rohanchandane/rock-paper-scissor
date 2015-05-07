'use strict';

/**
 * @ngdoc overview
 * @name rockPaperScissorsApp
 * @description
 * # rockPaperScissorsApp
 *
 * Main module of the application.
 */
angular
    .module('rockPaperScissorsApp', [
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
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
