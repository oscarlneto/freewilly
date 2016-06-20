myApp.controller('profileController', ['$scope', '$http', '$window', 'authenticationService', function($scope, $http, $window, authenticationService) {
  $scope.usuario = {};
  $scope.following = {};

  $scope.loadUser = function(){
    var usuario = {usuario: sessionStorage.getItem("usuario")};
    $http.post("http://localhost:1337/usuario/get", usuario).then(function(response) {
      $scope.usuario = response.data.rows[0];
    });
  }

  $scope.loadUserUser = function(){
    var usuario = {};

    usuario.usuario = getParameterByName('username');
    $http.post("http://localhost:1337/usuario/get", usuario).then(function(response) {
      $scope.usuario = response.data.rows[0];
    });

    var usuario2 = {};

    usuario2.usuario = sessionStorage.getItem("usuario");
    usuario2.follow = getParameterByName('username');

    $http.post("http://localhost:1337/follow/getByUsuarioFollow", usuario2).then(function(response) {
      if(response.data.rowCount == 1){
        $scope.following = true;
      } else {
        $scope.following = false;
      }

    });

  }

  $scope.updateUser = function(){
    var usuario = {};

    usuario.usuario = $scope.usuario.usuario;
    usuario.senha = $scope.usuario.senha;
    usuario.nome = $('#name').val();
    usuario.aniversario =  $('#date').val();
    usuario.foto = $('#avatar').val();
    usuario.descricao = $('#description').val();


    $http.post('http://localhost:1337/usuario/set', usuario).then(function(response) {
      if(response.data.sucesso)
       $window.location.href = 'http://localhost:1337/freewilly/index';
   });
  }

  $scope.removeUser = function(){
    var usuario = {};

    usuario.usuario = $scope.usuario.usuario;

    $http.post('http://localhost:1337/usuario/remove', usuario).then(function(response) {
      if(response.data.sucesso)
       $window.location.href = 'http://localhost:1337/freewilly/login';
   });
  }

  $scope.follow = function(){
    var usuario = {};

    usuario.usuario = sessionStorage.getItem("usuario");
    usuario.follow = getParameterByName('username');

    $http.post("http://localhost:1337/follow/create", usuario).then(function(response) {
      if(response.data.sucesso == true){
        $scope.following = true;
      }
    });

  }

  $scope.unfollow = function(){
    var usuario = {};

    usuario.usuario = sessionStorage.getItem("usuario");
    usuario.follow = getParameterByName('username');

    $http.post("http://localhost:1337/follow/remove", usuario).then(function(response) {
      if(response.data.sucesso == true){
        $scope.following = false;
      }
    });

  }



}]);
