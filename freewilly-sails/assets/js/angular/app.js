
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
    $scope.posts[index].liked = true;
  }

  $scope.unlike = function(index){
    $scope.posts[index].liked = false;
  }

  $scope.loadPosts = function(){
    var usuario = {usuario: sessionStorage.getItem('usuario')};
    $http.post("http://localhost:1337/post/getByUsuario", usuario).then(function(response) {
      $scope.posts = response.data.rows;
    });
  }

}]);

myApp.controller('postController', ['$scope', '$http', function($scope, $http) {

  $scope.posts = {};

  $scope.like = function(index){
    $scope.posts[index].liked = true;
  }

  $scope.unlike = function(index){
    $scope.posts[index].liked = false;
  }

  $scope.loadPosts = function(){
   var usuario = {usuario: sessionStorage.getItem('usuario')};

   $http.post("http://localhost:1337/post/getByUsuarioFollow", usuario).then(function(response) {

    for (var i = 0; i < response.data.rowCount; i++) {

      $http.post("http://localhost:1337/postreacao/get", {idPost : response.data.rows[i].idpost, 
        usuario: sessionStorage.getItem('usuario')}).then(function(res) {

          if(res.data.sucesso){
            console.log(res.data.rows[0].reacao);
            response.data.rows[0].reacao = res.data.rows[0].reacao;
            response.data.rows[0].compartilhou = res.data.rows[0].compartilhou;
          }
        });
      }

      //response.data.rows[0].reacao = 1;

      $scope.posts = response.data.rows;

      console.log(response.data.rows);

    });
 }

 $scope.loadUserPosts = function(){
  
    var usuario = {usuario: getParameterByName('username')};
    $http.post("http://localhost:1337/post/getByUsuario", usuario).then(function(response) {
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

    grupo.idGrupo = getParameterByName('group');

    $http.post('http://localhost:1337/post/getByGrupo', grupo).then(function(response) {
      console.log(response.data.sucesso + "rf");
      if(response.data.sucesso == true)
      {
        $scope.posts = response.data.rows;
      }
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

myApp.controller('newGroupController', ['$scope', '$http', function($scope, $http) {
  $scope.banner = 'panel-body bgimg';

  $scope.createGroup = function(){
    var group = {};

    group.usuario = sessionStorage.getItem('usuario');
    group.nome = $('#groupName').val();
    group.foto = 'thrall.png';
    group.descricao = $('#groupDescription').val();

    $http.post('http://localhost:1337/Grupo/create', group).then(function(response) {
      if(response.data.sucesso)
        console.log(response.data.sucesso);
    });

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

  $scope.createPost = function(){
    var post = {};

    post.usuario = sessionStorage.getItem("usuario");
    post.titulo = $('#postTitle').val();
    post.conteudo = $('#postContent').val();
    post.idGrupo = $('#postGroup').val();

    console.log(post);

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
    var usuario = {usuario: getParameterByName('username')};

    console.log(usuario);

    if(usuario == null){
      console.log(" erro");
    }else{

      $http.post("http://localhost:1337/usuario/get", usuario).then(function(response) {
        $scope.usuario = response.data.rows[0];

      });
    }
  }

}]);

myApp.controller('userController', ['$scope', '$http', function($scope, $http) {
  $scope.usuario = {};

  $scope.loadUser = function(){
    var usuario = {usuario: getParameterByName('username')};

    $http.post("http://localhost:1337/usuario/get", usuario).then(function(response) {
      $scope.usuario = response.data.rows[0];
      console.log($scope.usuario);
    });
  }

}]);

myApp.controller('profileController', ['$scope', '$http', '$window', 'authenticationService', function($scope, $http, $window, authenticationService) {
  $scope.usuario = {};

  $scope.loadUser = function(){
    var usuario = {usuario: sessionStorage.getItem("usuario")};
    $http.post("http://localhost:1337/usuario/get", usuario).then(function(response) {
      $scope.usuario = response.data.rows[0];
      console.log($scope.usuario);
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

    console.log(usuario.aniversario);

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



}]);



myApp.controller('allUsersController', ['$scope', '$http', function($scope, $http) {
  $scope.allusers = {};

  $scope.loadUsers = function(){
    var usuario = {};

    $http.post('http://localhost:1337/usuario/getAll', usuario).then(function(response) {
      if(response.data.sucesso)
       $scope.allusers = response.data.rows;
   });

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
       $window.location.href = 'http://localhost:1337/freewilly/index';
   });
  }

}]);

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