const observableModule = require("data/observable");

function FAQModel() {
    const viewModel = observableModule.fromObject({

        items: [
            {
                title: "1", footer: "10", headerText: "First", footerText: "4",
                items: [
                    { image: "~/images/a9ff17db85f8136619feb0d5a200c0e4.png", text: "Stop" },
                    { text: "Drop", image: "http://static.srcdn.com/wp-content/uploads/Superman-fighting-Goku.jpg" }
                ]
            }
        ]

    });

    return viewModel;
}

module.exports = FAQModel;
