app.controller("BlogEditCtrl", function($scope, $routeParams, $location, Blog) {

  if ($routeParams.id) {
    $scope.Blog = Blog.show({ id: $routeParams.id });
  } else {
    $scope.Blog = new Blog();
  }

  $scope.submit = function() {
    console.log("submit");

    function success(response) {
      console.log("success", response);
      $location.path("/Blog");
    }

    function failure(response) {
      console.log("failure", response);

      _.each(response.data, function(errors, key) {
        if (errors.length > 0) {
          _.each(errors, function(e) {
            $scope.form[key].$dirty = true;
            $scope.form[key].$setValidity(e, false);
          });
        }
      });
    }

    if ($routeParams.id) {
      Blog.update($scope.Blog, success, failure);
    } else {
      Blog.create($scope.Blog, success, failure);
    }

  };

  $scope.cancel = function() {
    $location.path("/Blog/"+$scope.Blog._id);
    $location.url("/Blog");
  };

  $scope.errorClass = function(name) {
    var s = $scope.form[name];
    return s.$invalid && s.$dirty ? "error" : "";
  };

  $scope.errorMessage = function(name) {
    var s = $scope.form[name].$error;
    result = [];
    _.each(s, function(key, value) {
      result.push(value);
    });
    return result.join(", ");
  };

  $scope.deletePost = function(){
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