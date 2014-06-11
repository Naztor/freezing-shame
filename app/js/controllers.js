'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  
  controller('Home', ['$scope', function($scope) {
    $scope.name = '';
    $scope.getName = function() {$scope.name = 'Banana'; return $scope.name};
  }])

  .controller('Login', [function() {

  }])

  .controller('Register', [function() {

  }])

  .controller('Products', ['$scope', '$http', function($scope) {
    /*
    $scope.products = [
    {name: "iPhone", brand:"Apple", fruit:"Bananaphone", rating:"4/10", price:1000000},
    {name: "Galaxy", brand:"Samsung", fruit:"Banana", rating:"5/10", price:7000},
    {name: "Nexus", brand:"LG", fruit:"Banana", rating:"6/10", price:5000},
    {name: "Blackberry", brand:"Blackberry", fruit:"somewhat banana" ,rating:"9/10" ,price:100},
    {name: "Crapphone", brand: "Crappy", fruit:"I can't belive it's not banana", rating: "0/10", price:0}
    ];*/

    $http.get('../server/products.php').success(function(data) {
      console.log('product data', data);
  }]);