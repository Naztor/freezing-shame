'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ["ngRoute", "ngResource", "textAngular"]).
  config(['$routeProvider', '$locationProvider','$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user){
        // Authenticated
        if (user !== '0')
          $timeout(deferred.resolve, 0);

        // Not Authenticated
        else {
          $rootScope.message = 'You need to log in.';
          $timeout(function(){deferred.reject();}, 0);
          $location.url('/login');
        }
      });

      return deferred.promise;
    };
    //================================================
    
    //================================================
    // Add an interceptor for AJAX errors
    //================================================
    $httpProvider.responseInterceptors.push(function($q, $location) {
      return function(promise) {
        return promise.then(
          // Success: just return the response
          function(response){
            return response;
          },
          // Error: check the error status to get only the 401
          function(response) {
            if (response.status === 401)
              $location.url('/login');
            return $q.reject(response);
          }
        );
      };
    });


    $routeProvider
      .when("/Login", {templateUrl: "partials/login.jade", controller: "LoginCtrl"})
      .when("/Register", {templateUrl: "partials/register.jade", controller: "RegisterCtrl"})
      .when("/Blog", { templateUrl: "partials/index.jade", controller: "BlogIndexCtrl", resolve: {loggedin: checkLoggedin} })
      .when("/Blog/new", { templateUrl: "partials/edit.jade", controller: "BlogEditCtrl" })
      .when("/Blog/:id", { templateUrl: "partials/show.jade", controller: "BlogShowCtrl" })
      .when("/Blog/:id/edit", { templateUrl: "partials/edit.jade", controller: "BlogEditCtrl" })
      .otherwise({ redirectTo: "/Login" });
  }]);
/*.run(function($rootScope, $http){
    $rootScope.message = '';

    // Logout function is available in any pages
    $rootScope.logout = function(){
      $rootScope.message = 'Logged out.';
      $http.post('/logout');
    };
  });*/