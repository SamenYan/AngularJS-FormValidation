'use strict';
var myApp;

myApp.controller('signUpFormCtrl', ['$scope', function($scope){
	$scope.userdata = {};

	$scope.submitForm = function(){
		window.console.log($scope.userdata);
		if($scope.signUpForm.$valid){

		}
	};
}]);