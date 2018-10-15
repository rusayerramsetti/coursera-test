(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
   $scope.name="";
   //$scope.charCount=($scope.name).length;
    //$scope.message="";
  //  $scope.message="";
   var elements=($scope.name).split(",");

    $scope.checkIfTooMuch=function(){

    //  var upCase=$filter('uppercase');
  //  var elements=($scope.name).split(",");
  var charCount=($scope.name).length;


  var elements=($scope.name).split(",");
  var count=elements.length;
  var count=elements.length;

if(charCount==0){
  $scope.message="Please enter data first";
}
else{
if( count<=3)

{//$scope.message="Enjoy";
$scope.message="Enjoy!";
}
else if(count > 3 )
{//$scope.message="Too Much!";
$scope.message="Too Much!";
}
}





    //  $scope.name=upCase($scope.name);
    };
  }
})();
