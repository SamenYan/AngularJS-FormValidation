'use strict';
var myApp;

myApp.controller('myCtrl', ['$scope', function($scope) {
    // 
    $scope.submitForm = function() {
        if ($scope.signUpForm.$valid) {

        }
    };

    //配置项显示隐藏
    $scope.boolUsername = false;
    $scope.boolPassword = false;
    $scope.boolSubmit = false;
    $scope.getBoolUsername = function() {
        $scope.boolUsername = !$scope.boolUsername;
    };
    $scope.getBoolPassword = function() {
        $scope.boolPassword = !$scope.boolPassword;
    };
    $scope.getBoolSubmit = function() {
        $scope.boolSubmit = !$scope.boolSubmit;
    };

    $scope.isRequired = {
        isRequired:'required'
    };
            $scope.getUsernameIsRequired = function() {
                window.alert(1);
                $scope.isRequired = 'required';
            };  
}]);


/*form element*/
myApp.directive('panelnotempty', function() {
    //can not be empty
    return {
        restrict: 'E',
        transclude: true,
        template: '<p class="error" ng-if="signUpForm.username.$error.required&&signUpForm.username.$touched">不能为空</p>'
    };
}).directive('panelun', function() {
    //username
    return {
        restrict: 'E',
        transclude: true,
        link: function(scope, element){  
            scope.isRequired = '';
            scope.getUsernameIsRequired = function() {
                window.alert(2);
                scope.isRequired = 'required';
            };  
        },
        template: '<label for="">username</label>' +
            '<input class="form-control" type="text" name="username" {{isRequired.isRequired}} ng-model="userdata.username" ng-minlength="6" ng-maxlength="20" >'
        

    };
}).directive('panelbpwd', function() {
    //submit btn
    return {
        restrict: 'E',
        transclude: true,
        template: '<label for="">password</label>'+
        '<input  type="password" name="password" class="form-control" required ng-model="userdata.password">'
    };
}).directive('panelbtn', function() {
    //submit btn
    return {
        restrict: 'E',
        transclude: true,
        template: '<button class="btn btn-primary" '+
        'ng-disabled="signUpForm.username.$invalid">submit</button>'
    };
});
