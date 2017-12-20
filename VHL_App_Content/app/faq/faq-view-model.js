const observableModule = require("data/observable");

function FAQModel() {
    const viewModel = observableModule.fromObject({
 
        questions: [
            { name: "What is VHL?", desc: "Von Hippel-Lindau (VHL) is a genetic condition involving the abnormal growth of blood vessels in up to 10 parts of the body.It is caused by a flaw in one gene-- the vhl gene.With no known pharmacological treatment, active surveillance and surgery (as needed) are the only options for VHL patients as they battle a series of tumors throughout their life." },
            { name: "How common is VHL?", desc: "VHL affects 1 in 36,000 people (~10,000 people in the U.S. and 200,000, worldwide) in every ethnic group.The prevalence of VHL is approximately the same prevalence as muscular dystrophy and one-half that of cystic fibrosis." },
            { name: "What is the active surveillance protocol for VHL patients?", desc: "Even young children with VHL need to be monitored for lesions. Most VHL tumors in the eye or ear are best treated as soon as they are found. Other tumors, such as on the kidney or CNS, should be monitored regularly; researchers have defined specific criteria for removal." },
            { name: "What is the VHL Alliance?", desc: "The VHL Alliance (VHLA) is a 501c3 non-profit organization founded in 1993. Today, VHLA is the world's leading organization supporting von Hippel- Landau Syndrome. VHLA funds research, increases awareness, and provides education and support to improve the lives of thousands of people living with VHL." },
            { name: "How can I find the leading VHL specialists?", desc: "The VHLA established the Clinical Care Center (CCC) program to enable people living with VHL to obtain the best possible care from a medical team knowledgeable about this rare disease. VHLA - endorsed CCCs provide effective coordination of care, promote timely surveillance and serve as a source of information and support.Note: an endorsement of a VHL team at a particular hospital does NOT endorse every provider at the hospital. " },

        ],

    });

    return viewModel;
}

module.exports = FAQModel;
