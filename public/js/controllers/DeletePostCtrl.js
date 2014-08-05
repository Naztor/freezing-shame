app.controller("DeletePostCtrl", function($scope, $routeParams, $location, Blog) {

  function DeletePostCtrl($scope, $http, $location, $routeParams) {
    $http.get('/api/post/' + $routeParams.id).
      success(function(data) {
        $scope.post = data.post;
      });
  };

  $scope.deletePost = function(id){
    var c = confirm("Are you sure that you want to delete the post?");
    if (c === true) {
      Blog.delete({id:$routeParams.id});
      console.log("post deleted");
      $location.url("/Blog");
    }
    else{
      $scope.cancel();
    }
  };
});