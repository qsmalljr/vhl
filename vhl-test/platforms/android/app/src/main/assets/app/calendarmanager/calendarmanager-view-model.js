"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var calendarmanagerViewModel = /** @class */ (function (_super) {
    __extends(calendarmanagerViewModel, _super);
    function calendarmanagerViewModel() {
        var _this = _super.call(this) || this;
        _this.navBack = function () {
            var title = this.title;
            var year = this.year;
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
            return this.get("currentYear");
        },
        enumerable: true,
        configurable: true
    });
    return calendarmanagerViewModel;
}(observable_1.Observable));
exports.calendarmanagerViewModel = calendarmanagerViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXJtYW5hZ2VyLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxlbmRhcm1hbmFnZXItdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QztJQUE4Qyw0Q0FBVTtJQUVwRDtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVVHLGFBQU8sR0FBRztZQUNoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsQ0FBQyxDQUFBOztJQWJFLENBQUM7SUFFSixzQkFBSSwyQ0FBSzthQUFUO1lBQ08sTUFBTSxDQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVKLHNCQUFJLDBDQUFJO2FBQVI7WUFDQyxNQUFNLENBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQU1GLCtCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUE4Qyx1QkFBVSxHQW9CdkQ7QUFwQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgY2FsZW5kYXJtYW5hZ2VyVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0XHJcbiAgICB9XHJcblx0XHJcblx0Z2V0IHRpdGxlKCk6IFN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIDxTdHJpbmc+dGhpcy5nZXQoXCJ0ZXh0RmllbGRWYWx1ZVwiKTtcclxuICAgIH1cclxuXHRcclxuXHRnZXQgeWVhcigpOiBTdHJpbmcge1xyXG5cdFx0cmV0dXJuIDxTdHJpbmc+dGhpcy5nZXQoXCJjdXJyZW50WWVhclwiKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG5hdkJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgdGl0bGUgPSB0aGlzLnRpdGxlO1xyXG5cdFx0dmFyIHllYXIgPSB0aGlzLnllYXI7XHJcblx0fVxyXG59XHJcbiJdfQ==