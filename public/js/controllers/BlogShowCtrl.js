app.controller("BlogShowCtrl", function($scope, $routeParams, Blog) {
  $scope.Blog = Blog.show({ id: $routeParams.id });
});