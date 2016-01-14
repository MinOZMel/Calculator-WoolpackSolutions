angular.module('starter').controller('CalCtrl', ['$scope', function ($scope) {
    $scope.pendingValue = null;
    $scope.newNumber = true;
    $scope.runningTotal = null;
    $scope.operationToken = "";

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
      $scope.pendingValue = parseFloat($scope.display);
    };
 
    $scope.operate = function (operation) {
        if($scope.pendingValue){
            if ($scope.runningTotal) {    
                switch(operation){
                    case ADD:
                        $scope.runningTotal += $scope.pendingValue;
                        break;
                    case SUBTRACT:
                        $scope.runningTotal -= $scope.pendingValue;
                        break;
                    case DIVIDE:
                        $scope.runningTotal /= $scope.pendingValue;
                        break;
                    case MULTIPLY:
                        $scope.runningTotal *= $scope.pendingValue;
                        break;
                    case MODULE:
                        $scope.runningTotal %= $scope.pendingValue;
                        break;
                    default:
                        break;
                    }
            } else{
                $scope.runningTotal = $scope.pendingValue;
            }  
        }
        setOperationToken(operation);
        setDisplay(String($scope.runningTotal));
        $scope.pendingOperation = operation;
        $scope.newNumber = true;
        $scope.pendingValue = null;
    };


    $scope.calculate = function () {
        if (!$scope.newNumber) {
            $scope.pendingValue = parseFloat($scope.display);
            $scope.lastValue = $scope.pendingValue;
        }
        
        if ($scope.pendingOperation == ADD) {
            $scope.runningTotal += $scope.pendingValue;
            $scope.lastOperation = ADD;
        } else if ($scope.pendingOperation == SUBTRACT) {
            $scope.runningTotal -= $scope.pendingValue;
            $scope.lastOperation = SUBTRACT;
        } else if ($scope.pendingOperation == DIVIDE) {
            $scope.runningTotal /= $scope.pendingValue;
            $scope.lastOperation = DIVIDE;
        } else if ($scope.pendingOperation == MULTIPLY) {
            $scope.runningTotal *= $scope.pendingValue;
            $scope.lastOperation = MULTIPLY;
         } else if ($scope.pendingOperation == MODULE) {
            $scope.runningTotal %= $scope.pendingValue;
            $scope.lastOperation = MODULE;
        } else {
            if ($scope.lastOperation) {
                if ($scope.lastOperation == ADD) {
                    if ($scope.runningTotal) {
                        $scope.runningTotal += $scope.lastValue;
                    } else {
                        $scope.runningTotal = 0;
                    }
                } else if ($scope.lastOperation == SUBTRACT) {
                    if ($scope.runningTotal) {
                        $scope.runningTotal -= $scope.lastValue;
                    } else {
                        $scope.runningTotal = 0;
                    }
                }
                } else if ($scope.lastOperation == DIVIDE) {
                    if ($scope.runningTotal) {
                        $scope.runningTotal /= $scope.lastValue;
                    } else {
                        $scope.runningTotal = 0;
                    }
                } else if ($scope.lastOperation == MULTIPLY) {
                    if ($scope.runningTotal) {
                        $scope.runningTotal *= $scope.lastValue;
                    } else {
                        $scope.runningTotal = 0;
                    }
                } else if ($scope.lastOperation == MODULE) {
                    if ($scope.runningTotal) {
                        $scope.runningTotal %= $scope.lastValue;
                    } else {
                        $scope.runningTotal = 0;
                    }
            } else {
                $scope.runningTotal = 0;
            }
        }
        
        setDisplay($scope.runningTotal);
        setOperationToken();
        $scope.pendingOperation = null;
        $scope.pendingValue = null;
        console.log($scope.runningTotal);
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

    $scope.operationButtonClick = function (operation) {
      $scope.display = operation;
    }

    /** Clears the display box **/
    $scope.clear = function (clear) {
      $scope.display = 0;
      $scope.pendingValue = null;
      $scope.newNumber = true;
      $scope.runningTotal = null;
      $scope.operationToken = "";
    }

    $scope.setDisplay = function (outputString) {
      $scope.display = outputString;
      $scope.newNumber = true;
    };
  }]);


