var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/overview.html",
        controller: "defaultController" 
    })
    .when("/#!theproblem", { 
        templateUrl: "views/overview.html",
        controller: "defaultController" 
    })
    .when("/#!thesolution", { 
        templateUrl: "views/overview.html",
        controller: "defaultController" 
    })
    .when("/#!contact", { 
        templateUrl: "views/overview.html",
        controller: "defaultController" 
    })
})




app.controller("defaultController", function($scope) {
    $scope.testamonials = [
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
      
    ]
})


// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        template: ''
    }
})
app.directive("appfooter", function() {
    return {
        template: ''
    }
})