myApp.controller('navbarController', ['$scope', '$http', '$window', 'authenticationService',  function($scope, $http, $window, authenticationService) {

  $scope.login = authenticationService; 

  $scope.authenticate = function(){

    var auth = sessionStorage.getItem("autenticou") || "false";



    if(auth == "false")
    {
      if($window.location.href != "http://localhost:1337/freewilly/login" && $window.location.href != "http://localhost:1337/freewilly/register")
        $window.location.href = 'http://localhost:1337/freewilly/login';
    } else {

       authenticationService.usuario = sessionStorage.getItem("usuario");
       authenticationService.autenticou = true;
     }
   }



   $scope.logout = function(){
    sessionStorage.setItem("autenticou", "false");

}

}]);