app.controller("PublicCtrl", function($scope, $routeParams, Blog) {
  $scope.Blog = Blog.index();
});