const observableModule = require("data/observable");
var utilsModule = require("tns-core-modules/utils/utils");

function ClinicalCareModel() {
	
	var websites = ["https://stanfordhealthcare.org/medical-conditions/cancer/von-hippel-lindau-syndrome.html", 
	"https://unclineberger.org/patientcare/programs/vonhippellindau", 
	"https://medicine.yale.edu/urology/programs/genitourinary/kidney/hereditary.aspx", 
	"https://my.clevelandclinic.org/health/articles/von-hippel-lindau-disease", 
	"http://www.uchospitals.edu/specialties/cancer/risk/about/vhl/index.html", 
	"https://www.pennmedicine.org/for-patients-and-visitors/find-a-program-or-service/translational-medicine-and-human-genetics/von-hippel-lindau-vhl-syndrome-center",
	"http://www.massgeneral.org/cancer/about/ccra_rcc.aspx",
	"",
	"http://www.mcancer.org/endocrine-cancer/familial-neuroendocrine-syndromes/comprehensive-clinical-care-center-von-hippel-lindau-disease",
	"https://www.mdanderson.org/cancer-types/von-hippel-lindau-disease.html",
	"http://columbiaspine.org/condition/von-hippel-lindau/",
	"https://neurosciences.uvahealth.com/services/neurocutaneous-disorders/neurocutaneous-conditions/von-hippel-lindau-disease",
	]
	
    const viewModel = observableModule.fromObject({
        sections: [
            { name: "CALIFORNIA", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "Contact: Vee Vo, Clinic Coordinator", tel: "Tel: 650.736.0262; Fax: 650.495.6813", email: "E-mail: veevo@stanfordhealthcare.org", web: "Click for Website", adult: "ADULT ONLY"},
            { name: "NORTH CAROLINA", desc: "University of North Carolina, Lineberger Cancer Center, Chapel Hill, NC" , contact: "Contact: Mary Dunn, NP", email: "E-mail: mwdunn@med.unc.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "CONNECTICUT", desc: "Yale University Hospital" , contact: "Contact: Susan Chmael, NP or Donna Lapolt, PCN", tel: "Tel: 203.200.4DNA (4362)", email: "E-mail: Susan.Chmael@YNHH.ORG or Donna.Lapolt@YNHH.ORG", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "OHIO", desc: "Cleveland Clinic" , contact: "Contact: Jessica Marquard, MS, LGC, Genetic Counselor", tel: "Tel: 216.445.6798; Fax: 216.445.6935", email: "E-mail: marquaj2@ccf.org", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "ILLINOIS", desc: "University of Chicago" , contact: "Contact: Sarah Nielsen, MS, CGC, Genetic Counselor", tel: "Tel: 773.702.4749; Fax: 773.834.3834", email: "E-mail: snielsen@medicine.bsd.uchicago.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "PENNSYLVANIA", desc: "Hospital of the University of Pennsylvania, Philadelphia" , contact: "Contact: Kara Welsh", tel: "Tel: 215.662.4740; Fax: 215.614.0298", email: "E-mail: kara.welsh@uphs.upenn.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "VHL Support Resources", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "", tel: "", email: "", web: "Click for Website", adult: "" },
        
		],

        onButtonTap: function (args) {
			if(args.index != 7){
				    utilsModule.openUrl(websites[args.index])
			}
        },
		
		onOpenSurvey: function () {
			utilsModule.openUrl("https://docs.google.com/forms/d/1x35igCRZFCvcaeYmY_d5M2xYW1KMUCmLvjJuSQ4ZTbc/viewform?edit_requested=true")
		},
	
    });

    return viewModel;
}

module.exports = ClinicalCareModel;
