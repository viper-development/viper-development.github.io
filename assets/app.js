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
            "title" : "Monthly Quality Sessions",
            "subtitle": "Level up - one step every month.",
            "features" : [
                "Talk through your problems (up to an hour)",
                "Get a summary of your main issues",
                "3 recommendations on solutions",
                "Follow up at the end of the month",
                "Get a recurring ROI with every single session"
            ],
            "price": "800eur/mon",
            "form": `<a href="https://viperdev.typeform.com/to/fABj8j" target="_blank">Get Started</a>`
        },
        {
            "title" : "Boost your Open Source Project",
            "subtitle": "Partner with us to make your Open Source project a success",
            "features" : [
                "We set up proven automation for your open source project",
                "We help maintaining the project and keeping the community healthy",
                "We engage newcomers to raise a thriving community"
            ],
            "price": "1500eur/mon<br>2000eur setup fee",
            "form": "<a href=\"mailto:interest@viperdev.io\">Mail us</a>"
        },
        {
            "title" : "Custom",
            "subtitle": "You thought of something we're perfect for?",
            "features" : [
                "For workshops or working on premises with your team",
                "Limitless possibilities"
            ],
            "price": "On Request",
            "form": "<a href=\"mailto:interest@viperdev.io\">Mail us</a>"
        }
    ]
}])
