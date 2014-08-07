app.controller("RegisterCtrl", function($scope, $routeParams, $location, User) {

$scope.submit = function(){
  User.create($scope.UserData);
  console.log($scope.UserData);
};


});