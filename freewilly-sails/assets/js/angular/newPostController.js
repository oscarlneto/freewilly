myApp.controller('newPostController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.inGroup = '';
  $scope.myGroups = {};

  $scope.loadMyGroups = function(){
    var usuario = {usuario: sessionStorage.getItem("usuario")};

    $http.post('http://localhost:1337/GrupoUsuarios/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso)

        $scope.myGroups = response.data.rows;
    });

  }

  $scope.createPost = function(index){
    var post = {};

    post.usuario = sessionStorage.getItem("usuario");
    post.titulo = $('#postTitle').val();
    post.conteudo = $('#postContent').val();
    post.idGrupo = $('#postGroup').val();

    $http.post('http://localhost:1337/post/create', post).then(function(response) {
      if(response.data.sucesso)
       $window.location.href = 'http://localhost:1337/freewilly/profile';
   });

  }


}]);
