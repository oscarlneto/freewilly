myApp.controller('indexController', ['$scope', '$http', function($scope, $http) {
  $scope.usuario = {};

  $scope.loadUser = function(){
    var usuario = {usuario: sessionStorage.getItem('usuario')};

    $http.post("http://localhost:1337/usuario/get", usuario).then(function(response) {
      $scope.usuario = response.data.rows[0];

    });
  }

}]);