app.controller('LoginCtrl', function($scope, $rootScope, $http, $location) {
  $scope.user = {};

  $scope.login = function(){
    $http.post('/Login', {
      username: $scope.user.username,
      password: $scope.user.password,
    })
    .success(function(user){
      $rootScope.message = 'Authentication successful!';
      $location.url('/Blog');
    })
    .error(function(){
      $rootScope.message = 'Authentication failed.';
      $location.url('/Login');
    });
  };
});