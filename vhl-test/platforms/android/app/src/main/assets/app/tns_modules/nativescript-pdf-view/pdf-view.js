"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pdfviewer = com.github.barteksc.pdfviewer;
var fs = require("tns-core-modules/file-system");
var http = require("tns-core-modules/http");
var pdf_view_common_1 = require("./pdf-view.common");
var PDFView = (function (_super) {
    __extends(PDFView, _super);
    function PDFView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tempFolder = fs.knownFolders.temp().getFolder('PDFViewer.temp/');
        _this.onLoadHandler = (function () {
            var pdfViewRef = new WeakRef(_this);
            return new pdfviewer.listener.OnLoadCompleteListener({
                loadComplete: function (numPages) {
                    pdf_view_common_1.PDFViewCommon.notifyOfEvent(pdf_view_common_1.PDFViewCommon.loadEvent, pdfViewRef);
                },
            });
        })();
        return _this;
    }
    Object.defineProperty(PDFView.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        set: function (value) {
            this.nativeView = value;
        },
        enumerable: true,
        configurable: true
    });
    PDFView.prototype.createNativeView = function () {
        return new pdfviewer.PDFView(this._context, void 0);
    };
    PDFView.prototype[pdf_view_common_1.srcProperty.setNative] = function (value) {
        this.loadPDF(value);
    };
    PDFView.prototype.loadPDF = function (src) {
        if (!src || !this.android) {
            return;
        }
        this.promise = void 0;
        if (src.indexOf('://') === -1) {
            src = 'file://' + src;
        }
        else if (src.indexOf('file://') !== 0) {
            this.cacheThenLoad(src);
            return;
        }
        var uri = android.net.Uri.parse(src);
        this.android
            .fromUri(uri)
            .onLoad(this.onLoadHandler)
            .load();
    };
    PDFView.prototype.cacheThenLoad = function (url) {
        var _this = this;
        this.tempFolder.clear().then(function () {
            var promise = _this.promise = http
                .getFile(url, _this.tempFolder.path + "/" + Date.now() + ".pdf")
                .then(function (file) {
                if (_this.promise === promise) {
                    _this.loadPDF(file.path);
                }
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    return PDFView;
}(pdf_view_common_1.PDFViewCommon));
exports.PDFView = PDFView;
//# sourceMappingURL=pdf-view.js.map