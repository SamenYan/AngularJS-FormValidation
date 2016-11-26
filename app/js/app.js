'use strict';

var angular;
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/pageTab");

    $stateProvider
        .state("pageTab", {
            url: "/pageTab",
            templateUrl: "tpls/PageTab.html"
        })
        .state("pageTab.docs", {
            url:"/docs",
            templateUrl: "tpls/docs.html"
        })
        .state("pageTab.edit", {
            url:"/editor",
            templateUrl: "tpls/editor.html"
        });
});
