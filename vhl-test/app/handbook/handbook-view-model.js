"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frameModule = require("tns-core-modules/ui/frame");
var handbookViewModel = /** @class */ (function (_super) {
    __extends(handbookViewModel, _super);
    function handbookViewModel() {
        var _this = _super.call(this) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGJvb2stdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRib29rLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsdURBQTBEO0FBRTFEO0lBQXVDLHFDQUFVO0lBQzdDO1FBQUEsWUFDSSxpQkFBTyxTQWNWO1FBWkgsSUFBSSxRQUFRLEdBQUc7WUFDTCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN2QyxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3RELEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDNUQsRUFBRSxJQUFJLEVBQUUsaUNBQWlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUMxRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN2QyxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7U0FDbkQsQ0FBQztRQUVSLEtBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztJQUU3QixDQUFDO0lBRU0scUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUN2QiwwQkFBMEI7UUFDMUIsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVGLHdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUF1Qyx1QkFBVSxHQXVCaEQ7QUF2QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgaGFuZGJvb2tWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHZhciBzZWN0aW9ucyA9IFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcIldoYXQgaXMgVkhMP1wiLCBpbWFnZVNyYzogXCIxXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIlBvc3NpYmxlIFZITCBNYW5pZmVzdGF0aW9uc1wiLCBpbWFnZVNyYzogXCIyXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkhlYWx0aHkgTGl2aW5nIGZvciB0aGUgVkhMIEZhbWlseVwiLCBpbWFnZVNyYzogXCIzXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkRpc2N1c3NpbmcgVkhMIHdpdGggWW91ciBGYW1pbHlcIiwgaW1hZ2VTcmM6IFwiNFwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJWSEwgUmVzZWFyY2hcIiwgaW1hZ2VTcmM6IFwiNVwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJHbG9zc2FyeSBvZiBNZWRpY2FsIFRlcm1zXCIsIGltYWdlU3JjOiBcIjZcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiVkhMIFN1cHBvcnQgUmVzb3VyY2VzXCIsIGltYWdlU3JjOiBcIjdcIiB9LFxyXG4gICAgICAgIF07XHJcblx0XHRcclxuXHRcdHRoaXMuc2V0KFwic2VjdGlvbnNcIiwgc2VjdGlvbnMpO1xyXG5cdFx0XHJcbiAgICB9XHJcblx0XHJcbiAgICBwdWJsaWMgdGFwQWN0aW9uKGFyZ3MpIHtcclxuXHRcdC8vQUREIE5BVklHQVRJT04gQ09ERSBIRVJFXHJcblx0XHRmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoXCJoYnNlY3Rpb25cIiArIChhcmdzLmluZGV4ICsgMSkgKyBcIi9oYnNlY3Rpb25cIiArIChhcmdzLmluZGV4ICsgMSkgKyBcIi1wYWdlXCIpO1x0XHJcblx0fVxyXG5cdFxyXG59XHJcbiJdfQ==