angular.module('starter').controller('CalCtrl', ['$scope', function ($scope) {
    $scope.pendingValue = null;
    $scope.newNumber = true;
    $scope.operationToken = "";
    $scope.hasOperator = false;
    $scope.runningTotal = 0;
    $scope.operator = null;

    $scope.display = 0;

    var ADD = "adding";
    var ADD_TOKEN = "+";
    var SUBTRACT = "subtracting";
    var SUBTRACT_TOKEN = "-";
    var DIVIDE = "dividing"
    var DIVIDE_TOKEN = "/";
    var MULTIPLY = "multiplying"
    var MULTIPLY_TOKEN = "*";
    var MODULE = 'moduling';
    var MODULE_TOKEN = '%';

    $scope.enterNumber = function (number) {
      if ($scope.display == "0" || $scope.newNumber) {
          $scope.display = number;
          $scope.newNumber = false;
      } else {
          $scope.display += String(number);
      }
      
       $scope.currentValue = parseFloat($scope.display);

      if($scope.hasOperator ){
          switch($scope.operator){
            case ADD:
              $scope.pendingValue += $scope.currentValue;
              break;
            case SUBTRACT:
              $scope.pendingValue -= $scope.currentValue;
              break;
            case MULTIPLY:
              $scope.pendingValue *= $scope.currentValue;
              break;
            case DIVIDE:
              if(number ==0){
                  $scope.display = 'Error';
                  $scope.pendingValue = null;
                  $scope.newNumber = true;
                  $scope.runningTotal = null;
                  $scope.operationToken = "";
                  $scope.hasOperator = false;
              }
              else{
                  $scope.pendingValue /= $scope.currentValue;
                  $scope.pendingValue = $scope.pendingValue.toFixed(10);
              }
              break;
            default:
              break;
          }
      }
      else{
        $scope.pendingValue = $scope.currentValue;
      }  

    };



    $scope.operate = function(operation){ 
        $scope.operator = operation;
        setOperationToken(operation);
        setDisplay(String($scope.pendingValue));
        $scope.newNumber = true;
        $scope.hasOperator = true;
    };

    $scope.calculate = function(){
        if($scope.hasOperator){
          setDisplay(String($scope.pendingValue));
        }
    };
 
 
 
    setDisplay = function (outputString) {
      $scope.display = outputString;
      $scope.newNumber = true;
      console.log($scope.display)
    };

    setOperationToken = function (operation) {
        switch(operation){
            case ADD:
               $scope.operationToken = ADD_TOKEN;
               break; 
            case SUBTRACT:
               $scope.operationToken = SUBTRACT_TOKEN;
               break;
            case MULTIPLY:
               $scope.operationToken = MULTIPLY_TOKEN;
               break;
            case DIVIDE:
               $scope.operationToken = DIVIDE_TOKEN;
               break;
            case MODULE:
               $scope.operationToken = MODULE_TOKEN;
               break;
            default : break;
        }
    };

    // $scope.operationButtonClick = function (operation) {
    //   $scope.display = operation;
    // }

    /** Clears the display box **/
    $scope.clear = function (clear) {
      $scope.display = 0;
      $scope.pendingValue = null;
      $scope.newNumber = true;
      $scope.runningTotal = null;
      $scope.operationToken = "";
      $scope.hasOperator = false;
    }

  }]);


