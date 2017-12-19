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
	];
	
	var websites1 = [
	"https://www.uabmedicine.org/patient-care/conditions/von-hippel-lindau",
	"http://www.hopkinsmedicine.org/nephrology/patient_care/vhl-care.html",
	"http://www.mayoclinic.org/departments-centers/clinical-genomics/overview/specialty-groups/von-hippel-lindau-clinic",
	"https://www.lahey.org/Departments_and_Locations/Departments/Breast_Center/Ebsco_Content/Chemotherapy.aspx?chunkiid=22504",
	"",
	
	];
	
    const viewModel = observableModule.fromObject({
        sections: [
            { name: "CALIFORNIA", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "Contact: Vee Vo, Clinic Coordinator", tel: "Tel: 650.736.0262; Fax: 650.495.6813", email: "E-mail: veevo@stanfordhealthcare.org", web: "Click for Website", adult: "ADULT ONLY"},
            { name: "NORTH CAROLINA", desc: "University of North Carolina, Lineberger Cancer Center, Chapel Hill, NC" , contact: "Contact: Mary Dunn, NP", email: "E-mail: mwdunn@med.unc.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "CONNECTICUT", desc: "Yale University Hospital" , contact: "Contact: Susan Chmael, NP or Donna Lapolt, PCN", tel: "Tel: 203.200.4DNA (4362)", email: "E-mail: Susan.Chmael@YNHH.ORG or Donna.Lapolt@YNHH.ORG", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "OHIO", desc: "Cleveland Clinic" , contact: "Contact: Jessica Marquard, MS, LGC, Genetic Counselor", tel: "Tel: 216.445.6798; Fax: 216.445.6935", email: "E-mail: marquaj2@ccf.org", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "ILLINOIS", desc: "University of Chicago" , contact: "Contact: Sarah Nielsen, MS, CGC, Genetic Counselor", tel: "Tel: 773.702.4749; Fax: 773.834.3834", email: "E-mail: snielsen@medicine.bsd.uchicago.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "PENNSYLVANIA", desc: "Hospital of the University of Pennsylvania, Philadelphia" , contact: "Contact: Kara Welsh", tel: "Tel: 215.662.4740; Fax: 215.614.0298", email: "E-mail: kara.welsh@uphs.upenn.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "MASSACHUSETTS", desc: "Massachusetts General Hospital, Boston" , contact: "Contact: Othon Iliopoulos, MD", tel: "Tel: 617.724.3404; Fax: 617.726.9418", email: "E-mail: iliopoul@helix.mgh.harvard.edu", web: "Click for Website", adult: "" },
            { name: "TENNESSEE", desc: "Vanderbilt Hereditary Cancer Clinic, Nashville" , contact: "Contact: Kate McReynolds, APRN, MSc, MSN, ANP-BC, AGN-BC", tel: "Tel: 615.343.7400; Fax: 615.343.3343", email: "Email: kate.mcreynolds@vanderbilt.edu;", web: "", adult: "" },
			{ name: "MICHIGAN", desc: "University of Michigan Medical Center, Ann Arbor" , contact: "Contact: Jenae Osborne, MS, CGC, Genetic Counselor", tel: "Tel: 734.647.0822", email: "E-mail: jenaej@umich.edu", web: "Click for Website", adult: "" },
			{ name: "TEXAS", desc: "M.D. Anderson Cancer Center, Houston" , contact: "Contact: Ashley Woodson, MS, CGC, Genetic Counselor", tel: "Tel: 713.792.7172", email: "Email: amhenriksen@mdanderson.org", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
			{ name: "NEW YORK", desc: "Columbia University Medical Center, New York Presbyterian Hospital, New York City" , contact: "Contact: Donna Russo, MS, CGC, Genetic Counselor", tel: "Tel: 212.305.0190; Fax: 212.305.0322", email: "E-mail: russodo@nyp.org", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
			{ name: "VIRGINIA", desc: "University of Virginia, Charlottesville" , contact: "Contact: Nancy Staton, RN, and Vicki Aylor", tel: "Tel: 434.243.2757; Fax: 434.243.5634", email: "Email: vhlsurgery@virginia.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
		],

        onButtonTap: function (args) {
			if(args.index != 7){
				    utilsModule.openUrl(websites[args.index])
			}
        },
		
		onOpenSurvey: function () {
			utilsModule.openUrl("https://docs.google.com/forms/d/1x35igCRZFCvcaeYmY_d5M2xYW1KMUCmLvjJuSQ4ZTbc/viewform?edit_requested=true")
		},
	
	        sections1: [
            { name: "ALABAMA", desc: "University of Alabama at Birmingham" , contact: "Contact: Ashley Cannon, MS, CGC, Dept. of Genetics", tel: "Tel: 205.996.2916", email: "E-mail: ashleycannon@uabmc.edu", web: "Click for Website", adult: ""},
            { name: "MARYLAND", desc: "Johns Hopkins Hospital, Baltimore" , contact: "Contact: Kelly Jackson, Senior Medical Concierge", tel:"Tel: 410.464.6555 x309", email: "Email: kjacks72@jhmi.edu", web: "Click for Website", adult: "" },
            { name: "ARIZONA", desc: "Mayo Clinic, Scottsdale" , contact: "Contact: Katherine S. Hunt, MS, CGC", tel: "Tel. 480.342.4800; Fax: 480.301.6356", email: "E-mail: hunt.katherine@mayo.edu", web: "Click for Website", adult: "" },
            { name: "MASSACHUSETTS", desc: "Lahey Clinic Medical Center, Burlington" , contact: "Contact: Bonney Myles. Tel: 781.744.2511; Fax: 781.564.5429", tel: "", email: "E-mail: bonney.myles@lahey.org", web: "Click for Website", adult: "" },
            { name: "CALIFORNIA", desc: "University of California, Los Angeles (UCLA)" , contact: "Contact: Donicia Collins", tel: "Tel: 310.206.5930", email: "E-mail: dcollins@mednet.ucla.edu", web: "", adult: "" },
            { name: "MINNESOTA", desc: "Mayo Clinic, Rochester" , contact: "Contact: Dr. Pavel Pichurin, Medical Genetics", tel: "Tel: 507.284.3215; Fax: 507.284.1067", email: "", web: "Click for Website", adult: "", desc2:"University of Minnesota, Minneapolis", contact2:"Contact: Denise C. Musser, APRN-CNS", tel2:"Tel: 612.626.9898; Fax: 612.625.4406", email2:"E-mail: dmusser10@umphysicians.umn.edu", adult:"" },
            { name: "MASSACHUSETTS", desc: "Massachusetts General Hospital, Boston" , contact: "Contact: Othon Iliopoulos, MD", tel: "Tel: 617.724.3404; Fax: 617.726.9418", email: "E-mail: iliopoul@helix.mgh.harvard.edu", web: "Click for Website", adult: "" },
            { name: "TENNESSEE", desc: "Vanderbilt Hereditary Cancer Clinic, Nashville" , contact: "Contact: Kate McReynolds, APRN, MSc, MSN, ANP-BC, AGN-BC", tel: "Tel: 615.343.7400; Fax: 615.343.3343", email: "Email: kate.mcreynolds@vanderbilt.edu;", web: "", adult: "" },
			{ name: "MICHIGAN", desc: "University of Michigan Medical Center, Ann Arbor" , contact: "Contact: Jenae Osborne, MS, CGC, Genetic Counselor", tel: "Tel: 734.647.0822", email: "E-mail: jenaej@umich.edu", web: "Click for Website", adult: "" },
			{ name: "TEXAS", desc: "M.D. Anderson Cancer Center, Houston" , contact: "Contact: Ashley Woodson, MS, CGC, Genetic Counselor", tel: "Tel: 713.792.7172", email: "Email: amhenriksen@mdanderson.org", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
			{ name: "NEW YORK", desc: "Columbia University Medical Center, New York Presbyterian Hospital, New York City" , contact: "Contact: Donna Russo, MS, CGC, Genetic Counselor", tel: "Tel: 212.305.0190; Fax: 212.305.0322", email: "E-mail: russodo@nyp.org", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
			{ name: "VIRGINIA", desc: "University of Virginia, Charlottesville" , contact: "Contact: Nancy Staton, RN, and Vicki Aylor", tel: "Tel: 434.243.2757; Fax: 434.243.5634", email: "Email: vhlsurgery@virginia.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
		],

        onButtonTap1: function (args) {
			if(args.index != 5){
				    utilsModule.openUrl(websites1[args.index])
			}
        },
		
		selectItemTemplate: function (args) {
			console.log(args.i);
			
			if(args.index == 5){
				return "two";
			}
			else{
				return "one";
			}
		},
	
    });

    return viewModel;
}

module.exports = ClinicalCareModel;
