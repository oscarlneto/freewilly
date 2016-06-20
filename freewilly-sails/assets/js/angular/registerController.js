myApp.controller('registerController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.avatar = 'thrall.png';

  $scope.createUser = function(){
    var usuario = {};

    usuario.usuario = $('#login').val();
    usuario.senha = $('#password').val();
    usuario.nome = $('#name').val();
    usuario.aniversario = $('#date').val();
    usuario.foto = $('#avatar').val();
    usuario.descricao = $('#description').val();

    $http.post('http://localhost:1337/usuario/create', usuario).then(function(response) {
      if(response.data.sucesso)
       $window.location.href = 'http://localhost:1337/freewilly/login';
   });
  }

}]);