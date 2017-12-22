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
            //String niggers = new String("event" + i.toString());
            applicationSettingsModule.setString("event" + i_1, JSON.stringify(dictEvent));
        }
        //console.log(JSON.stringify(dictEvent));
        //applicationSettingsModule.setString("events", JSON.stringify(dictEvent));
        //console.log(JSON.parse(dictEvent));
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
            //dates could be in wrong format
            tempEvent = new calendarModule.CalendarEvent(eventi.title, new Date(eventi.startDate), new Date(eventi.endDate));
            tempEvents.push(tempEvent);
        }
        _this.source = tempEvents;
        console.log(events.length);
        return _this;
        //console.log(events[events.length - 1].title);
        //console.log(events[0].startDate);
        //ADD AN EVENT ON ANOTHER PAGE, RELOAD THIS PAGE WITH A METHOD THAT GETS ALL THE EVENTS AND POPULATES THE CALENDAR IN THE CONSTRUCTOR
        //this.addEvent(event);
        //this.source = events;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3Qyw2REFBZ0U7QUFFaEUsdURBQTBEO0FBQzFELGdEQUErQztBQUMvQyxnRUFBbUU7QUFFbkU7SUFBcUMsbUNBQVU7SUFDM0M7UUFBQSxZQUNJLGlCQUFPLFNBd0VWO1FBdEVILDJCQUEyQjtRQUMzQixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxTQUFlLEVBQ2YsT0FBYSxFQUNiLEtBQW1DLENBQUM7UUFDeEMsSUFBSSxNQUFNLEdBQWlCLENBQUMsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvSyxJQUFJLE1BQU0sR0FBd0MsSUFBSSxLQUFLLEVBQWdDLENBQUM7UUFDNUYsS0FBSyxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUs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QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0csd0NBQWMsR0FBckIsVUFBc0IsU0FBUztRQUM5QixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdGLHNCQUFDO0FBQUQsQ0FBQyxBQXpJRCxDQUFxQyx1QkFBVSxHQXlJOUM7QUF6SVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IGNhbGVuZGFyTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvY2FsZW5kYXJcIik7XG5pbXBvcnQgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbmltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuaW1wb3J0IGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblx0XHRcblx0XHQvL0NBTEVOREFSIFBPUFVMQVRJTkcgU1RVRkZcblx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZTogRGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IERhdGUsXG4gICAgICAgICAgICBldmVudDogY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudDtcbiAgICAgICAgbGV0IGNvbG9yczogQXJyYXk8Q29sb3I+ID0gW25ldyBDb2xvcigyMDAsIDE4OCwgMjYsIDIxNCksIG5ldyBDb2xvcigyMjAsIDI1NSwgMTA5LCAxMzApLCBuZXcgQ29sb3IoMjU1LCA1NSwgNDUsIDI1NSksIG5ldyBDb2xvcigxOTksIDE3LCAyMjcsIDEwKSwgbmV3IENvbG9yKDI1NSwgMjU1LCA1NCwgMyldO1xuICAgICAgICBsZXQgZXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IG5ldyBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PigpO1xuICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwicG9vcGluZ1wiLCBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSxub3cuZ2V0TW9udGgoKSwyMyksIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMjUpLCBmYWxzZSk7XG5cdFx0XG5cdFx0Lypcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMTkpO1xuICAgICAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMjApO1xuICAgICAgICAgICAgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcImV2ZW50IFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCBmYWxzZSwgY29sb3JzW2kgKiAxMCAlIChjb2xvcnMubGVuZ3RoIC0gMSldKTtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChpICUgMyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcInNlY29uZCBcIiArIGksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJ1ZSwgY29sb3JzW2kgKiA1ICUgKGNvbG9ycy5sZW5ndGggLSAxKV0pO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHRcdCovXG5cdFx0ZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdC8vY29udmVydCBldmVudHMgdG8gZGljdGlvbmFyaWVzLCBzdHJpbmdpZnlcblx0XHQvL3doZW4gcmVhZGluZyBpbiwgY29udmVydCBiYWNrIGZyb20gZGljdGlvbmFyaWVzIHRvIGV2ZW50IG9iamVjdHNcblx0XHRcblx0XHR2YXIgZGljdEV2ZW50O1xuXHRcdGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuc2V0TnVtYmVyKFwibGVuZ3RoXCIsIGV2ZW50cy5sZW5ndGgpO1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XG5cdFx0XHRkaWN0RXZlbnQgPSB7XG5cdFx0XHRcdHRpdGxlOiBldmVudHNbaV0udGl0bGUsXG5cdFx0XHRcdHN0YXJ0RGF0ZTogZXZlbnRzW2ldLnN0YXJ0RGF0ZS50b1N0cmluZygpLFxuXHRcdFx0XHRlbmREYXRlOiBldmVudHNbaV0uZW5kRGF0ZSxcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly9TdHJpbmcgbmlnZ2VycyA9IG5ldyBTdHJpbmcoXCJldmVudFwiICsgaS50b1N0cmluZygpKTtcblx0XHRcdGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuc2V0U3RyaW5nKFwiZXZlbnRcIiArIGksIEpTT04uc3RyaW5naWZ5KGRpY3RFdmVudCkpO1xuXHRcdH1cblx0XHQvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRpY3RFdmVudCkpO1xuXHRcdC8vYXBwbGljYXRpb25TZXR0aW5nc01vZHVsZS5zZXRTdHJpbmcoXCJldmVudHNcIiwgSlNPTi5zdHJpbmdpZnkoZGljdEV2ZW50KSk7XG5cdFx0Ly9jb25zb2xlLmxvZyhKU09OLnBhcnNlKGRpY3RFdmVudCkpO1xuXHRcdHZhciBsZW5ndGggPSBhcHBsaWNhdGlvblNldHRpbmdzTW9kdWxlLmdldE51bWJlcihcImxlbmd0aFwiKTtcblx0XHRsZXQgdGVtcEV2ZW50czogQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4gPSBuZXcgQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4oKTtcblx0XHQvL2NvbnZlcnQgYWxsIGJhY2sgdG8gZXZlbnRzXHRcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIGV2ZW50aSA9IEpTT04ucGFyc2UoYXBwbGljYXRpb25TZXR0aW5nc01vZHVsZS5nZXRTdHJpbmcoXCJldmVudFwiICsgaS50b1N0cmluZygpKSk7XG5cdFx0XHRcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50aS50aXRsZSk7XG5cdFx0XHRjb25zb2xlLmxvZyg8RGF0ZT5ldmVudGkuc3RhcnREYXRlKTtcblx0XHRcdFxuXHRcdFx0Ly9sZXQgcG9vcGVyOiBEYXRlID0gbmV3IERhdGUoMjAxNywgMTIsIDIwKTtcblx0XHRcdC8vY29uc29sZS5sb2cocG9vcGVyKTtcblx0XHRcdHZhciB0ZW1wRXZlbnQ6IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ7XG5cdFx0XHRcblx0XHRcdC8vZGF0ZXMgY291bGQgYmUgaW4gd3JvbmcgZm9ybWF0XG5cdFx0XHR0ZW1wRXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChldmVudGkudGl0bGUsIG5ldyBEYXRlKGV2ZW50aS5zdGFydERhdGUpLCBuZXcgRGF0ZShldmVudGkuZW5kRGF0ZSkpO1xuXHRcdFx0dGVtcEV2ZW50cy5wdXNoKHRlbXBFdmVudCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zb3VyY2UgPSB0ZW1wRXZlbnRzO1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50cy5sZW5ndGgpO1xuXG5cdFx0XG5cdFx0Ly9jb25zb2xlLmxvZyhldmVudHNbZXZlbnRzLmxlbmd0aCAtIDFdLnRpdGxlKTtcblx0XHQvL2NvbnNvbGUubG9nKGV2ZW50c1swXS5zdGFydERhdGUpO1xuXHRcdFxuXHRcdC8vQUREIEFOIEVWRU5UIE9OIEFOT1RIRVIgUEFHRSwgUkVMT0FEIFRISVMgUEFHRSBXSVRIIEEgTUVUSE9EIFRIQVQgR0VUUyBBTEwgVEhFIEVWRU5UUyBBTkQgUE9QVUxBVEVTIFRIRSBDQUxFTkRBUiBJTiBUSEUgQ09OU1RSVUNUT1Jcblx0XHQvL3RoaXMuYWRkRXZlbnQoZXZlbnQpO1xuXHRcdFxuICAgICAgICAvL3RoaXMuc291cmNlID0gZXZlbnRzO1xuICAgIH1cblx0XG5cdHB1YmxpYyBhZGRFdmVudChldmVudERhdGEpIHtcblx0XHQvL3RoaXMgZXZlbnQgZ2V0cyBmaXJlZCBwcm9wZXJseVxuXHRcdGNvbnNvbGUubG9nKFwiYWRkXCIpO1xuXHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdHZhciBldmVudHM6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+ID0gdGhpcy5zb3VyY2U7XG5cdFx0Ly9jb25zb2xlLmxvZyhldmVudHMubGVuZ3RoKTtcblx0XHR2YXIgZXZlbnQ6IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ7XG5cdFx0ZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcInBvb3BpbmdcIiwgbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksbm93LmdldE1vbnRoKCksMTkpLCBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIDI1KSwgZmFsc2UpO1xuXHRcdGV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRcblx0XHQvL3NhdmUgbG9jYWxseVxuXHRcdGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuc2V0U3RyaW5nKFwiZXZlbnRzXCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50cykpO1xuXHRcdFxuXHRcdHRoaXMuc2V0KFwiY2FsZW5kYXJFdmVudHNcIiwgZXZlbnRzKTtcblx0XHRcblx0XHQvL2V2ZW50cyA9IDxBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50Pj5KU09OLnBhcnNlKGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuZ2V0U3RyaW5nKFwiZXZlbnRzXCIpKTtcblx0XHQvL3Jlc29sdmUoZXZlbnRzKTtcblx0XHQvKlxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0ZXZlbnRzW2ldID0gZXZlbnRzW2ldIGFzIGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHR5cGVvZihldmVudHNbMV0pID09IHR5cGVvZihjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KSk7XG5cdFx0Y29uc29sZS5sb2coZXZlbnRzWzFdLnRpdGxlKTtcblx0XHQqL1xuXHRcdC8vdmFyIHBvb3AgPSBuZXcgQnJvd3NlVmlld01vZGVsKCk7XG5cdFx0XG5cdH1cblx0XG5cdC8vZ2V0cyB0aGUganNvbiBzdHJpbmcgb2YgZXZlbnRzIGFuZCBwb3B1bGF0ZXMgdGhlIGNhbGVuZGFyIG9uIHBhZ2UgbG9hZFxuXHRwdWJsaWMgbG9hZEV2ZW50cygpe1xuXHRcdHZhciBldmVudHM6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+ID0gPEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+PkpTT04ucGFyc2UoYXBwbGljYXRpb25TZXR0aW5nc01vZHVsZS5nZXRTdHJpbmcoXCJldmVudHNcIikpO1xuXHRcdFxuXHR9XG5cdFxuXHRwdWJsaWMgZGVsZXRlRXZlbnQoZXZlbnREYXRhKSB7XG5cdFx0Ly90aGlzIGV2ZW50IGdldHMgZmlyZWQgcHJvcGVybHlcblx0XHRjb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcblx0fVxuXHQvL01PUkUgQ0FMRU5EQVIgTUVUSE9EU1xuICAgIHNldCBzb3VyY2UodmFsdWU6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+KSB7XG4gICAgICAgIHRoaXMuc2V0KFwiZXZlbnRTb3VyY2VcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzb3VyY2UoKTogQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4ge1xuICAgICAgICByZXR1cm4gPEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+PnRoaXMuZ2V0KFwiZXZlbnRTb3VyY2VcIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGF0ZVNlbGVjdGVkKGFyZ3M6IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyU2VsZWN0aW9uRXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBkYXRlOiBEYXRlID0gYXJncy5kYXRlO1xuICAgICAgICB2YXIgY2FsZW5kYXI6IGNhbGVuZGFyTW9kdWxlLlJhZENhbGVuZGFyID0gPGNhbGVuZGFyTW9kdWxlLlJhZENhbGVuZGFyPmZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nZXRWaWV3QnlJZChcImNhbGVuZGFyXCIpO1xuICAgICAgICB2YXIgZXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IGNhbGVuZGFyLmdldEV2ZW50c0ZvckRhdGUoZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0KFwibXlJdGVtc1wiLCBldmVudHMpO1xuICAgIH1cblx0XG5cdFxuXHRwdWJsaWMgdG9nZ2xlRHJvcGRvd24oZXZlbnREYXRhKXtcblx0XHQvL3RvZ2dsZSB3b3JrcyBub3dcblx0XHR0aGlzLnNldChcInNob3dEZXRhaWxzXCIsICF0aGlzLmdldChcInNob3dEZXRhaWxzXCIpKTtcblx0fVxuXHRcblxufVxuXG4iXX0=