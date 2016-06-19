
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

  $scope.createPost = function(){
    var post = {};

    post.usuario = sessionStorage.getItem("usuario");
    post.titulo = $('#postTitle').val();
    post.conteudo = $('#postContent').val();

    $http.post('http://localhost:1337/post/create', post).then(function(response) {
      if(response.data.sucesso)
       $window.location.href = 'http://localhost:1337/freewilly/profile';
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
    var usuario = {usuario: getParameterByName('username')};
    $http.post("http://localhost:1337/post/getByUsuario", usuario).then(function(response) {
      $scope.posts = response.data.rows;
    });
  }

  $scope.createPost = function(){
    var post = {};

    post.usuario = sessionStorage.getItem("usuario");
    post.titulo = $('#postTitle').val();
    post.conteudo = $('#postContent').val();

    $http.post('http://localhost:1337/post/create', post).then(function(response) {
      if(response.data.sucesso)
       $window.location.href = 'http://localhost:1337/freewilly/profile';
   });

  }



}]);

myApp.controller('groupController', ['$scope', '$http', function($scope, $http) {
  $scope.group = {nome: 'Azralon'};

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
    usuario.aniversario = $scope.usuario.aniversario;
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



}]);



myApp.controller('myGroupController', ['$scope', '$http', function($scope, $http) {
  $scope.groups = {};
  /*[
  {
    nome: 'LFG mitica ilvl 630 dps', 
  },
  {
    nome: 'LFM world boss lvl 90+', 
  },
  {
    nome: '[Blacksmithing] LFW 10g/e', 
  },
  {
    nome: 'Buy all of your draenor ores 100g/stack COD me'
  }
  ];*/

  $scope.loadGroups = function(){

  }

  $scope.group = {member: false};

  $scope.join = function(){
    $scope.group.member = true;
  }

  $scope.leave = function(){
    $scope.group.member = false;
  }

}]);

myApp.controller('allUsersController', ['$scope', '$http', function($scope, $http) {
  $scope.allusers = 
  [
  {
    usuario: 'patodomau', 
    nome: 'Tales Prates Correia',
    descricao: 'alguma coisa ai',
    data: '1992-04-14',
    avatar: 'thrall.png',
    followed: false
  },
  {
    usuario: 'patodomaui', 
    nome: 'Tales Prates Correia2',
    descricao: 'tchau mundo',
    avatar: 'malfurion.png',
    data: '1992-04-15',
    followed: true
  }
  ];

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