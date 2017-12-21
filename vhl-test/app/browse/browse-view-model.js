"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var calendarModule = require("nativescript-pro-ui/calendar");
var frameModule = require("tns-core-modules/ui/frame");
var color_1 = require("tns-core-modules/color");
var BrowseViewModel = /** @class */ (function (_super) {
    __extends(BrowseViewModel, _super);
    function BrowseViewModel() {
        var _this = _super.call(this) || this;
        //CALENDAR POPULATING STUFF
        var now = new Date();
        var startDate, endDate, event;
        var colors = [new color_1.Color(200, 188, 26, 214), new color_1.Color(220, 255, 109, 130), new color_1.Color(255, 55, 45, 255), new color_1.Color(199, 17, 227, 10), new color_1.Color(255, 255, 54, 3)];
        var events = new Array();
        for (var i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), 19);
            endDate = new Date(now.getFullYear(), now.getMonth(), 20);
            event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
            if (i % 3 == 0) {
                event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event);
            }
        }
        _this.source = events;
        return _this;
    }
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
    return BrowseViewModel;
}(observable_1.Observable));
exports.BrowseViewModel = BrowseViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3Qyw2REFBZ0U7QUFFaEUsdURBQTBEO0FBQzFELGdEQUErQztBQUUvQztJQUFxQyxtQ0FBVTtJQUMzQztRQUFBLFlBQ0ksaUJBQU8sU0FvQlY7UUFsQkgsMkJBQTJCO1FBQzNCLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDZixJQUFJLFNBQWUsRUFDZixPQUFhLEVBQ2IsS0FBbUMsQ0FBQztRQUN4QyxJQUFJLE1BQU0sR0FBaUIsQ0FBQyxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9LLElBQUksTUFBTSxHQUF3QyxJQUFJLEtBQUssRUFBZ0MsQ0FBQztRQUM1RixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFCLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVELE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFELEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hILE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2SCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7UUFDTCxDQUFDO1FBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBQ3pCLENBQUM7SUFHRCxzQkFBSSxtQ0FBTTthQUlWO1lBQ0ksTUFBTSxDQUFzQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFQSix1QkFBdUI7YUFDcEIsVUFBVyxLQUEwQztZQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQU1NLHdDQUFjLEdBQXJCLFVBQXNCLElBQStDO1FBQ2pFLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQTJELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckgsSUFBSSxNQUFNLEdBQXdDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBdkNELENBQXFDLHVCQUFVLEdBdUM5QztBQXZDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgY2FsZW5kYXJNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXByby11aS9jYWxlbmRhclwiKTtcbmltcG9ydCBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblx0XHRcblx0XHQvL0NBTEVOREFSIFBPUFVMQVRJTkcgU1RVRkZcblx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZTogRGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IERhdGUsXG4gICAgICAgICAgICBldmVudDogY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudDtcbiAgICAgICAgbGV0IGNvbG9yczogQXJyYXk8Q29sb3I+ID0gW25ldyBDb2xvcigyMDAsIDE4OCwgMjYsIDIxNCksIG5ldyBDb2xvcigyMjAsIDI1NSwgMTA5LCAxMzApLCBuZXcgQ29sb3IoMjU1LCA1NSwgNDUsIDI1NSksIG5ldyBDb2xvcigxOTksIDE3LCAyMjcsIDEwKSwgbmV3IENvbG9yKDI1NSwgMjU1LCA1NCwgMyldO1xuICAgICAgICBsZXQgZXZlbnRzOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PiA9IG5ldyBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50PigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMTkpO1xuICAgICAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMjApO1xuICAgICAgICAgICAgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcImV2ZW50IFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCBmYWxzZSwgY29sb3JzW2kgKiAxMCAlIChjb2xvcnMubGVuZ3RoIC0gMSldKTtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChpICUgMyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcInNlY29uZCBcIiArIGksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJ1ZSwgY29sb3JzW2kgKiA1ICUgKGNvbG9ycy5sZW5ndGggLSAxKV0pO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50cztcbiAgICB9XG5cblx0Ly9NT1JFIENBTEVOREFSIE1FVEhPRFNcbiAgICBzZXQgc291cmNlKHZhbHVlOiBBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50Pikge1xuICAgICAgICB0aGlzLnNldChcImV2ZW50U291cmNlXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlKCk6IEFycmF5PGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQ+IHtcbiAgICAgICAgcmV0dXJuIDxBcnJheTxjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50Pj50aGlzLmdldChcImV2ZW50U291cmNlXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRhdGVTZWxlY3RlZChhcmdzOiBjYWxlbmRhck1vZHVsZS5DYWxlbmRhclNlbGVjdGlvbkV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgZGF0ZTogRGF0ZSA9IGFyZ3MuZGF0ZTtcbiAgICAgICAgdmFyIGNhbGVuZGFyOiBjYWxlbmRhck1vZHVsZS5SYWRDYWxlbmRhciA9IDxjYWxlbmRhck1vZHVsZS5SYWRDYWxlbmRhcj5mcmFtZU1vZHVsZS50b3Btb3N0KCkuZ2V0Vmlld0J5SWQoXCJjYWxlbmRhclwiKTtcbiAgICAgICAgdmFyIGV2ZW50czogQXJyYXk8Y2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudD4gPSBjYWxlbmRhci5nZXRFdmVudHNGb3JEYXRlKGRhdGUpO1xuICAgICAgICB0aGlzLnNldChcIm15SXRlbXNcIiwgZXZlbnRzKTtcbiAgICB9XG59XG5cbiJdfQ==