'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('Home', ['$scope', 'UserService', function($scope, UserService) {
    $scope.name = UserService.getUsername();
  }])

  .controller('Login', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {

    // http://www.ng-newsletter.com/posts/validations.html

    $scope.sendForm = function(){
      $http.post('../server/login.php', $scope.user).success(function(data){
        if(data.authenticated === true && data.username === $scope.user.username){
          UserService.setUsername(data.username);
          $location.path('/home');
        }else{
          $scope.message = 'Your login failed';
        }
      });
    }

  }])

  .controller('Register', [function() {

  }])

  .controller('Products', ['$scope', '$http', 'BasketService', function($scope, $http, BasketService){
    /*
    $scope.products = [
      {name:'iPhone 5', brand:'Apple', rating:'6/10', price:100},
      {name:'Galaxy', brand:'Samsung', rating:'5/10', price:120},
      {name:'Nexus', brand:'LG', rating:'4/10', price:130},
      {name:'iPhone 4', brand:'Apple', rating:'4/10', price:90},
      {name:'Blackberry', brand:'Blackberry', rating:'9/10', price:220}
    ];
    */
    $scope.addToBasket = BasketService.add;

    $http.get('../server/products.php').success(function(data){
      console.log('product data', data);
      $scope.products = data;
    });

  }])

  .controller('MenuCtrl', ['$scope', '$http', function($scope, $http){

    $scope.menu = [];

    $http.get('../server/menu.php').success(function(data){
      console.log('MenuCtrl response data', data);
      $scope.menu = data;
    });    

  }])

  .controller('BasketCtrl', ['$scope', 'BasketService', function($scope, BasketService){
    $scope.title = 'Shopping basket';
    $scope.items = BasketService.getItems();
    $scope.getTotal = BasketService.getTotal;
  }])

  .service('BasketService', function(){

    var items = [];

    return {
      add: function(item){
        items.push(item);
        console.log(items);
      },
      getItems: function(){
        return items;
      },
      getTotal: function(){
        var total = 0;
        for(var i=0; i < items.length; i++){
          total += items[i].price; //(items[i].price * items[i].qty);
        }
        return total;
      }
    }

  });















