const observableModule = require("data/observable");

function FAQModel() {
    const viewModel = observableModule.fromObject({

        items: [
            {
                title: "1", footer: "10", headerText: "First", footerText: "4",
                items: [
                    { image: "~/images/a9ff17db85f8136619feb0d5a200c0e4.png", text: "Stop" },
                    { text: "Drop", image: "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_l5pcusxy/def_height/1024/def_width/1956/version/100011/type/2/q/100" }
                ]
            }
        ]

    });

    return viewModel;
}

module.exports = FAQModel;
