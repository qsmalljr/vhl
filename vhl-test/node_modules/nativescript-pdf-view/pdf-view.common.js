"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var PDFViewCommon = (function (_super) {
    __extends(PDFViewCommon, _super);
    function PDFViewCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFViewCommon.notifyOfEvent = function (eventName, pdfViewRef) {
        var viewer = pdfViewRef.get();
        if (viewer) {
            viewer.notify({ eventName: eventName, object: viewer });
        }
    };
    return PDFViewCommon;
}(view_1.View));
PDFViewCommon.loadEvent = 'load';
exports.PDFViewCommon = PDFViewCommon;
exports.srcProperty = new view_1.Property({
    name: 'src',
});
exports.srcProperty.register(PDFViewCommon);
//# sourceMappingURL=pdf-view.common.js.map