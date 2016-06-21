myApp.controller('followingController', ['$scope', '$http', function($scope, $http) {

  $scope.users = {};
  $scope.count = 0;

  $scope.loadUsers = function(){
    var usuario = {usuario: sessionStorage.getItem("usuario")};

    $http.post('http://localhost:1337/follow/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso){
       $scope.users = response.data.rows;
       $scope.count = response.data.rowCount;
     }
   });

  }
}]);