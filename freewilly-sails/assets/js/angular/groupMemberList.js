myApp.controller('groupMemberList', ['$scope', '$http', function($scope, $http) {
  $scope.members = {};
  $scope.addButton = true;
  $scope.admin = {};

  $scope.loadMembers = function(){

    var grupo = {};

    grupo.idGrupo = getParameterByName('group');

    $http.post('http://localhost:1337/GrupoUsuarios/getByIdGrupo', grupo).then(function(response) {

      if(response.data.sucesso == true)
      {
        $scope.members = response.data.rows;
      }
    });

    $http.post('http://localhost:1337/GrupoUsuarios/getByIdGrupo', grupo).then(function(response) {

      if(response.data.sucesso == true)
      {
        $scope.admin = response.data.rows[0].usuario;
      }
    });


  }

  $scope.addMember = function(){
    var grupoUsuarios = {};

    grupoUsuarios.usuario = $('#newMemberUsername').val();
    grupoUsuarios.idGrupo = getParameterByName('group');

    $http.post('http://localhost:1337/grupoUsuarios/create', grupoUsuarios).then(function(response) {

        //$scope.members.push({usuario: grupoUsuarios.nome});
      });


  }

  $scope.showForm = function(){
    $scope.addButton = false;
  }

  $scope.hideForm = function(){
    $scope.addButton = true;
  }


}]);