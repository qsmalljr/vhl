const observableModule = require("data/observable");

function FAQModel() {
    const viewModel = observableModule.fromObject({
 
        questions: [
            { name: "What is VHL?", desc: "hey man vhl is actually cancer" },
            { name: "Possible VHL Manifestations", desc: "my dad is quentin" },
            { name: "Healthy Living for the VHL Family", desc: "3" },
            { name: "Discussing VHL with Your Family", desc: "4" },
            { name: "VHL Research", imageSrc: "5" },
            { name: "Glossary of Medical Terms", desc: "6" },
            { name: "VHL Support Resources", desc: "7" },
        ],

    });

    return viewModel;
}

module.exports = FAQModel;
