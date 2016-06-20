myApp.controller('loginController', ['$scope', '$http', '$window', function($scope, $http, $window) {

  $scope.signIn = function(){

    var usuario = {};

    usuario.usuario = $('#login').val();
    usuario.senha = $('#password').val();
    
    $http.post('http://localhost:1337/usuario/login', usuario).then(function(response) {

      if(response.data.sucesso == true)
      {
        sessionStorage.setItem("usuario", $('#login').val());
        sessionStorage.setItem("autenticou", "true");

        $window.location.href = 'http://localhost:1337/freewilly/index';
      }
    });
  }

}]);