(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.lunchMenu = "";
  $scope.message = "";
  $scope.messSize = 0;

  $scope.checkMenu = function () {
    var res = calcMessSize($scope.lunchMenu);
    $scope.messSize = res;
  };

  $scope.makeMessage = function () {
    if($scope.messSize == 0){
      $scope.message = "Please enter data first"
    }
    else if($scope.messSize <= 3){
      $scope.message = "Enjoy!"
    }
    else{
      $scope.message = "Too much!"
    }
  };

  $scope.displayMess = function () {
    return $scope.message;
  };

  function calcMessSize(string){
    return string.split(',').filter(word => word.length != 0);
  }

}

})();
