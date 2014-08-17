'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ["ngRoute", "ngResource", "textAngular"]).
  config(['$routeProvider', '$locationProvider','$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    //use passport to check if a user is authenticated when they try to access a specified page.
    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){

      var deferred = $q.defer();

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
    //an interceptor for ajax errors
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
              $location.url('/Login');
            return $q.reject(response);
          }
        );
      };
    });


    $routeProvider
      .when("/Public", {templateUrl: "partials/public.jade", controller: "PublicCtrl"})
      .when("/Login", {templateUrl: "partials/login.jade", controller: "LoginCtrl"})
      .when("/Register", {templateUrl: "partials/register.jade", controller: "RegisterCtrl"})
      .when("/Blog", { templateUrl: "partials/index.jade", controller: "BlogIndexCtrl", resolve: {loggedin: checkLoggedin} })
      .when("/Blog/new", { templateUrl: "partials/edit.jade", controller: "BlogEditCtrl" })
      .when("/Blog/:id", { templateUrl: "partials/show.jade", controller: "BlogShowCtrl" })
      .when("/Blog/:id/edit", { templateUrl: "partials/edit.jade", controller: "BlogEditCtrl" })
      .otherwise({ redirectTo: "/Public" });
  }]);
app.run(function($rootScope, $http){
    $rootScope.message = '';

    // Logout function is available on any page, however it is not implemented.
    $rootScope.logout = function(){
      $rootScope.message = 'Logged out.';
      $http.post('/logout');
    };
  });