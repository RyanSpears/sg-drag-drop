module app.models {

    export class ScheduleDay {
        dayName: string;
        hours: app.models.ScheduleDayHour[];

        constructor(dayName: string, hours: app.models.ScheduleDayHour[]){
            this.dayName = dayName;
            this.hours = hours;
        }
    }
}

module app.models {
    export class ScheduleDayHour {
        dayName: string;
        dayHour: string;
        multiplier: number;

        constructor(dayName: string,dayHour: string, multiplier: number){
            this.dayName = dayName;
            this.dayHour = dayHour;
            this.multiplier = multiplier
        }
    }
}