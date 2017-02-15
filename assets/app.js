var app = angular.module('viperdev', ['ngSanitize', 'ngRoute'])
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            redirectTo: '/home'
        }).
        when('/home', {
            template: '<home></home>'
        }).
        when('/aboutus', {
            template: '<aboutus></aboutus>'
        }).
        when('/team', {
            template: '<team></team>'
        }).
        when('/disclaimer', {
            template: '<disclaimer></disclaimer>'
        }).
        otherwise({redirectTo:'/'});
}]);
app.controller('TabController',['$location','$scope', function ($location, $scope) {
    $scope.isSet = function (stab) {
        return $location.path() == stab
    }
}])
app.directive('team', function () {
    return{
        restrict: 'E',
        templateUrl: '/partials/tabs/team.html',
        controller: function () {
            self = this;
            self.profile = [
                {
                    "name" : "Lasse Schuirmann",
                    "id" : "sils",
                    "picture" : "https://avatars2.githubusercontent.com/u/5716520",
                    "short_tagline": "Problem solver",
                    "bio": "Founder of <a href='http://coala.io'>coala</a>, <a href='http://gitmate.io'>GitMate</a> and viperdev and conference speaker."
                },
                {
                    "name" : "Mischa Krüger",
                    "id" : "Makman2",
                    "picture" : "https://avatars3.githubusercontent.com/u/6023916",
                    "short_tagline": "Code & Review Junkie",
                    "bio": "<a href='http://coala.io'>coala</a> core developer and inventor of the open source CE3D terminal game engine."
                },
                {
                    "name" : "Adhityaa Chandrasekar",
                    "id" : "adtac",
                    "picture" : "https://avatars2.githubusercontent.com/u/7521600",
                    "short_tagline": "Hardcore hacker",
                    "bio": "<a href='http://coala.io'>coala</a> core developer and creator of climate and fssb."
                },
                {
                    "name" : "Maximilian Scholz",
                    "id" : "sims1253",
                    "picture" : "https://avatars3.githubusercontent.com/u/6530123",
                    "short_tagline": "Community evangelist",
                    "bio": "Leader of the <a href='http://coala.io'>coala</a> community team and creator of the LineSpots algorithm."
                },
                {
                    "name" : "Sebastian Latacz",
                    "id" : "seblat",
                    "picture": "https://avatars0.githubusercontent.com/u/18051901",
                    "short_tagline":"Business expert",
                    "bio" : "Founder of <a href='http://gitmate.io'>GitMate</a> and solver of the most complicated business problems."
                },
                {
                    "name" : "Hemang Kumar",
                    "id" : "hemangsk",
                    "picture": "https://avatars1.githubusercontent.com/u/13018570",
                    "short_tagline":"Frontend Enthusiast",
                    "bio" : "<a href='http://coala.io'>coala</a> developer. Frontend lover. Creates and designs web frontends with passion."
                }
            ]
        },
        controllerAs: "dc"
    }
})
app.directive('home', function () {
    return{
        restrict: 'E',
        templateUrl: '/partials/tabs/home.html',
        controller: function() {
            self = this
            self.plans = [
                {
                    "title" : "CATALYST",
                    "subtitle": "Meet demands on a much larger scale",
                    "problems" : [
                        "A growing team",
                        "An expanding set of responsibilities",
                    ],
                    "solutions" : [
                        "Helping you choose the right tools for your team and tasks",
                        "Automating parts of your workflow",
                        "Boosting your team's abilities with individually tailored workshops",
                    ],
                    "price": "starting at 500€ / month",
                    "form": `<a href="https://viperdev.typeform.com/to/fABj8j" target="_blank">Get Started</a>`
                },
                {
                    "title" : "STRATEGIST",
                    "subtitle": "Achieve a more sustainable workflow",
                    "problems" : [
                        "Bugs and regressions in your product",
                        "Unsactisfactory development progress",
                    ],
                    "solutions" : [
                        "Transitioning you to a more robust development strategy",
                        "Implementing a powerful testing and continuous integration set up",
                        "Discussing main issues and possible solutions on a monthly basis",
                    ],
                    "price": "2000€ / month",
                    "form": `<a href="https://viperdev.typeform.com/to/AKlsXq" target="_blank">Get Started</a>`
                },
                {
                    "title" : "ACTIVIST",
                    "subtitle": "Build an open-source community",
                    "problems" : [
                        "Open-sourcing your product or tools",
                        "Building a community around your product or brand",
                    ],
                    "solutions" : [
                        "Managing your community communication channels",
                        "Automating newcomer introduction and schooling",
                        "Promoting you on various social media channels",
                    ],
                    "price": "1000€ / month",
                    "form": "<a href=\"mailto:interest@viperdev.io\">Mail us</a>"
                }
            ]
        },
        controllerAs: 'qc'
    }
})
app.directive('aboutus', function () {
    return{
        restrict:'E',
        templateUrl: '/partials/tabs/aboutus.html'
    }
})
app.directive('disclaimer', function () {
    return{
        restrict:'E',
        templateUrl: '/partials/tabs/disclaimer.html'
    }
})
