myApp.controller('groupIndexController', ['$scope', '$http', function($scope, $http) {
  $scope.group = {};
  $scope.admin = false;

  $scope.loadGroup = function(){

    var grupo = {};

    grupo.idGrupo = getParameterByName('group');

    $http.post('http://localhost:1337/grupo/get', grupo).then(function(response) {

      if(response.data.sucesso == true)
      {
        $scope.group = response.data.rows[0];
        if(response.data.rows[0].usuario == sessionStorage.getItem('usuario'))
          $scope.admin = true;
      }
    });



  }

  $scope.removeGroup = function(){
    var grupo = {};
    
    grupo.idGrupo = getParameterByName('group');

    $http.post('http://localhost:1337/grupo/remove', grupo).then(function(response) {

      if(response.data.sucesso == true)
      {
        console.log('sucesso');
      }
    });

  }

  $scope.updateGroup = function(){
    var group = {};

    group.usuario = sessionStorage.getItem('usuario');
    group.nome = $('#groupName').val();
    group.foto = 'thrall.png';
    group.descricao = $('#groupDescription').val();
    group.idGrupo = getParameterByName('group');

    $http.post('http://localhost:1337/Grupo/set', group).then(function(response) {
      if(response.data.sucesso)
        console.log('sucesso');
    });

  }


}]);