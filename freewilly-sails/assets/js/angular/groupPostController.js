myApp.controller('groupPostController', ['$scope', '$http', function($scope, $http) {
  $scope.posts = {};

  $scope.loadPosts = function(){

    var grupo = {};

    grupo.usuario = sessionStorage.getItem("usuario");
    grupo.idGrupo = getParameterByName('group');

    $http.post('http://localhost:1337/post/getByGrupo', grupo).then(function(response) {
      console.log(response.data.sucesso + "rf");
      if(response.data.sucesso == true)
      {
        $scope.posts = response.data.rows;
      }
    });
  }

  $scope.like = function(index){
    $scope.posts[index].reacao = 1;

    var postReacao = {};

    postReacao.idPost = $scope.posts[index].idpost;
    postReacao.usuario = sessionStorage.getItem('usuario');
    postReacao.reacao = 1;
    postReacao.compartilhou = $scope.posts[index].compartilhou;
    postReacao.donoPost = $scope.posts[index].donopost;

    $http.post("http://localhost:1337/postreacao/create", postReacao).then(function(response) {
      if(response.data.sucesso){
        console.log('sucesso');
      } else {
        $http.post("http://localhost:1337/postreacao/set", postReacao).then(function(res) {
          if(res.data.sucesso)
            console.log('sucesso no set');
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
    postReacao.donoPost = $scope.posts[index].donopost;

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
    postReacao.donoPost = $scope.posts[index].donopost;

    if(postReacao.donoPost == null || postReacao.donoPost == undefined || postReacao.donoPost == "")
      postReacao.donoPost = $scope.posts[index].usuario;

    $http.post("http://localhost:1337/postreacao/create", postReacao).then(function(response) {
      if(response.data.sucesso){
        console.log('sucesso');
      } else {
        $http.post("http://localhost:1337/postreacao/set", postReacao).then(function(res) {
          if(res.data.sucesso)
            console.log('sucesso no set');
        });
      }
    });

    console.log(postReacao.donoPost);

    var post = {};
    post.usuario = sessionStorage.getItem('usuario');
    post.titulo = $scope.posts[index].titulo;
    post.conteudo = $scope.posts[index].conteudo + " (shared from @" + postReacao.donoPost + ")";
    
    $http.post("http://localhost:1337/post/create", post).then(function(response) {
      if(response.data.sucesso)
        console.log('compartilhado');
    });
  }

}]);