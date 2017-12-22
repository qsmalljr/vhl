"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var calendarModule = require("nativescript-pro-ui/calendar");
var frameModule = require("tns-core-modules/ui/frame");
var color_1 = require("tns-core-modules/color");
var applicationSettingsModule = require("application-settings");
var CalendarViewModel = /** @class */ (function (_super) {
    __extends(CalendarViewModel, _super);
    function CalendarViewModel() {
        var _this = _super.call(this) || this;
        //CALENDAR POPULATING STUFF
        var now = new Date();
        var startDate, endDate, event;
        var colors = [new color_1.Color(200, 188, 26, 214), new color_1.Color(220, 255, 109, 130), new color_1.Color(255, 55, 45, 255), new color_1.Color(199, 17, 227, 10), new color_1.Color(255, 255, 54, 3)];
        var events = new Array();
        event = new calendarModule.CalendarEvent("pooping", new Date(now.getFullYear(), now.getMonth(), 23), new Date(now.getFullYear(), now.getMonth(), 25), false);
        /*
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), 19);
            endDate = new Date(now.getFullYear(), now.getMonth(), 20);
            event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
            if (i % 3 == 0) {
                event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event);
            }
        }
        */
        events.push(event);
        //convert events to dictionaries, stringify
        //when reading in, convert back from dictionaries to event objects
        var dictEvent;
        applicationSettingsModule.setNumber("length", events.length);
        for (var i_1 = 0; i_1 < events.length; i_1++) {
            dictEvent = {
                title: events[i_1].title,
                startDate: events[i_1].startDate.toString(),
                endDate: events[i_1].endDate,
            };
            applicationSettingsModule.setString("event" + i_1, JSON.stringify(dictEvent));
        }
        var length = applicationSettingsModule.getNumber("length");
        var tempEvents = new Array();
        //convert all back to events	
        for (var i = 0; i < length; i++) {
            var eventi = JSON.parse(applicationSettingsModule.getString("event" + i.toString()));
            console.log(eventi.title);
            console.log(eventi.startDate);
            //let pooper: Date = new Date(2017, 12, 20);
            //console.log(pooper);
            var tempEvent;
            //dates stored weird so create new date objects and use them in calendar events
            //then push to calendar events array
            tempEvent = new calendarModule.CalendarEvent(eventi.title, new Date(eventi.startDate), new Date(eventi.endDate));
            tempEvents.push(tempEvent);
        }
        //set source to show in calendar
        _this.source = tempEvents;
        return _this;
    }
    CalendarViewModel.prototype.addEvent = function (eventData) {
        //this event gets fired properly
        console.log("add");
        var now = new Date();
        var events = this.source;
        //console.log(events.length);
        var event;
        event = new calendarModule.CalendarEvent("pooping", new Date(now.getFullYear(), now.getMonth(), 19), new Date(now.getFullYear(), now.getMonth(), 25), false);
        events.push(event);
        //save locally
        applicationSettingsModule.setString("events", JSON.stringify(events));
        this.set("calendarEvents", events);
        //events = <Array<calendarModule.CalendarEvent>>JSON.parse(applicationSettingsModule.getString("events"));
        //resolve(events);
        /*
        for(let i = 0; i < events.length; i++){
            events[i] = events[i] as calendarModule.CalendarEvent;
        }
        console.log(typeof(events[1]) == typeof(calendarModule.CalendarEvent));
        console.log(events[1].title);
        */
        //var poop = new BrowseViewModel();
    };
    //gets the json string of events and populates the calendar on page load
    CalendarViewModel.prototype.loadEvents = function () {
        var events = JSON.parse(applicationSettingsModule.getString("events"));
    };
    CalendarViewModel.prototype.deleteEvent = function (eventData) {
        //this event gets fired properly
        console.log("delete");
    };
    Object.defineProperty(CalendarViewModel.prototype, "source", {
        get: function () {
            return this.get("eventSource");
        },
        //MORE CALENDAR METHODS
        set: function (value) {
            this.set("eventSource", value);
        },
        enumerable: true,
        configurable: true
    });
    CalendarViewModel.prototype.onDateSelected = function (args) {
        var date = args.date;
        var calendar = frameModule.topmost().getViewById("calendar");
        var events = calendar.getEventsForDate(date);
        this.set("myItems", events);
    };
    CalendarViewModel.prototype.toggleDropdown = function (eventData) {
        //toggle works now
        this.set("showDetails", !this.get("showDetails"));
    };
    return CalendarViewModel;
}(observable_1.Observable));
exports.CalendarViewModel = CalendarViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGVuZGFyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsNkRBQWdFO0FBRWhFLHVEQUEwRDtBQUMxRCxnREFBK0M7QUFDL0MsZ0VBQW1FO0FBRW5FO0lBQXVDLHFDQUFVO0lBQzdDO1FBQUEsWUFDSSxpQkFBTyxTQWdFVjtRQTlESCwyQkFBMkI7UUFDM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNmLElBQUksU0FBZSxFQUNmLE9BQWEsRUFDYixLQUFtQyxDQUFDO1FBQ3hDLElBQUksTUFBTSxHQUFpQixDQUFDLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0ssSUFBSSxNQUFNLEdBQXdDLElBQUksS0FBSyxFQUFnQyxDQUFDO1FBQzVGLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxF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SSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdGLHdCQUFDO0FBQUQsQ0FBQyxBQWpJRCxDQUF1Qyx1QkFBVSxHQWlJaEQ7QUFqSVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IGNhbGVuZGFyTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvY2FsZW5kYXJcIik7XHJcbmltcG9ydCBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xyXG5pbXBvcnQgYXBwbGljYXRpb25TZXR0aW5nc01vZHVsZSA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0Ly9DQUxFTkRBUiBQT1BVTEFUSU5HIFNUVUZGXHJcblx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgc3RhcnREYXRlOiBEYXRlLFxyXG4gICAgICAgICAgICBlbmREYXRlOiBEYXRlLFxyXG4gICAgICAgICAgICBldmVudDogY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudDtcclxuICAgICAgICBsZXQgY29sb3JzOiBBcnJheTxDb2xvcj4gPSBbbmV3IENvbG9yKDIwMCwgMTg4LCAyNiwgMjE0KSwgbmV3IENvbG9yKDIyMCwgMjU1LCAxMDksIDEzMCksIG5ldyBDb2xvcigyNTUsIDU1LCA0NSwgMjU1KSwgbmV3IENvbG9yKDE5OSwgMTcsIDIyNywgMTApLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDU0LCAzKV07XHJcbiAgICAgICAgbGV0IGV2ZW50czogQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4gPSBuZXcgQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4oKTtcclxuICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwicG9vcGluZ1wiLCBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSxub3cuZ2V0TW9udGgoKSwyMyksIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMjUpLCBmYWxzZSk7XHJcblx0XHRcclxuXHRcdC8qXHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxOSk7XHJcbiAgICAgICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIDIwKTtcclxuICAgICAgICAgICAgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcImV2ZW50IFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCBmYWxzZSwgY29sb3JzW2kgKiAxMCAlIChjb2xvcnMubGVuZ3RoIC0gMSldKTtcclxuICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoaSAlIDMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcInNlY29uZCBcIiArIGksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJ1ZSwgY29sb3JzW2kgKiA1ICUgKGNvbG9ycy5sZW5ndGggLSAxKV0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdFx0Ki9cclxuXHRcdGV2ZW50cy5wdXNoKGV2ZW50KTtcclxuXHRcdFxyXG5cdFx0Ly9jb252ZXJ0IGV2ZW50cyB0byBkaWN0aW9uYXJpZXMsIHN0cmluZ2lmeVxyXG5cdFx0Ly93aGVuIHJlYWRpbmcgaW4sIGNvbnZlcnQgYmFjayBmcm9tIGRpY3Rpb25hcmllcyB0byBldmVudCBvYmplY3RzXHJcblx0XHR2YXIgZGljdEV2ZW50O1xyXG5cdFx0YXBwbGljYXRpb25TZXR0aW5nc01vZHVsZS5zZXROdW1iZXIoXCJsZW5ndGhcIiwgZXZlbnRzLmxlbmd0aCk7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHJcblx0XHRcdGRpY3RFdmVudCA9IHtcclxuXHRcdFx0XHR0aXRsZTogZXZlbnRzW2ldLnRpdGxlLFxyXG5cdFx0XHRcdHN0YXJ0RGF0ZTogZXZlbnRzW2ldLnN0YXJ0RGF0ZS50b1N0cmluZygpLFxyXG5cdFx0XHRcdGVuZERhdGU6IGV2ZW50c1tpXS5lbmREYXRlLFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0YXBwbGljYXRpb25TZXR0aW5nc01vZHVsZS5zZXRTdHJpbmcoXCJldmVudFwiICsgaSwgSlNPTi5zdHJpbmdpZnkoZGljdEV2ZW50KSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0dmFyIGxlbmd0aCA9IGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuZ2V0TnVtYmVyKFwibGVuZ3RoXCIpO1xyXG5cdFx0bGV0IHRlbXBFdmVudHM6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+ID0gbmV3IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+KCk7XHJcblx0XHQvL2NvbnZlcnQgYWxsIGJhY2sgdG8gZXZlbnRzXHRcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XHJcblx0XHRcdHZhciBldmVudGkgPSBKU09OLnBhcnNlKGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuZ2V0U3RyaW5nKFwiZXZlbnRcIiArIGkudG9TdHJpbmcoKSkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnRpLnRpdGxlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coPERhdGU+ZXZlbnRpLnN0YXJ0RGF0ZSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2xldCBwb29wZXI6IERhdGUgPSBuZXcgRGF0ZSgyMDE3LCAxMiwgMjApO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKHBvb3Blcik7XHJcblx0XHRcdHZhciB0ZW1wRXZlbnQ6IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2RhdGVzIHN0b3JlZCB3ZWlyZCBzbyBjcmVhdGUgbmV3IGRhdGUgb2JqZWN0cyBhbmQgdXNlIHRoZW0gaW4gY2FsZW5kYXIgZXZlbnRzXHJcblx0XHRcdC8vdGhlbiBwdXNoIHRvIGNhbGVuZGFyIGV2ZW50cyBhcnJheVxyXG5cdFx0XHR0ZW1wRXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChldmVudGkudGl0bGUsIG5ldyBEYXRlKGV2ZW50aS5zdGFydERhdGUpLCBuZXcgRGF0ZShldmVudGkuZW5kRGF0ZSkpO1xyXG5cdFx0XHR0ZW1wRXZlbnRzLnB1c2godGVtcEV2ZW50KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly9zZXQgc291cmNlIHRvIHNob3cgaW4gY2FsZW5kYXJcclxuXHRcdHRoaXMuc291cmNlID0gdGVtcEV2ZW50cztcclxuXHJcbiAgICB9XHJcblx0XHJcblx0cHVibGljIGFkZEV2ZW50KGV2ZW50RGF0YSkge1xyXG5cdFx0Ly90aGlzIGV2ZW50IGdldHMgZmlyZWQgcHJvcGVybHlcclxuXHRcdGNvbnNvbGUubG9nKFwiYWRkXCIpO1xyXG5cdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHR2YXIgZXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IHRoaXMuc291cmNlO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhldmVudHMubGVuZ3RoKTtcclxuXHRcdHZhciBldmVudDogY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudDtcclxuXHRcdGV2ZW50ID0gbmV3IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQoXCJwb29waW5nXCIsIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLG5vdy5nZXRNb250aCgpLDE5KSwgbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAyNSksIGZhbHNlKTtcclxuXHRcdGV2ZW50cy5wdXNoKGV2ZW50KTtcclxuXHRcdFxyXG5cdFx0Ly9zYXZlIGxvY2FsbHlcclxuXHRcdGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuc2V0U3RyaW5nKFwiZXZlbnRzXCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50cykpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNldChcImNhbGVuZGFyRXZlbnRzXCIsIGV2ZW50cyk7XHJcblx0XHRcclxuXHRcdC8vZXZlbnRzID0gPEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+PkpTT04ucGFyc2UoYXBwbGljYXRpb25TZXR0aW5nc01vZHVsZS5nZXRTdHJpbmcoXCJldmVudHNcIikpO1xyXG5cdFx0Ly9yZXNvbHZlKGV2ZW50cyk7XHJcblx0XHQvKlxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGV2ZW50c1tpXSA9IGV2ZW50c1tpXSBhcyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50O1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2codHlwZW9mKGV2ZW50c1sxXSkgPT0gdHlwZW9mKGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQpKTtcclxuXHRcdGNvbnNvbGUubG9nKGV2ZW50c1sxXS50aXRsZSk7XHJcblx0XHQqL1xyXG5cdFx0Ly92YXIgcG9vcCA9IG5ldyBCcm93c2VWaWV3TW9kZWwoKTtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHQvL2dldHMgdGhlIGpzb24gc3RyaW5nIG9mIGV2ZW50cyBhbmQgcG9wdWxhdGVzIHRoZSBjYWxlbmRhciBvbiBwYWdlIGxvYWRcclxuXHRwdWJsaWMgbG9hZEV2ZW50cygpe1xyXG5cdFx0dmFyIGV2ZW50czogQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4gPSA8QXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4+SlNPTi5wYXJzZShhcHBsaWNhdGlvblNldHRpbmdzTW9kdWxlLmdldFN0cmluZyhcImV2ZW50c1wiKSk7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGRlbGV0ZUV2ZW50KGV2ZW50RGF0YSkge1xyXG5cdFx0Ly90aGlzIGV2ZW50IGdldHMgZmlyZWQgcHJvcGVybHlcclxuXHRcdGNvbnNvbGUubG9nKFwiZGVsZXRlXCIpO1xyXG5cdH1cclxuXHQvL01PUkUgQ0FMRU5EQVIgTUVUSE9EU1xyXG4gICAgc2V0IHNvdXJjZSh2YWx1ZTogQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4pIHtcclxuICAgICAgICB0aGlzLnNldChcImV2ZW50U291cmNlXCIsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc291cmNlKCk6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+IHtcclxuICAgICAgICByZXR1cm4gPEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+PnRoaXMuZ2V0KFwiZXZlbnRTb3VyY2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRGF0ZVNlbGVjdGVkKGFyZ3M6IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyU2VsZWN0aW9uRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGRhdGU6IERhdGUgPSBhcmdzLmRhdGU7XHJcbiAgICAgICAgdmFyIGNhbGVuZGFyOiBjYWxlbmRhck1vZHVsZS5SYWRDYWxlbmRhciA9IDxjYWxlbmRhck1vZHVsZS5SYWRDYWxlbmRhcj5mcmFtZU1vZHVsZS50b3Btb3N0KCkuZ2V0Vmlld0J5SWQoXCJjYWxlbmRhclwiKTtcclxuICAgICAgICB2YXIgZXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IGNhbGVuZGFyLmdldEV2ZW50c0ZvckRhdGUoZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJteUl0ZW1zXCIsIGV2ZW50cyk7XHJcbiAgICB9XHJcblx0XHJcblx0XHJcblx0cHVibGljIHRvZ2dsZURyb3Bkb3duKGV2ZW50RGF0YSl7XHJcblx0XHQvL3RvZ2dsZSB3b3JrcyBub3dcclxuXHRcdHRoaXMuc2V0KFwic2hvd0RldGFpbHNcIiwgIXRoaXMuZ2V0KFwic2hvd0RldGFpbHNcIikpO1xyXG5cdH1cclxuXHRcclxuXHJcbn1cclxuXHJcbiJdfQ==