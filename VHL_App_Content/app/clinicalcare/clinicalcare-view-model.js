const observableModule = require("data/observable");
var utilsModule = require("tns-core-modules/utils/utils");

function ClinicalCareModel() {
    const viewModel = observableModule.fromObject({
        sections: [
            { name: "CALIFORNIA", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "Contact: Vee Vo, Clinic Coordinator", tel: "Tel: 650.736.0262; Fax: 650.495.6813", email: "E-mail: veevo@stanfordhealthcare.org", web: "Click for Website", adult: "ADULT ONLY"},
            { name: "Possible VHL Manifestations", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "", tel: "", email: "", web: "Click for Website", adult: "" },
            { name: "Healthy Living for the VHL Family", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "", tel: "", email: "", web: "Click for Website", adult: "" },
            { name: "Discussing VHL with Your Family", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "", tel: "", email: "", web: "Click for Website", adult: "" },
            { name: "VHL Research", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "", tel: "", email: "", web: "Click for Website", adult: "" },
            { name: "Glossary of Medical Terms", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "", tel: "", email: "", web: "Click for Website", adult: "" },
            { name: "VHL Support Resources", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "", tel: "", email: "", web: "Click for Website", adult: "" },,
        ],

        onButtonTap: function () {
            utilsModule.openUrl("https://google.com")
        },
	
    });

    return viewModel;
}

module.exports = ClinicalCareModel;
