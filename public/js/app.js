'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ["ngRoute", "ngResource"]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/Register", {templateUrl: "partials/register.jade", controller: "RegisterCtrl"})
      .when("/Blog", { templateUrl: "partials/index.jade", controller: "BlogIndexCtrl" })
      .when("/Blog/new", { templateUrl: "partials/edit.jade", controller: "BlogEditCtrl" })
      .when("/Blog/:id", { templateUrl: "partials/show.jade", controller: "BlogShowCtrl" })
      .when("/Blog/:id/edit", { templateUrl: "partials/edit.jade", controller: "BlogEditCtrl" })
      .otherwise({ redirectTo: "/Blog" });
  }]);