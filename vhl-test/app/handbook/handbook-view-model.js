"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frameModule = require("tns-core-modules/ui/frame");
var utilsModule = require("tns-core-modules/utils/utils");
var handbookViewModel = /** @class */ (function (_super) {
    __extends(handbookViewModel, _super);
    function handbookViewModel() {
        var _this = _super.call(this) || this;
        _this.donate = function () {
            utilsModule.openUrl("https://donatenow.networkforgood.org/1411829?code=orange");
        };
        var sections = [
            { name: "What is VHL?", imageSrc: "1" },
            { name: "Possible VHL Manifestations", imageSrc: "2" },
            { name: "Healthy Living for the VHL Family", imageSrc: "3" },
            { name: "Discussing VHL with Your Family", imageSrc: "4" },
            { name: "VHL Research", imageSrc: "5" },
            { name: "Glossary of Medical Terms", imageSrc: "6" },
            { name: "VHL Support Resources", imageSrc: "7" },
        ];
        _this.set("sections", sections);
        return _this;
    }
    handbookViewModel.prototype.tapAction = function (args) {
        //ADD NAVIGATION CODE HERE
        frameModule.topmost().navigate("hbsection" + (args.index + 1) + "/hbsection" + (args.index + 1) + "-page");
    };
    return handbookViewModel;
}(observable_1.Observable));
exports.handbookViewModel = handbookViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGJvb2stdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRib29rLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsdURBQTBEO0FBQzFELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRTFEO0lBQXVDLHFDQUFVO0lBQzdDO1FBQUEsWUFDSSxpQkFBTyxTQWNWO1FBT0csWUFBTSxHQUFHO1lBQ2YsV0FBVyxDQUFDLE9BQU8sQ0FBQywwREFBMEQsQ0FBQyxDQUFBO1FBRWhGLENBQUMsQ0FBQTtRQXRCQSxJQUFJLFFBQVEsR0FBRztZQUNMLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDdEQsRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUM1RCxFQUFFLElBQUksRUFBRSxpQ0FBaUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQzFELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDcEQsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtTQUNuRCxDQUFDO1FBRVIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7O0lBRTdCLENBQUM7SUFFTSxxQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ3ZCLDBCQUEwQjtRQUMxQixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBT0Ysd0JBQUM7QUFBRCxDQUFDLEFBNUJELENBQXVDLHVCQUFVLEdBNEJoRDtBQTVCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcclxudmFyIHV0aWxzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgaGFuZGJvb2tWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHZhciBzZWN0aW9ucyA9IFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcIldoYXQgaXMgVkhMP1wiLCBpbWFnZVNyYzogXCIxXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIlBvc3NpYmxlIFZITCBNYW5pZmVzdGF0aW9uc1wiLCBpbWFnZVNyYzogXCIyXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkhlYWx0aHkgTGl2aW5nIGZvciB0aGUgVkhMIEZhbWlseVwiLCBpbWFnZVNyYzogXCIzXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkRpc2N1c3NpbmcgVkhMIHdpdGggWW91ciBGYW1pbHlcIiwgaW1hZ2VTcmM6IFwiNFwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJWSEwgUmVzZWFyY2hcIiwgaW1hZ2VTcmM6IFwiNVwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJHbG9zc2FyeSBvZiBNZWRpY2FsIFRlcm1zXCIsIGltYWdlU3JjOiBcIjZcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiVkhMIFN1cHBvcnQgUmVzb3VyY2VzXCIsIGltYWdlU3JjOiBcIjdcIiB9LFxyXG4gICAgICAgIF07XHJcblx0XHRcclxuXHRcdHRoaXMuc2V0KFwic2VjdGlvbnNcIiwgc2VjdGlvbnMpO1xyXG5cdFx0XHJcbiAgICB9XHJcblx0XHJcbiAgICBwdWJsaWMgdGFwQWN0aW9uKGFyZ3MpIHtcclxuXHRcdC8vQUREIE5BVklHQVRJT04gQ09ERSBIRVJFXHJcblx0XHRmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoXCJoYnNlY3Rpb25cIiArIChhcmdzLmluZGV4ICsgMSkgKyBcIi9oYnNlY3Rpb25cIiArIChhcmdzLmluZGV4ICsgMSkgKyBcIi1wYWdlXCIpO1x0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBkb25hdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR1dGlsc01vZHVsZS5vcGVuVXJsKFwiaHR0cHM6Ly9kb25hdGVub3cubmV0d29ya2Zvcmdvb2Qub3JnLzE0MTE4Mjk/Y29kZT1vcmFuZ2VcIilcclxuXHJcblx0fVxyXG5cdFxyXG59XHJcbiJdfQ==