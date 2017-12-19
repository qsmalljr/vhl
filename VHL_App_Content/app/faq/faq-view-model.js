const observableModule = require("data/observable");

function FAQModel() {
    const viewModel = observableModule.fromObject({

        thisitems: [
            {
                title: "1", footer: "10", headerText: "First", footerText: "4",
                items: [
                    { image: "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_l5pcusxy/def_height/1024/def_width/1956/version/100011/type/2/q/100", text: "Stop" },
                    { text: "Drop", image: "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_l5pcusxy/def_height/1024/def_width/1956/version/100011/type/2/q/100" }
                ]
            }
        ]

    });

    return viewModel;
}

module.exports = FAQModel;
