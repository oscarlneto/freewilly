myApp.controller('allUsersController', ['$scope', '$http', function($scope, $http) {
  $scope.allusers = {};

  $scope.loadUsers = function(){

    var usuario = {usuario: sessionStorage.getItem("usuario")};

    $http.post('http://localhost:1337/usuario/getAll', usuario).then(function(response) {
      $scope.allusers = response.data.rows;
    });
  }

  $scope.follow = function(index){
    $scope.allusers[index].followed = true;
  }

  $scope.unfollow = function(index){
    $scope.allusers[index].followed = false;
  }

}]);