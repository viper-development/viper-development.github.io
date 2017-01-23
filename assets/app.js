var app = angular.module('viperdev', ['ngSanitize'])
app.controller('Data', ['$http', function($http , $scope){
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

    self.plans = [
        {
            "title" : "Monthly Quality Session",
            "subtitle": "Level up - one step every month.",
            "features" : [
                "We help you with code quality and team process problems on a monthly basis, saving lots of developer hours wasted on research and ending up with the wrong tool",
                "One remote up to one-hour session about your problems per month",
                "If we can't help you right away, we'll research potential solutions for you",
                "Free trial: if you cancel during any month that one is free"
            ],
            "duration": "1 hour/mon+",
            "price": "800eur/mon"
        },
        {
            "title" : "Code Quality Workshop",
            "subtitle": "Level up your team - reduce downtimes!",
            "features" : [
                "Learn practically about git, continuous integration and code review",
                "Define a development workflow with and for your teams",
                "Lock out bad code despite practical restrictions"
            ],
            "duration": "5-8 hours",
            "price": "2000eur"
        },
        {
            "title" : "Enhance your Code Quality and Team Processes",
            "subtitle": "We work with your teams to implement new policies",
            "features" : [
                "Access our domain experience about code quality, development processes and open source on site",
                "Get rid of downtimes",
                "Save developer time",
                "Get cleaner and more stable code"
            ],
            "duration": "1-4 weeks",
            "price": "Price on request, roadmapping 1000-2000eur"
        },
        {
            "title" : "Boost your Open Source Project",
            "subtitle": "Partner with us to make your Open Source project a success",
            "features" : [
                "Let your developers concentrate on what they do best: we help you grow a community",
                "We will determine if open sourcing is profitable for your project",
                "We help setting up and/or maintaining your project on a regular basis"
            ],
            "duration": "Flexible",
            "price": "Price on request, roadmapping 1000-2000eur"
        }
    ]



}])
