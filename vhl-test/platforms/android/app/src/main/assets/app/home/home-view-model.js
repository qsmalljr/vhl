"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var utilsModule = require("tns-core-modules/utils/utils");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.donate = function () {
            utilsModule.openUrl("https://donatenow.networkforgood.org/1411829?code=orange");
        };
        return _this;
    }
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRTFEO0lBQW1DLGlDQUFVO0lBQ3pDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBRUcsWUFBTSxHQUFHO1lBQ2YsV0FBVyxDQUFDLE9BQU8sQ0FBQywwREFBMEQsQ0FBQyxDQUFBO1FBRWhGLENBQUMsQ0FBQTs7SUFMRSxDQUFDO0lBT0wsb0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBbUMsdUJBQVUsR0FVNUM7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG52YXIgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcblxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cdFxuXHRwdWJsaWMgZG9uYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL2RvbmF0ZW5vdy5uZXR3b3JrZm9yZ29vZC5vcmcvMTQxMTgyOT9jb2RlPW9yYW5nZVwiKVxuXG5cdH1cblx0XG59XG4iXX0=