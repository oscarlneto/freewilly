myApp.controller('myGroupsListController', ['$scope', '$http', function($scope, $http) {

  $scope.groups = {};

  $scope.loadGroups = function(){
    var usuario = {usuario: sessionStorage.getItem("usuario")};

    $http.post('http://localhost:1337/Grupo/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso)
       $scope.groups = response.data.rows;
   });

  }

  $scope.loadUserGroups = function(){

    var usuario = {usuario: getParameterByName('username')};

    $http.post('http://localhost:1337/Grupo/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso)
       $scope.groups = response.data.rows;
   });

  }

}]);