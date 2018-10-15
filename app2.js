(
  function (){
    'use strict';
    angular.module('myFirstApp', [])
    .controller('MyFirstController', function($scope){
$scope.name="Usha";
      $scope.sayHello=function(){
        return "Hello to coursera";
      };
    })
  }
)();
