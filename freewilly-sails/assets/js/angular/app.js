
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

myApp.controller('postController', ['$scope', '$http', function($scope, $http) {

  $scope.posts = 
  [
  {
    usuario: 'patodomau', 
    titulo: 'ola mundo',
    conteudo: 'alguma coisa ai',
    data: '1992-04-14',
    liked: false,
    followed: false
},
{
    usuario: 'patodomaui', 
    titulo: 'tchau mundo',
    conteudo: 'ta saindo da jaula',
    data: '1992-04-14',
    liked: true,
    followed: true
}
];

$scope.follow = function(index){
    $scope.posts[index].followed = true;
}

$scope.unfollow = function(index){
    $scope.posts[index].followed = false;
}

$scope.like = function(index){
    $scope.posts[index].liked = true;
}

$scope.unlike = function(index){
    $scope.posts[index].liked = false;
}

}]);

myApp.controller('groupController', ['$scope', '$http', function($scope, $http) {
  $scope.group = {nome: 'Azralon'};

}]);

myApp.controller('myGroupController', ['$scope', '$http', function($scope, $http) {
  $scope.groups = 
  [
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
];

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

          if(response.data.sucesso)
            $window.location.href = 'http://localhost:1337/freewilly/index';
    });
}

}]);

myApp.controller('NavbarController', ['$scope', '$http', function($scope, $http) {
  $scope.logged = true;

  $scope.login = function(){
    $scope.logged = true;
    console.log($scope.logged);
}

$scope.logout = function(){
    $scope.logged = false;
    console.log($scope.logged);
}

}]);