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
        //ADD NAVIGATION CODE HERE
        frameModule.topmost().navigate("calendarmanager/calendarmanager-page");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGVuZGFyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsNkRBQWdFO0FBRWhFLHVEQUEwRDtBQUMxRCxnREFBK0M7QUFDL0MsZ0VBQW1FO0FBRW5FO0lBQXVDLHFDQUFVO0lBQzdDO1FBQUEsWUFDSSxpQkFBTyxTQTZEVjtRQTNESCwyQkFBMkI7UUFDM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNmLElBQUksU0FBZSxFQUNmLE9BQWEsRUFDYixLQUFtQyxDQUFDO1FBQ3hDLElBQUksTUFBTSxHQUFpQixDQUFDLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0ssSUFBSSxNQUFNLEdBQXdDLElBQUksS0FBSyxFQUFnQyxDQUFDO1FBQzVGLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxF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QUksUUFBUSxHQUEyRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JILElBQUksTUFBTSxHQUF3QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdHLDBDQUFjLEdBQXJCLFVBQXNCLFNBQVM7UUFDOUIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFHRix3QkFBQztBQUFELENBQUMsQUF4R0QsQ0FBdUMsdUJBQVUsR0F3R2hEO0FBeEdZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBjYWxlbmRhck1vZHVsZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2NhbGVuZGFyXCIpO1xyXG5pbXBvcnQgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcclxuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuaW1wb3J0IGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdC8vQ0FMRU5EQVIgUE9QVUxBVElORyBTVFVGRlxyXG5cdFx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZTogRGF0ZSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogRGF0ZSxcclxuICAgICAgICAgICAgZXZlbnQ6IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ7XHJcbiAgICAgICAgbGV0IGNvbG9yczogQXJyYXk8Q29sb3I+ID0gW25ldyBDb2xvcigyMDAsIDE4OCwgMjYsIDIxNCksIG5ldyBDb2xvcigyMjAsIDI1NSwgMTA5LCAxMzApLCBuZXcgQ29sb3IoMjU1LCA1NSwgNDUsIDI1NSksIG5ldyBDb2xvcigxOTksIDE3LCAyMjcsIDEwKSwgbmV3IENvbG9yKDI1NSwgMjU1LCA1NCwgMyldO1xyXG4gICAgICAgIGxldCBldmVudHM6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+ID0gbmV3IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+KCk7XHJcbiAgICAgICAgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcInBvb3BpbmdcIiwgbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksbm93LmdldE1vbnRoKCksMjMpLCBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIDI1KSwgZmFsc2UpO1xyXG5cdFx0XHJcblx0XHQvKlxyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMTkpO1xyXG4gICAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAyMCk7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gbmV3IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQoXCJldmVudCBcIiArIGksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgZmFsc2UsIGNvbG9yc1tpICogMTAgJSAoY29sb3JzLmxlbmd0aCAtIDEpXSk7XHJcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKGkgJSAzID09IDApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQoXCJzZWNvbmQgXCIgKyBpLCBzdGFydERhdGUsIGVuZERhdGUsIHRydWUsIGNvbG9yc1tpICogNSAlIChjb2xvcnMubGVuZ3RoIC0gMSldKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHRcdCovXHJcblx0XHRldmVudHMucHVzaChldmVudCk7XHJcblx0XHRcclxuXHRcdC8vY29udmVydCBldmVudHMgdG8gZGljdGlvbmFyaWVzLCBzdHJpbmdpZnlcclxuXHRcdC8vd2hlbiByZWFkaW5nIGluLCBjb252ZXJ0IGJhY2sgZnJvbSBkaWN0aW9uYXJpZXMgdG8gZXZlbnQgb2JqZWN0c1xyXG5cdFx0dmFyIGRpY3RFdmVudDtcclxuXHRcdGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuc2V0TnVtYmVyKFwibGVuZ3RoXCIsIGV2ZW50cy5sZW5ndGgpO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFxyXG5cdFx0XHRkaWN0RXZlbnQgPSB7XHJcblx0XHRcdFx0dGl0bGU6IGV2ZW50c1tpXS50aXRsZSxcclxuXHRcdFx0XHRzdGFydERhdGU6IGV2ZW50c1tpXS5zdGFydERhdGUudG9TdHJpbmcoKSxcclxuXHRcdFx0XHRlbmREYXRlOiBldmVudHNbaV0uZW5kRGF0ZSxcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuc2V0U3RyaW5nKFwiZXZlbnRcIiArIGksIEpTT04uc3RyaW5naWZ5KGRpY3RFdmVudCkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdHZhciBsZW5ndGggPSBhcHBsaWNhdGlvblNldHRpbmdzTW9kdWxlLmdldE51bWJlcihcImxlbmd0aFwiKTtcclxuXHRcdGxldCB0ZW1wRXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IG5ldyBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PigpO1xyXG5cdFx0Ly9jb252ZXJ0IGFsbCBiYWNrIHRvIGV2ZW50c1x0XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xyXG5cdFx0XHR2YXIgZXZlbnRpID0gSlNPTi5wYXJzZShhcHBsaWNhdGlvblNldHRpbmdzTW9kdWxlLmdldFN0cmluZyhcImV2ZW50XCIgKyBpLnRvU3RyaW5nKCkpKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vbGV0IHBvb3BlcjogRGF0ZSA9IG5ldyBEYXRlKDIwMTcsIDEyLCAyMCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2cocG9vcGVyKTtcclxuXHRcdFx0dmFyIHRlbXBFdmVudDogY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudDtcclxuXHRcdFx0XHJcblx0XHRcdC8vZGF0ZXMgc3RvcmVkIHdlaXJkIHNvIGNyZWF0ZSBuZXcgZGF0ZSBvYmplY3RzIGFuZCB1c2UgdGhlbSBpbiBjYWxlbmRhciBldmVudHNcclxuXHRcdFx0Ly90aGVuIHB1c2ggdG8gY2FsZW5kYXIgZXZlbnRzIGFycmF5XHJcblx0XHRcdHRlbXBFdmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KGV2ZW50aS50aXRsZSwgbmV3IERhdGUoZXZlbnRpLnN0YXJ0RGF0ZSksIG5ldyBEYXRlKGV2ZW50aS5lbmREYXRlKSk7XHJcblx0XHRcdHRlbXBFdmVudHMucHVzaCh0ZW1wRXZlbnQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvL3NldCBzb3VyY2UgdG8gc2hvdyBpbiBjYWxlbmRhclxyXG5cdFx0dGhpcy5zb3VyY2UgPSB0ZW1wRXZlbnRzO1xyXG5cclxuICAgIH1cclxuXHRcclxuXHRwdWJsaWMgYWRkRXZlbnQoZXZlbnREYXRhKSB7XHJcblx0XHQvL0FERCBOQVZJR0FUSU9OIENPREUgSEVSRVxyXG5cdFx0ZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKFwiY2FsZW5kYXJtYW5hZ2VyL2NhbGVuZGFybWFuYWdlci1wYWdlXCIpO1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdC8vZ2V0cyB0aGUganNvbiBzdHJpbmcgb2YgZXZlbnRzIGFuZCBwb3B1bGF0ZXMgdGhlIGNhbGVuZGFyIG9uIHBhZ2UgbG9hZFxyXG5cdHB1YmxpYyBsb2FkRXZlbnRzKCl7XHJcblx0XHR2YXIgZXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IDxBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50Pj5KU09OLnBhcnNlKGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuZ2V0U3RyaW5nKFwiZXZlbnRzXCIpKTtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZGVsZXRlRXZlbnQoZXZlbnREYXRhKSB7XHJcblx0XHQvL3RoaXMgZXZlbnQgZ2V0cyBmaXJlZCBwcm9wZXJseVxyXG5cdFx0Y29uc29sZS5sb2coXCJkZWxldGVcIik7XHJcblx0fVxyXG5cdC8vTU9SRSBDQUxFTkRBUiBNRVRIT0RTXHJcbiAgICBzZXQgc291cmNlKHZhbHVlOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50Pikge1xyXG4gICAgICAgIHRoaXMuc2V0KFwiZXZlbnRTb3VyY2VcIiwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzb3VyY2UoKTogQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4ge1xyXG4gICAgICAgIHJldHVybiA8QXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4+dGhpcy5nZXQoXCJldmVudFNvdXJjZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EYXRlU2VsZWN0ZWQoYXJnczogY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJTZWxlY3Rpb25FdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgZGF0ZTogRGF0ZSA9IGFyZ3MuZGF0ZTtcclxuICAgICAgICB2YXIgY2FsZW5kYXI6IGNhbGVuZGFyTW9kdWxlLlJhZENhbGVuZGFyID0gPGNhbGVuZGFyTW9kdWxlLlJhZENhbGVuZGFyPmZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nZXRWaWV3QnlJZChcImNhbGVuZGFyXCIpO1xyXG4gICAgICAgIHZhciBldmVudHM6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+ID0gY2FsZW5kYXIuZ2V0RXZlbnRzRm9yRGF0ZShkYXRlKTtcclxuICAgICAgICB0aGlzLnNldChcIm15SXRlbXNcIiwgZXZlbnRzKTtcclxuICAgIH1cclxuXHRcclxuXHRcclxuXHRwdWJsaWMgdG9nZ2xlRHJvcGRvd24oZXZlbnREYXRhKXtcclxuXHRcdC8vdG9nZ2xlIHdvcmtzIG5vd1xyXG5cdFx0dGhpcy5zZXQoXCJzaG93RGV0YWlsc1wiLCAhdGhpcy5nZXQoXCJzaG93RGV0YWlsc1wiKSk7XHJcblx0fVxyXG5cdFxyXG5cclxufVxyXG5cclxuIl19