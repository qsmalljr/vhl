"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var calendarModule = require("nativescript-pro-ui/calendar");
var frameModule = require("tns-core-modules/ui/frame");
var color_1 = require("tns-core-modules/color");
var applicationSettingsModule = require("application-settings");
var BrowseViewModel = /** @class */ (function (_super) {
    __extends(BrowseViewModel, _super);
    function BrowseViewModel() {
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
    BrowseViewModel.prototype.addEvent = function (eventData) {
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
    BrowseViewModel.prototype.loadEvents = function () {
        var events = JSON.parse(applicationSettingsModule.getString("events"));
    };
    BrowseViewModel.prototype.deleteEvent = function (eventData) {
        //this event gets fired properly
        console.log("delete");
    };
    Object.defineProperty(BrowseViewModel.prototype, "source", {
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
    BrowseViewModel.prototype.onDateSelected = function (args) {
        var date = args.date;
        var calendar = frameModule.topmost().getViewById("calendar");
        var events = calendar.getEventsForDate(date);
        this.set("myItems", events);
    };
    BrowseViewModel.prototype.toggleDropdown = function (eventData) {
        //toggle works now
        this.set("showDetails", !this.get("showDetails"));
    };
    return BrowseViewModel;
}(observable_1.Observable));
exports.BrowseViewModel = BrowseViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3Qyw2REFBZ0U7QUFFaEUsdURBQTBEO0FBQzFELGdEQUErQztBQUMvQyxnRUFBbUU7QUFFbkU7SUFBcUMsbUNBQVU7SUFDM0M7UUFBQSxZQUNJLGlCQUFPLFNBZ0VWO1FBOURILDJCQUEyQjtRQUMzQixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxTQUFlLEVBQ2YsT0FBYSxFQUNiLEtBQW1DLENBQUM7UUFDeEMsSUFBSSxNQUFNLEdBQWlCLENBQUMsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvSyxJQUFJLE1BQU0sR0FBd0MsSUFBSSxLQUFLLEVBQWdDLENBQUM7UUFDNUYsS0FBSyxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUs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QUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0Ysc0JBQUM7QUFBRCxDQUFDLEFBaklELENBQXFDLHVCQUFVLEdBaUk5QztBQWpJWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgY2FsZW5kYXJNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXByby11aS9jYWxlbmRhclwiKTtcbmltcG9ydCBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5pbXBvcnQgYXBwbGljYXRpb25TZXR0aW5nc01vZHVsZSA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuZXhwb3J0IGNsYXNzIEJyb3dzZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXHRcdFxuXHRcdC8vQ0FMRU5EQVIgUE9QVUxBVElORyBTVFVGRlxuXHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgc3RhcnREYXRlOiBEYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogRGF0ZSxcbiAgICAgICAgICAgIGV2ZW50OiBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50O1xuICAgICAgICBsZXQgY29sb3JzOiBBcnJheTxDb2xvcj4gPSBbbmV3IENvbG9yKDIwMCwgMTg4LCAyNiwgMjE0KSwgbmV3IENvbG9yKDIyMCwgMjU1LCAxMDksIDEzMCksIG5ldyBDb2xvcigyNTUsIDU1LCA0NSwgMjU1KSwgbmV3IENvbG9yKDE5OSwgMTcsIDIyNywgMTApLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDU0LCAzKV07XG4gICAgICAgIGxldCBldmVudHM6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+ID0gbmV3IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+KCk7XG4gICAgICAgIGV2ZW50ID0gbmV3IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQoXCJwb29waW5nXCIsIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLG5vdy5nZXRNb250aCgpLDIzKSwgbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAyNSksIGZhbHNlKTtcblx0XHRcblx0XHQvKlxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxOSk7XG4gICAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAyMCk7XG4gICAgICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwiZXZlbnQgXCIgKyBpLCBzdGFydERhdGUsIGVuZERhdGUsIGZhbHNlLCBjb2xvcnNbaSAqIDEwICUgKGNvbG9ycy5sZW5ndGggLSAxKV0pO1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGkgJSAzID09IDApIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwic2Vjb25kIFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCB0cnVlLCBjb2xvcnNbaSAqIDUgJSAoY29sb3JzLmxlbmd0aCAtIDEpXSk7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdFx0Ki9cblx0XHRldmVudHMucHVzaChldmVudCk7XG5cdFx0XG5cdFx0Ly9jb252ZXJ0IGV2ZW50cyB0byBkaWN0aW9uYXJpZXMsIHN0cmluZ2lmeVxuXHRcdC8vd2hlbiByZWFkaW5nIGluLCBjb252ZXJ0IGJhY2sgZnJvbSBkaWN0aW9uYXJpZXMgdG8gZXZlbnQgb2JqZWN0c1xuXHRcdHZhciBkaWN0RXZlbnQ7XG5cdFx0YXBwbGljYXRpb25TZXR0aW5nc01vZHVsZS5zZXROdW1iZXIoXCJsZW5ndGhcIiwgZXZlbnRzLmxlbmd0aCk7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcblx0XHRcdGRpY3RFdmVudCA9IHtcblx0XHRcdFx0dGl0bGU6IGV2ZW50c1tpXS50aXRsZSxcblx0XHRcdFx0c3RhcnREYXRlOiBldmVudHNbaV0uc3RhcnREYXRlLnRvU3RyaW5nKCksXG5cdFx0XHRcdGVuZERhdGU6IGV2ZW50c1tpXS5lbmREYXRlLFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuc2V0U3RyaW5nKFwiZXZlbnRcIiArIGksIEpTT04uc3RyaW5naWZ5KGRpY3RFdmVudCkpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHR2YXIgbGVuZ3RoID0gYXBwbGljYXRpb25TZXR0aW5nc01vZHVsZS5nZXROdW1iZXIoXCJsZW5ndGhcIik7XG5cdFx0bGV0IHRlbXBFdmVudHM6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+ID0gbmV3IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+KCk7XG5cdFx0Ly9jb252ZXJ0IGFsbCBiYWNrIHRvIGV2ZW50c1x0XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcblx0XHRcdHZhciBldmVudGkgPSBKU09OLnBhcnNlKGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuZ2V0U3RyaW5nKFwiZXZlbnRcIiArIGkudG9TdHJpbmcoKSkpO1xuXHRcdFx0XG5cdFx0XHRjb25zb2xlLmxvZyhldmVudGkudGl0bGUpO1xuXHRcdFx0Y29uc29sZS5sb2coPERhdGU+ZXZlbnRpLnN0YXJ0RGF0ZSk7XG5cdFx0XHRcblx0XHRcdC8vbGV0IHBvb3BlcjogRGF0ZSA9IG5ldyBEYXRlKDIwMTcsIDEyLCAyMCk7XG5cdFx0XHQvL2NvbnNvbGUubG9nKHBvb3Blcik7XG5cdFx0XHR2YXIgdGVtcEV2ZW50OiBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50O1xuXHRcdFx0XG5cdFx0XHQvL2RhdGVzIHN0b3JlZCB3ZWlyZCBzbyBjcmVhdGUgbmV3IGRhdGUgb2JqZWN0cyBhbmQgdXNlIHRoZW0gaW4gY2FsZW5kYXIgZXZlbnRzXG5cdFx0XHQvL3RoZW4gcHVzaCB0byBjYWxlbmRhciBldmVudHMgYXJyYXlcblx0XHRcdHRlbXBFdmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KGV2ZW50aS50aXRsZSwgbmV3IERhdGUoZXZlbnRpLnN0YXJ0RGF0ZSksIG5ldyBEYXRlKGV2ZW50aS5lbmREYXRlKSk7XG5cdFx0XHR0ZW1wRXZlbnRzLnB1c2godGVtcEV2ZW50KTtcblx0XHR9XG5cdFx0XG5cdFx0Ly9zZXQgc291cmNlIHRvIHNob3cgaW4gY2FsZW5kYXJcblx0XHR0aGlzLnNvdXJjZSA9IHRlbXBFdmVudHM7XG5cbiAgICB9XG5cdFxuXHRwdWJsaWMgYWRkRXZlbnQoZXZlbnREYXRhKSB7XG5cdFx0Ly90aGlzIGV2ZW50IGdldHMgZmlyZWQgcHJvcGVybHlcblx0XHRjb25zb2xlLmxvZyhcImFkZFwiKTtcblx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcblx0XHR2YXIgZXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IHRoaXMuc291cmNlO1xuXHRcdC8vY29uc29sZS5sb2coZXZlbnRzLmxlbmd0aCk7XG5cdFx0dmFyIGV2ZW50OiBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50O1xuXHRcdGV2ZW50ID0gbmV3IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQoXCJwb29waW5nXCIsIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLG5vdy5nZXRNb250aCgpLDE5KSwgbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAyNSksIGZhbHNlKTtcblx0XHRldmVudHMucHVzaChldmVudCk7XG5cdFx0XG5cdFx0Ly9zYXZlIGxvY2FsbHlcblx0XHRhcHBsaWNhdGlvblNldHRpbmdzTW9kdWxlLnNldFN0cmluZyhcImV2ZW50c1wiLCBKU09OLnN0cmluZ2lmeShldmVudHMpKTtcblx0XHRcblx0XHR0aGlzLnNldChcImNhbGVuZGFyRXZlbnRzXCIsIGV2ZW50cyk7XG5cdFx0XG5cdFx0Ly9ldmVudHMgPSA8QXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4+SlNPTi5wYXJzZShhcHBsaWNhdGlvblNldHRpbmdzTW9kdWxlLmdldFN0cmluZyhcImV2ZW50c1wiKSk7XG5cdFx0Ly9yZXNvbHZlKGV2ZW50cyk7XG5cdFx0Lypcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdGV2ZW50c1tpXSA9IGV2ZW50c1tpXSBhcyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50O1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh0eXBlb2YoZXZlbnRzWzFdKSA9PSB0eXBlb2YoY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudCkpO1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50c1sxXS50aXRsZSk7XG5cdFx0Ki9cblx0XHQvL3ZhciBwb29wID0gbmV3IEJyb3dzZVZpZXdNb2RlbCgpO1xuXHRcdFxuXHR9XG5cdFxuXHQvL2dldHMgdGhlIGpzb24gc3RyaW5nIG9mIGV2ZW50cyBhbmQgcG9wdWxhdGVzIHRoZSBjYWxlbmRhciBvbiBwYWdlIGxvYWRcblx0cHVibGljIGxvYWRFdmVudHMoKXtcblx0XHR2YXIgZXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IDxBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50Pj5KU09OLnBhcnNlKGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuZ2V0U3RyaW5nKFwiZXZlbnRzXCIpKTtcblx0XHRcblx0fVxuXHRcblx0cHVibGljIGRlbGV0ZUV2ZW50KGV2ZW50RGF0YSkge1xuXHRcdC8vdGhpcyBldmVudCBnZXRzIGZpcmVkIHByb3Blcmx5XG5cdFx0Y29uc29sZS5sb2coXCJkZWxldGVcIik7XG5cdH1cblx0Ly9NT1JFIENBTEVOREFSIE1FVEhPRFNcbiAgICBzZXQgc291cmNlKHZhbHVlOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50Pikge1xuICAgICAgICB0aGlzLnNldChcImV2ZW50U291cmNlXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlKCk6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+IHtcbiAgICAgICAgcmV0dXJuIDxBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50Pj50aGlzLmdldChcImV2ZW50U291cmNlXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRhdGVTZWxlY3RlZChhcmdzOiBjYWxlbmRhck1vZHVsZS5DYWxlbmRhclNlbGVjdGlvbkV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgZGF0ZTogRGF0ZSA9IGFyZ3MuZGF0ZTtcbiAgICAgICAgdmFyIGNhbGVuZGFyOiBjYWxlbmRhck1vZHVsZS5SYWRDYWxlbmRhciA9IDxjYWxlbmRhck1vZHVsZS5SYWRDYWxlbmRhcj5mcmFtZU1vZHVsZS50b3Btb3N0KCkuZ2V0Vmlld0J5SWQoXCJjYWxlbmRhclwiKTtcbiAgICAgICAgdmFyIGV2ZW50czogQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4gPSBjYWxlbmRhci5nZXRFdmVudHNGb3JEYXRlKGRhdGUpO1xuICAgICAgICB0aGlzLnNldChcIm15SXRlbXNcIiwgZXZlbnRzKTtcbiAgICB9XG5cdFxuXHRcblx0cHVibGljIHRvZ2dsZURyb3Bkb3duKGV2ZW50RGF0YSl7XG5cdFx0Ly90b2dnbGUgd29ya3Mgbm93XG5cdFx0dGhpcy5zZXQoXCJzaG93RGV0YWlsc1wiLCAhdGhpcy5nZXQoXCJzaG93RGV0YWlsc1wiKSk7XG5cdH1cblx0XG5cbn1cblxuIl19