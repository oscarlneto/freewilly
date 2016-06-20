myApp.controller('newGroupController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.banner = 'panel-body bgimg';

  $scope.createGroup = function(){
    var group = {};

    group.usuario = sessionStorage.getItem('usuario');
    group.nome = $('#groupName').val();
    group.foto = 'thrall.png';
    group.descricao = $('#groupDescription').val();

    $http.post('http://localhost:1337/Grupo/create', group).then(function(response) {
      if(response.data.sucesso) {
        group.idGrupo = response.data.rows[0].idgrupo;
        $http.post('http://localhost:1337/GrupoUsuarios/create', group);
        $window.location.href = 'http://localhost:1337/freewilly/profile';
      }
    });
  }
}]);