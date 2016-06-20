myApp.controller('updatePostController', ['$scope', '$http', '$window', function($scope, $http, $window) {

  $scope.post = {};

  $scope.loadPost = function(){

    var post = {};
    post.idPost = getParameterByName('idpost');

    $http.post('http://localhost:1337/post/get', post).then(function(response) {

      if(response.data.sucesso == true) {
        $scope.post = response.data.rows[0];
      }
    });
  }

  $scope.removePost = function(){
    
    var post = {};
    post.idPost = getParameterByName('idpost');

    $http.post('http://localhost:1337/post/remove', post).then(function(response) {
      $window.location.href = 'http://localhost:1337/freewilly/profile';
    });
  }

  $scope.updatePost = function(){
  
    var post = {};
    post.idPost = getParameterByName('idpost');
    post.usuario = sessionStorage.getItem('usuario');
    post.titulo = $('#postTitle').val();
    post.conteudo = $('#postContent').val();
    post.idGrupo =  $scope.post.idgrupo;

    $http.post('http://localhost:1337/post/set', post).then(function(response) {
      $window.location.href = 'http://localhost:1337/freewilly/profile';
    });

  }

}]);