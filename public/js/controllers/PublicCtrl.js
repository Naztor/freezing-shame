app.controller("PublicCtrl", function($scope, $routeParams, Blog) {
  $scope.Blog = Blog.show({ id: $routeParams.id });
});