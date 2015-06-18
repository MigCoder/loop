
angular.module("loop", ["ngRoute", "pascalprecht.translate", "loop.controllers"]);
angular.module("loop.controllers", []);

angular.module("loop").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/first", {
        controller: "first",
        templateUrl: "first.html"
    }).when("/second", {
        controller: "second",
        templateUrl: "second.html"
    }).otherwise({
        redirectTo: "/"
    });
}]);
angular.module("loop").config(["$translateProvider", function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: "../script/lang/",
        suffix: ".json"
    });
    $translateProvider.preferredLanguage("ch");
}]);

angular.module('loop.controllers').controller("first", ["$scope", function ($scope) {

    $scope.status = ["Preliminary", "Applied", "Preliminary", "Planned", "Registered"];
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        eventClick: function (calEvent, jsEvent, view) {
            console.log(calEvent, jsEvent, view);
        },
        defaultDate: new Date(),
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'SOA Masterclass',
                start: '2015-06-11',
                backgroundColor: "red"
            },
            {
                title: 'Agile Webinar',
                start: '2015-06-27',
                backgroundColor: "green"
            },
            {
                id: 999,
                title: 'Biztalk EDI',
                start: '2015-06-29',
                backgroundColor: "#000"
            },
//            {
//                id: 999,
//                title: 'Repeating Event',
//                start: '2015-02-16T16:00:00'
//            },
//            {
//                title: 'Conference',
//                start: '2015-02-11',
//                end: '2015-02-13'
//            },
//            {
//                title: 'Meeting',
//                start: '2015-02-12T10:30:00',
//                end: '2015-02-12T12:30:00'
//            },
//            {
//                title: 'Lunch',
//                start: '2015-02-12T12:00:00'
//            },
//            {
//                title: 'Meeting',
//                start: '2015-02-12T14:30:00'
//            },
//            {
//                title: 'Happy Hour',
//                start: '2015-02-12T17:30:00'
//            },
//            {
//                title: 'Dinner',
//                start: '2015-02-12T20:00:00'
//            },
//            {
//                title: 'Birthday Party',
//                start: '2015-02-13T07:00:00'
//            },
//            {
//                title: 'Click for Google',
//                url: 'http://google.com/',
//                start: '2015-02-28'
//            }
        ]
    });
}]);


angular.module('loop.controllers').controller("mainController", ["$scope", function ($scope) {
    console.log("mainController");
}]);
angular.module('loop.controllers').controller("second", ["$scope", function ($scope) {
    console.log("second-controller");
}]);


