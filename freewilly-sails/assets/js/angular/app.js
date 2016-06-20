
var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyController', ['$scope', '$http', function($scope, $http) {
  $scope.spice = 'very';

  $scope.chiliSpicy = function() {
    $scope.spice = 'chili';
  };

  $scope.jalapenoSpicy = function() {
    $scope.spice = 'jalapeño';
  };


  $http.get("http://localhost:1337/usuario/createUsuario").then(function(response) {
    console.log(response.data);
  });

}]);

myApp.controller('myPostsController', ['$scope', '$http', function($scope, $http) {

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
        console.log('sucesso');
      } else {
        $http.post("http://localhost:1337/postreacao/set", postReacao).then(function(res) {
          if(res.data.sucesso)
            console.log('sucesso no set');
        });
      }
    });

    var post = {};
    post.usuario = sessionStorage.getItem('usuario');
    post.titulo = $scope.posts[index].titulo;
    post.conteudo = $scope.posts[index].conteudo + " (shared from @" + $scope.posts[index].usuario + ")";
    
    $http.post("http://localhost:1337/post/create", post).then(function(response) {
      if(response.data.sucesso)
        console.log('compartilhado');
    });
  }



  $scope.loadPosts = function(){
    var usuario = {usuario: sessionStorage.getItem('usuario')};
    $http.post("http://localhost:1337/post/getByUsuario", usuario).then(function(response) {
      $scope.posts = response.data.rows;
    });
  }

  $scope.loadUserPosts = function(){
    var usuario = {usuario: sessionStorage.getItem('usuario'), follow: getParameterByName('username')};
    $http.post("http://localhost:1337/post/getByUsuarioFollowReacao", usuario).then(function(response) {
      $scope.posts = response.data.rows;
    });

  }

}]);

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
        console.log('sucesso');
      } else {
        $http.post("http://localhost:1337/postreacao/set", postReacao).then(function(res) {
          if(res.data.sucesso)
            console.log('sucesso no set');
        });
      }
    });

    var post = {};
    post.usuario = sessionStorage.getItem('usuario');
    post.titulo = $scope.posts[index].titulo;
    post.conteudo = $scope.posts[index].conteudo + " (shared from @" + $scope.posts[index].usuario + ")";
    
    $http.post("http://localhost:1337/post/create", post).then(function(response) {
      if(response.data.sucesso)
        console.log('compartilhado');
    });
  }

  $scope.loadPosts = function(){
   var usuario = {usuario: sessionStorage.getItem('usuario')};

   $http.post("http://localhost:1337/post/getByUsuarioFollow", usuario).then(function(response) {

    $scope.posts = response.data.rows;
  });
 }


}]);

myApp.controller('groupIndexController', ['$scope', '$http', function($scope, $http) {
  $scope.group = {};
  $scope.admin = false;

  $scope.loadGroup = function(){

    var grupo = {};

    grupo.idGrupo = getParameterByName('group');

    $http.post('http://localhost:1337/grupo/get', grupo).then(function(response) {

      if(response.data.sucesso == true)
      {
        console.log('rf ' + response.data);
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
        console.log('deletado');
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
        console.log(response.data.sucesso);
    });

  }


}]);

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
        console.log('sucesso');
      } else {
        $http.post("http://localhost:1337/postreacao/set", postReacao).then(function(res) {
          if(res.data.sucesso)
            console.log('sucesso no set');
        });
      }
    });

    var post = {};
    post.usuario = sessionStorage.getItem('usuario');
    post.titulo = $scope.posts[index].titulo;
    post.conteudo = $scope.posts[index].conteudo + " (shared from @" + $scope.posts[index].usuario + ")";
    
    $http.post("http://localhost:1337/post/create", post).then(function(response) {
      if(response.data.sucesso)
        console.log('compartilhado');
    });
  }

}]);

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


myApp.controller('newPostController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.inGroup = '';
  $scope.myGroups = {};

  $scope.loadMyGroups = function(){
    var usuario = {usuario: sessionStorage.getItem("usuario")};

    $http.post('http://localhost:1337/GrupoUsuarios/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso)

        $scope.myGroups = response.data.rows;
      console.log($scope.myGroups);
    });

  }

  $scope.createPost = function(index){
    var post = {};

    post.usuario = sessionStorage.getItem("usuario");
    post.titulo = $('#postTitle').val();
    post.conteudo = $('#postContent').val();
    post.idGrupo = $('#postGroup').val();

    /*if(post.idGrupo != ""){
      post.conteudo = post.conteudo + " (posted on @" + $scope.myGroups[index].nome + ")";
    }*/

    $http.post('http://localhost:1337/post/create', post).then(function(response) {
      if(response.data.sucesso)
       $window.location.href = 'http://localhost:1337/freewilly/profile';
   });

  }


}]);

myApp.controller('groupListController', ['$scope', '$http', function($scope, $http) {
  $scope.groups = {};

  $scope.loadGroups = function(){
    var usuario = {usuario: sessionStorage.getItem("usuario")};

    $http.post('http://localhost:1337/GrupoUsuarios/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso)
        $scope.groups = response.data.rows;
    });

  }

  $scope.loadUserGroups = function() {

    var usuario = {usuario: getParameterByName('username')};

    $http.post('http://localhost:1337/GrupoUsuarios/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso)
        $scope.groups = response.data.rows;
    });
  }

}]);

myApp.controller('myGroupsListController', ['$scope', '$http', function($scope, $http) {

  $scope.groups = {};

  $scope.loadGroups = function(){
    var usuario = {usuario: sessionStorage.getItem("usuario")};

    $http.post('http://localhost:1337/Grupo/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso)
       $scope.groups = response.data.rows;
   });

  }

  $scope.loadUserGroups = function(){

    var usuario = {usuario: getParameterByName('username')};

    $http.post('http://localhost:1337/Grupo/getByUsuario', usuario).then(function(response) {
      if(response.data.sucesso)
       $scope.groups = response.data.rows;
   });

  }

}]);

myApp.controller('indexController', ['$scope', '$http', function($scope, $http) {
  $scope.usuario = {};

  $scope.loadUser = function(){
    var usuario = {usuario: sessionStorage.getItem('usuario')};

    $http.post("http://localhost:1337/usuario/get", usuario).then(function(response) {
      $scope.usuario = response.data.rows[0];

    });
  }

}]);


myApp.controller('allUsersController', ['$scope', '$http', function($scope, $http) {
  $scope.allusers = {};

  $scope.loadUsers = function(){

    var usuario = {usuario: sessionStorage.getItem("usuario")};

    $http.post('http://localhost:1337/usuario/getAll', usuario).then(function(response) {
      $scope.allusers = response.data.rows;
    });
  }

  $scope.follow = function(index){
    $scope.allusers[index].followed = true;
  }

  $scope.unfollow = function(index){
    $scope.allusers[index].followed = false;
  }

}]);

myApp.factory('authenticationService', function() {

  return {
    usuario : 'nemo',
    autenticou: false
  };

});

myApp.controller('NavbarController', ['$scope', '$http', '$window', 'authenticationService',  function($scope, $http, $window, authenticationService) {

  $scope.login = authenticationService; 

  $scope.authenticate = function(){

    var auth = sessionStorage.getItem("autenticou") || "false";

    console.log(auth);
    if(auth == "false")
      console.log('ola');
    if(auth == "false")
    {
      if($window.location.href != "http://localhost:1337/freewilly/login" && $window.location.href != "http://localhost:1337/freewilly/register")
        $window.location.href = 'http://localhost:1337/freewilly/login';
    } else {
       //console.log("capiroto " + auth);
       authenticationService.usuario = sessionStorage.getItem("usuario");
       authenticationService.autenticou = true;
     }
   }



   $scope.logout = function(){
    sessionStorage.setItem("autenticou", "false");
  //LoginService.autenticou = false;
  //LoginServiceusuario = 'nemo';
  //$window.location.href = 'http://localhost:1337/freewilly/login'

}

}]);


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}