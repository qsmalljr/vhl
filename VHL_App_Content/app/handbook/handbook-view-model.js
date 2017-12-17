const observableModule = require("data/observable");
var utilsModule = require("tns-core-modules/utils/utils");

function HandbookViewModel() {
    const viewModel = observableModule.fromObject({
        sections: [
            { name: "What is VHL?", imageSrc: "1" },
            { name: "Possible VHL Manifestations", imageSrc: "2" },
            { name: "Healthy Living for the VHL Family", imageSrc: "3" },
            { name: "Discussing VHL with Your Family", imageSrc: "4" },
            { name: "VHL Research", imageSrc: "5" },
            { name: "Glossary of Medical Terms", imageSrc: "6" },
            { name: "VHL Support Resources", imageSrc: "7" },,
        ],

        onButtonTap: function () {
            utilsModule.openUrl("https://google.com")
        },

    });

    return viewModel;
}

module.exports = HandbookViewModel;
