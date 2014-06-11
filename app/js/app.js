'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(function ($locationProvider) {//fixa för mini sedan
 $locationProvider.html5Mode(true);
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'Home'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'Login'});
  $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'Register'});
  $routeProvider.when('/products', {templateUrl: 'partials/products.html', controller: 'Products'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
