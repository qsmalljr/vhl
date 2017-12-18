const observableModule = require("data/observable");
import * as fs from "tns-core-modules/file-system";
var documents = fs.knownFolders.documents();
var path = fs.path.join(documents.path, "CompleteHandbook.pdf");
var file = fs.File.fromPath(path);

function FAQModel() {
    const viewModel = observableModule.fromObject({

    });

    return viewModel;
}

module.exports = FAQModel;
