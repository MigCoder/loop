
angular.module("loop", ["ngRoute", "pascalprecht.translate", "loop.controllers"]);
angular.module("loop.controllers", []);
angular.module("loop.services", []);

angular.module("loop").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/first", {
        controller: "first",
        templateUrl: "views/first.html"
    }).when("/second", {
        controller: "second",
        templateUrl: "views/second.html"
    }).otherwise({
        redirectTo: "/first"
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

    $scope.status = ["Preliminary", "Applied", "Planned", "Registered"];
    $scope.selectedStatus = [];
    $scope.statusClick = function (statu) {
        if ($($scope.selectedStatus).filter(function (index, n) { return n == statu; }).length) {
            $scope.selectedStatus = $($scope.selectedStatus).filter(function (index, n) { return n != statu; });
        } else {
            $scope.selectedStatus.push(statu);
        }
        filterEvents();
    };
    $scope.isSelected = function (statu) {
        return $($scope.selectedStatus).filter(function (index, n) { return n == statu; }).length;
    };

    function filterEvents(topic) {

    }

    $scope.manageTopic = function () {
        $("#manageTopicModal").modal("show");
    };
    
    $scope.allTopic = ["SOA", "BI", "ITIL", "Biztalk"];
    $scope.isTopicSelected = function (topic) {
        return $($scope.selectedTopic).filter(function (index, n) { return n == topic; }).length;
    };
    $scope.selectedTopic = ["SOA", "BI"];
    $scope.topicClick = function (topic) {
        if ($($scope.selectedTopic).filter(function (index, n) { return n == topic; }).length) {
            $scope.selectedTopic = $($scope.selectedTopic).filter(function (index, n) { return n != topic; });
        } else {
            $scope.selectedTopic.push(topic);
        }
        filterEvents();
    };
    $scope.addCustomerTopic = function () {
        $scope.alreadyExist = false;
        if ($($scope.allTopic).filter(function (index, n) { return n == $scope.customerTopic; }).length) {
            $scope.alreadyExist = true;
        } else {
            $scope.selectedTopic.push($scope.customerTopic);
            $scope.allTopic.push($scope.customerTopic);
            $scope.customerTopic = '';
        }

    };
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        eventClick: function (calEvent, jsEvent, view) {
            $scope.selectedEvent = calEvent.data;
            $scope.$digest();
        },
        eventMouseover: function (event, jsEvent, view) {
            $(jsEvent.currentTarget).popover({
                placement: "bottom",
                content: function () {
                    return "hello world.";
                }
            }).popover("show");
        },
        eventMouseout: function (event, jsEvent, view) {
            $(jsEvent.currentTarget).popover("hide");
        },
        defaultDate: new Date(),
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'SOA Masterclass',
                start: '2015-06-11',
                backgroundColor: "red",
                data: {
                    title: "SOA Masterclass",
                    date: "2015-06-11",
                    time: "09:00-12:00",
                    place: "shan xi xian",
                    status: "Registration",
                    topics: ["SOA", "Biztalk EDI", "Microsoft"]
                }
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

angular.module("loop.services").factory("eventService", ["", function () {
    var eventService = {};
    eventService.getData = function () {
        return [];
    };


    return eventService;
}]);


