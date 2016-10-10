'use strict';

var angular;
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "tpls/PageTab.html"
        })
        .state("PageTab.docs", {
            url:"/docs",
            templateUrl: "tpls/docs.html"
        })
        .state("PageTab.edit", {
            url:"/edit",
            templateUrl: "tpls/edit.html"
        });
});
