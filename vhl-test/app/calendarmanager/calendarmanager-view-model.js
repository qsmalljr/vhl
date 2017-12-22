"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var calendarmanagerViewModel = /** @class */ (function (_super) {
    __extends(calendarmanagerViewModel, _super);
    function calendarmanagerViewModel() {
        var _this = _super.call(this) || this;
        _this.navBack = function () {
            //var title = this.title;
            //var year = this.year;
            //console.log(year);
        };
        return _this;
    }
    Object.defineProperty(calendarmanagerViewModel.prototype, "title", {
        get: function () {
            return this.get("textFieldValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(calendarmanagerViewModel.prototype, "year", {
        get: function () {
            //doesnt work
            return this.get("currentYear");
        },
        enumerable: true,
        configurable: true
    });
    calendarmanagerViewModel.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        //console.log(datePicker.year);
    };
    return calendarmanagerViewModel;
}(observable_1.Observable));
exports.calendarmanagerViewModel = calendarmanagerViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXJtYW5hZ2VyLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxlbmRhcm1hbmFnZXItdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUc3QztJQUE4Qyw0Q0FBVTtJQUVwRDtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVdHLGFBQU8sR0FBRztZQUNoQix5QkFBeUI7WUFDekIsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtRQUNyQixDQUFDLENBQUE7O0lBZkUsQ0FBQztJQUVKLHNCQUFJLDJDQUFLO2FBQVQ7WUFDTyxNQUFNLENBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBRUosc0JBQUksMENBQUk7YUFBUjtZQUNDLGFBQWE7WUFDYixNQUFNLENBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQVFNLGlEQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFDbkIsSUFBSSxVQUFVLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV6QywrQkFBK0I7SUFDbkMsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUE4Qyx1QkFBVSxHQTRCdkQ7QUE1QlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcm1hbmFnZXJWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdFxyXG4gICAgfVxyXG5cdFxyXG5cdGdldCB0aXRsZSgpOiBTdHJpbmcge1xyXG4gICAgICAgIHJldHVybiA8U3RyaW5nPnRoaXMuZ2V0KFwidGV4dEZpZWxkVmFsdWVcIik7XHJcbiAgICB9XHJcblx0XHJcblx0Z2V0IHllYXIoKTogTnVtYmVyIHtcclxuXHRcdC8vZG9lc250IHdvcmtcclxuXHRcdHJldHVybiA8TnVtYmVyPnRoaXMuZ2V0KFwiY3VycmVudFllYXJcIik7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBuYXZCYWNrID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly92YXIgdGl0bGUgPSB0aGlzLnRpdGxlO1xyXG5cdFx0Ly92YXIgeWVhciA9IHRoaXMueWVhcjtcclxuXHRcdC8vY29uc29sZS5sb2coeWVhcik7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRlUGlja2VyLnllYXIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==