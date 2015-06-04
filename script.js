/**
 * Created by ryan.spears on 20/05/2015.
 */

var app = angular.module("app", ["kendo.directives"]);

app.controller("dragDropController", function ($scope) {
    $scope.dropTargetText = "Select multiplier.";

    $scope.selectedMultiplier = null;

    $scope.draggableHint = function (e) {
        var clone = $("#" + e.get(0).id).clone();
        $scope.selectedMultiplier = clone[0].textContent;
        return $("#draggable1").clone();
    }

    $scope.onDragEnd = function () {
        var draggable = $("#draggable1");
        if (!draggable.data("kendoDraggable").dropped) {
            // drag ended outside of any droptarget
            $scope.dropTargetText = "Try again!";
        }

        draggable.removeClass("hollow");
    }

    $scope.onDragStart = function () {
        $scope.$apply(function () {
            $scope.draggableClass = "hollow";
            $scope.dropTargetText = "Drop here.";
        });
    }

    $scope.onDragEnter = function (e) {
        $scope.$apply(function () {
            $scope.dropTargetText = "Now drop...";
        });
    }

    $scope.onDragLeave = function (e) {
        $scope.$apply(function () {
            $scope.dropTargetText = "Drop here.";
        });
    }

    $scope.onDrop = function (e) {
        $scope.$apply(function () {
            $scope.dropTargetText = $scope.selectedMultiplier;
            $scope.draggableClass = "";
        });
    }

    $scope.rangeSliderOptions = {
        min: 0,
        max: 24,
        smallStep: 0.5,
        largeStep: 1,
        tickPlacement: 'bottom',
        tooltip: {
            enabled: false
        }
    }

    $scope.hoursInDay = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']
});

app.directive('scheduleDay', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl:  'schedule-day.html'
    };
});

app.directive('scheduleHours', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl:  'schedule-hours.html'
    };
});