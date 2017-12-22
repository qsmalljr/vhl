"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var utilsModule = require("tns-core-modules/utils/utils");
var ercardViewModel = /** @class */ (function (_super) {
    __extends(ercardViewModel, _super);
    function ercardViewModel() {
        var _this = _super.call(this) || this;
        _this.donate = function () {
            utilsModule.openUrl("https://donatenow.networkforgood.org/1411829?code=orange");
        };
        return _this;
    }
    return ercardViewModel;
}(observable_1.Observable));
exports.ercardViewModel = ercardViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJjYXJkLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcmNhcmQtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUUxRDtJQUFxQyxtQ0FBVTtJQUMzQztRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQUVHLFlBQU0sR0FBRztZQUNmLFdBQVcsQ0FBQyxPQUFPLENBQUMsMERBQTBELENBQUMsQ0FBQTtRQUVoRixDQUFDLENBQUE7O0lBTEUsQ0FBQztJQU1MLHNCQUFDO0FBQUQsQ0FBQyxBQVRELENBQXFDLHVCQUFVLEdBUzlDO0FBVFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG52YXIgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBlcmNhcmRWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblx0XHJcblx0cHVibGljIGRvbmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL2RvbmF0ZW5vdy5uZXR3b3JrZm9yZ29vZC5vcmcvMTQxMTgyOT9jb2RlPW9yYW5nZVwiKVxyXG5cclxuXHR9XHJcbn1cclxuIl19