app.controller("BlogIndexCtrl", function($scope, $location, Blog) {
  $scope.Blog = Blog.index();

  $scope.new = function() {
    $location.path("/Blog/new");
  };

  $scope.searchTags = function() {
    find.{tags:{ $all: [" + $scope.searchbar + "]}}
    };
});