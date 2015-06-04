var app;
(function (app) {
    var models;
    (function (models) {
        var ScheduleDay = (function () {
            function ScheduleDay(dayName, hours) {
                this.dayName = dayName;
                this.hours = hours;
            }
            return ScheduleDay;
        })();
        models.ScheduleDay = ScheduleDay;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var ScheduleDayHour = (function () {
            function ScheduleDayHour(dayName, dayHour, multiplier) {
                this.dayName = dayName;
                this.dayHour = dayHour;
                this.multiplier = multiplier;
            }
            return ScheduleDayHour;
        })();
        models.ScheduleDayHour = ScheduleDayHour;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=models.js.map