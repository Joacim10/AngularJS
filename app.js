var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/overview.html",
        controller: "defaultController" 
        
    })
    .when("/theproblem", { 
        templateUrl: "views/theproblem.html",
        controller: "theProblemController" 
    })
    .when("/thesolution", { 
        templateUrl: "views/thesolution.html",
        controller: "theSolutionController" 
    })
    .when("/habaneros", { 
        templateUrl: "views/companies.html",
        controller: "companiesController" 
    })
})




app.controller("defaultController", function($scope) {
            $scope.image = "BUTTON.png"; $scope.title = "DON'T MISS OUT ON THE INFO YOU WANT"; $scope.text = "Let Habanero make your life easier FREE of charge";
    
})

app.controller("theProblemController", function($scope) {
    $scope.image = "Web.png"; $scope.title = "THE PROBLEM"; $scope.text = "There's too much information on the internet"; $scope.text2 = "It’s impossible to keep up to date on everything that affect your life. The web is filled with spam, misinformation and fake news."; $scope.text3 = "It all comes down to what media outlets and organisations you trust. But if you’re not in control of what info you get - you are probably not getting the info you need. ";
    
})

app.controller("theSolutionController", function($scope) {
            $scope.image = "Habanero white.png"; $scope.title = "THE SOLUTION"; $scope.text_a = "GET USEFUL INFO"; $scope.text_b = "- WHEN YOU NEED IT"; $scope.text2 = "Habanero will remind you of relevant info i.e. discounts, product warnings and content you actually want. It will keep itself up to date on lots of information and remind you what you need to know when it’s relevant for you."; $scope.text3 = "All you need to do is tell your Habanero who you trust and it will make your life easier."; $scope.text4 = "Habanero is 100% confidential because it’s all in your web browser. With Habanero you don’t share data - you get data.";
})

app.controller("companiesController", function($scope) {
    $scope.image = ""; $scope.title = "THE HABANEROS"; $scope.text = "These are the organizations that is on Habanero.";

    $scope.companies = [
        { image: "Habanero white.png", title: "MECENAT", text: "STUDENT DISCOUNTS" },
        { image: "Habanero white.png", title: "PLUS", text: "PRODUCT INFORMATION" },
        { image: "Habanero white.png", title: "FAIRTRADE", text: "PRODUCT INFORMATION" },
        { image: "Habanero white.png", title: "AMNESTY", text: "PRODUCT INFORMATION" },
        { image: "Habanero white.png", title: "UNHCR", text: "PRODUCT INFORMATION" },
        { image: "Habanero white.png", title: "MECENAT", text: "STUDENT DISCOUNTS" },
        { image: "Habanero white.png", title: "PLUS", text: "PRODUCT INFORMATION" },
        { image: "Habanero white.png", title: "FAIRTRADE", text: "PRODUCT INFORMATION" },
    ]
})



.controller('ExampleController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }]);

  

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