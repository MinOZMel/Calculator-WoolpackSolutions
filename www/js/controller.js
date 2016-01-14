angular.module('starter').controller('CalCtrl', ['$scope', function ($scope) {
    $scope.pendingValue = null;
    $scope.newNumber = true;
    $scope.runningTotal = null;
    $scope.operationToken = "";

    $scope.display = 0;

    var ADD = "adding";
    var SUBTRACT = "subtracting";
    var ADD_TOKEN = "+";
    var SUBTRACT_TOKEN = "-";
    var DIVIDE = "dividing"
    var DIVIDE_TOKEN = "/";
    var MULTIPLY = "multiplying"
    var MULTIPLY_TOKEN = "*";

    $scope.enterNumber = function (number) {
      if ($scope.display == "0" || $scope.newNumber) {
          $scope.display = number;
          $scope.newNumber = false;
      } else {
          $scope.display += String(number);
      }
      $scope.pendingValue = parseFloat($scope.display);
    };

    $scope.add = function () {
        if ($scope.pendingValue) {
            if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                $scope.runningTotal += $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationToken(ADD);
        setDisplay(String($scope.runningTotal));
        $scope.pendingOperation = ADD;
        $scope.newNumber = true;
        $scope.pendingValue = null;
    };

    $scope.subtract = function () {
        if ($scope.pendingValue) {
            if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
                $scope.runningTotal -= $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationToken(SUBTRACT);
        setDisplay(String($scope.runningTotal));
        $scope.pendingOperation = SUBTRACT;
        $scope.newNumber = true;
        $scope.pendingValue = null;
    };

    $scope.divide = function () {
        if ($scope.pendingValue) {
            if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
                $scope.runningTotal /= $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationToken(DIVIDE);
        setDisplay(String($scope.runningTotal));
        $scope.pendingOperation = DIVIDE;
        $scope.newNumber = true;
        $scope.pendingValue = null;
    };

    $scope.multiply = function () {
        if ($scope.pendingValue) {
            if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
                $scope.runningTotal *= $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationToken(MULTIPLY);
        setDisplay(String($scope.runningTotal));
        $scope.pendingOperation = MULTIPLY;
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
        if (operation == ADD) {
            $scope.operationToken = ADD_TOKEN;
        } else if (operation == SUBTRACT) {
            $scope.operationToken = SUBTRACT_TOKEN;
        } else {
            $scope.operationToken = "";
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


