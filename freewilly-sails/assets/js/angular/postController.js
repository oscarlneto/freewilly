myApp.controller('postController', ['$scope', '$http', function($scope, $http) {

  $scope.posts = {};

  $scope.like = function(index){
    $scope.posts[index].reacao = 1;

    var postReacao = {};

    postReacao.idPost = $scope.posts[index].idpost;
    postReacao.usuario = sessionStorage.getItem('usuario');
    postReacao.reacao = 1;
    postReacao.compartilhou = $scope.posts[index].compartilhou;

    $http.post("http://localhost:1337/postreacao/create", postReacao).then(function(response) {
      if(response.data.sucesso){

      } else {
        $http.post("http://localhost:1337/postreacao/set", postReacao).then(function(res) {
          if(res.data.sucesso)
			  console.log('sucesso');

        });
      }
    });

  }

  $scope.unlike = function(index){
    $scope.posts[index].reacao = 0;

    var postReacao = {};

    postReacao.idPost = $scope.posts[index].idpost;
    postReacao.usuario = sessionStorage.getItem('usuario');
    postReacao.reacao = 0;
    postReacao.compartilhou = $scope.posts[index].compartilhou;

    $http.post("http://localhost:1337/postreacao/set", postReacao).then(function(response) {
      if(response.data.sucesso)
		   console.log('sucesso');

    });

  }

  $scope.share = function(index){
    $scope.posts[index].compartilhou = true;

    var postReacao = {};

    postReacao.idPost = $scope.posts[index].idpost;
    postReacao.usuario = sessionStorage.getItem('usuario');
    postReacao.reacao = $scope.posts[index].reacao;
    postReacao.compartilhou = true;

    $http.post("http://localhost:1337/postreacao/create", postReacao).then(function(response) {
      if(response.data.sucesso){

      } else {
        $http.post("http://localhost:1337/postreacao/set", postReacao).then(function(res) {
          if(res.data.sucesso)
            console.log('sucesso');
        });
      }
    });

    var post = {};
    post.usuario = sessionStorage.getItem('usuario');
    post.titulo = $scope.posts[index].titulo;
    post.conteudo = $scope.posts[index].conteudo + " (shared from @" + $scope.posts[index].usuario + ")";
    
    $http.post("http://localhost:1337/post/create", post).then(function(response) {
      if(response.data.sucesso)
        console.log('sucesso');
    });
  }

  $scope.loadPosts = function(){
   var usuario = {usuario: sessionStorage.getItem('usuario')};

   $http.post("http://localhost:1337/post/getByUsuarioFollow", usuario).then(function(response) {

    $scope.posts = response.data.rows;
  });
 }


}]);