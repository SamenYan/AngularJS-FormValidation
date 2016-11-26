'use strict';
var myApp;

myApp.controller('myCtrl', ['$scope', function($scope) {
    $scope.userdata = {};

    $scope.submitForm = function() {
        if ($scope.signUpForm.$valid) {

        }
    };

    $scope.bu = false;
    $scope.bs = false;
    $scope.getbu = function() {
        $scope.bu = !$scope.bu;
    };
    $scope.getbs = function() {
        $scope.bs = !$scope.bs;
    };

}]);


/*form element*/
myApp.directive('panelnotempty', function() {
    //can not be empty
    return {
        restrict: 'E',
        transclude: true,
        template: ''
    };
}).directive('panelun', function() {
    //username
    return {
        restrict: 'E',
        transclude: true,
        template: '<label for="">username</label>' +
            '<input class="form-control" type="text" name="username" ng-minlength="6" ng-maxlength="20" >'+
            '<p class="error" ng-if="signUpForm.username.$error.required&&signUpForm.username.$touched">不能为空</p>'
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
