'use strict';

var angular;
var myModule = angular.module('myApp', []);

myModule.controller('signUpFormCtrl', ['$scope', function($scope){
	$scope.userdata = {};

	$scope.submitForm = function(){
		window.console.log($scope.userdata);
		if($scope.signUpForm.$valid){

		}
	};
}]);
