import { Observable } from "data/observable";
const observableModule = require("data/observable");
var utilsModule = require("tns-core-modules/utils/utils");

export class clinicalcareViewModel extends Observable {
    constructor() {
        super();
		var sections = [
            { name: "CALIFORNIA", desc: "Stanford Hospital and Clinics/Stanford University School of Medicine" , contact: "Contact: Vee Vo, Clinic Coordinator", tel: "Tel: 650.736.0262; Fax: 650.495.6813", email: "E-mail: veevo@stanfordhealthcare.org", web: "Click for Website", adult: "ADULT ONLY"},
            { name: "CONNECTICUT", desc: "Yale University Hospital" , contact: "Contact: Susan Chmael, NP or Donna Lapolt, PCN", tel: "Tel: 203.200.4DNA (4362)", email: "E-mail: Susan.Chmael@YNHH.ORG or Donna.Lapolt@YNHH.ORG", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "ILLINOIS", desc: "University of Chicago" , contact: "Contact: Sarah Nielsen, MS, CGC, Genetic Counselor", tel: "Tel: 773.702.4749; Fax: 773.834.3834", email: "E-mail: snielsen@medicine.bsd.uchicago.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "MASSACHUSETTS", desc: "Massachusetts General Hospital, Boston" , contact: "Contact: Othon Iliopoulos, MD", tel: "Tel: 617.724.3404; Fax: 617.726.9418", email: "E-mail: iliopoul@helix.mgh.harvard.edu", web: "Click for Website", adult: "" },
			{ name: "MICHIGAN", desc: "University of Michigan Medical Center, Ann Arbor" , contact: "Contact: Jenae Osborne, MS, CGC, Genetic Counselor", tel: "Tel: 734.647.0822", email: "E-mail: jenaej@umich.edu", web: "Click for Website", adult: "" },
			{ name: "NEW YORK", desc: "Columbia University Medical Center, New York Presbyterian Hospital, New York City" , contact: "Contact: Donna Russo, MS, CGC, Genetic Counselor", tel: "Tel: 212.305.0190; Fax: 212.305.0322", email: "E-mail: russodo@nyp.org", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
			{ name: "NORTH CAROLINA", desc: "University of North Carolina, Lineberger Cancer Center, Chapel Hill, NC" , contact: "Contact: Mary Dunn, NP", email: "E-mail: mwdunn@med.unc.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "OHIO", desc: "Cleveland Clinic" , contact: "Contact: Jessica Marquard, MS, LGC, Genetic Counselor", tel: "Tel: 216.445.6798; Fax: 216.445.6935", email: "E-mail: marquaj2@ccf.org", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "PENNSYLVANIA", desc: "Hospital of the University of Pennsylvania, Philadelphia" , contact: "Contact: Kara Welsh", tel: "Tel: 215.662.4740; Fax: 215.614.0298", email: "E-mail: kara.welsh@uphs.upenn.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
            { name: "TENNESSEE", desc: "Vanderbilt Hereditary Cancer Clinic, Nashville" , contact: "Contact: Kate McReynolds, APRN, MSc, MSN, ANP-BC, AGN-BC", tel: "Tel: 615.343.7400; Fax: 615.343.3343", email: "Email: kate.mcreynolds@vanderbilt.edu;", web: "", adult: "" },
			{ name: "VIRGINIA", desc: "University of Virginia, Charlottesville" , contact: "Contact: Nancy Staton, RN, and Vicki Aylor", tel: "Tel: 434.243.2757; Fax: 434.243.5634", email: "Email: vhlsurgery@virginia.edu", web: "Click for Website", adult: "ADULT AND PEDIATRIC" },
		];
		
		this.set("sections", sections);

	    var sections1 = [
            { name: "ALABAMA", desc: "University of Alabama at Birmingham" , contact: "Contact: Ashley Cannon, MS, CGC, Dept. of Genetics", tel: "Tel: 205.996.2916", email: "E-mail: ashleycannon@uabmc.edu", web: "Click for Website", adult: ""},
            { name: "ARIZONA", desc: "Mayo Clinic, Scottsdale" , contact: "Contact: Katherine S. Hunt, MS, CGC", tel: "Tel. 480.342.4800; Fax: 480.301.6356", email: "E-mail: hunt.katherine@mayo.edu", web: "Click for Website", adult: "" },
            { name: "CALIFORNIA", desc: "University of California, Los Angeles (UCLA)" , contact: "Contact: Donicia Collins", tel: "Tel: 310.206.5930", email: "E-mail: dcollins@mednet.ucla.edu", web: "", adult: "" },
            { name: "COLORADO", desc: "University of Colorado, Denver" , contact: "Contact: Heather Thompson, MSN", tel: "Tel: 720.848.8570", email: "E-mail: Heather.Thompson@uchealth.org", web: "", adult: "" },
			{ name: "FLORIDA", desc: "University of Miami" , contact: "Contact: Talia Donenberg, MS, CGC", tel: "Tel: 305.243.3627; Fax: 305.243.3919", email: "E-mail: tdonenberg@med.miami.edu", web: "", adult: "", desc2:"Moffitt Cancer Center, Tampa", contact2:"Contact: Jenni Ocampo, RN, BSN. Primary Nurse for Dr. Spiess – GU Clinic", tel2:"Tel: 813.745.8119; Fax: 813.449.6726", email2:"E-mail: Jennilene.Ocampo@moffitt.org"},
			{ name: "INDIANA", desc: "Indiana University, Simon Cancer Center, Indianapolis" , contact: "Contact: Amy Tennant, RN, BSN, Kidney Cancer Services Clinic", tel: "Tel: 317.962.0867", email: "Email: atennant1@IUHealth.org", web: "", adult: "" },
			{ name: "IOWA", desc: "University of Iowa Hospitals & Clinics, Iowa City" , contact: "Contact: Joni Bosch, ARNP", tel: "Tel: 319.356.4686; Fax: 319.356.3347", email: "E-mail: joni-bosch@uiowa.edu", web: "", adult: "", desc2:"Or", contact2:"Contact: Jenny Johnson, DNP, RN", tel2:"Tel: 319.467.8147; Fax: 319.356.3347", email2:"E-mail: jennifer-k-johnson@uiowa.edu" },
			{ name: "KANSAS", desc: "University of Kansas Medical Center, Kansas City" , contact: "Contact: Debra L. Collins, MS, CGC", tel: "Tel: 913.588.3671; Fax: 913.588.4060", email: "E-mail: dcollins@kumc.edu", web: "", adult: "", desc2:"Or", contact2:"Contact: Anastasia Harding, APRN, FNP–BC (for neuro)", tel2:"Tel: 913.574.1049", email2:"E-mail: Aharding2@kumc.edu" },
			{ name: "MARYLAND", desc: "Johns Hopkins Hospital, Baltimore" , contact: "Contact: Kelly Jackson, Senior Medical Concierge", tel:"Tel: 410.464.6555 x309", email: "Email: kjacks72@jhmi.edu", web: "Click for Website", adult: "" },
            { name: "MASSACHUSETTS", desc: "Lahey Clinic Medical Center, Burlington" , contact: "Contact: Bonney Myles. Tel: 781.744.2511; Fax: 781.564.5429", tel: "", email: "E-mail: bonney.myles@lahey.org", web: "Click for Website", adult: "" },
            { name: "MINNESOTA", desc: "Mayo Clinic, Rochester" , contact: "Contact: Dr. Pavel Pichurin, Medical Genetics", tel: "Tel: 507.284.3215; Fax: 507.284.1067", email: "", web: "Click for Website", adult: "", desc2:"University of Minnesota, Minneapolis", contact2:"Contact: Denise C. Musser, APRN-CNS", tel2:"Tel: 612.626.9898; Fax: 612.625.4406", email2:"E-mail: dmusser10@umphysicians.umn.edu"},
            { name: "MISSOURI", desc: "The Alvin J. Siteman Cancer Center (SCC) at Barnes-Jewish Hospital and Washington University School of Medicine, St. Louis" , contact: "Contact: Kim Mullen", tel: "Tel: 314.454.8775; Fax: 314.454.5244", email: "E-mail: mullenk@wudosis.wustl.edu", web: "", adult: "" },
			{ name: "NEW YORK", desc: "Memorial Sloan Kettering Cancer Center, New York City" , contact: "Contact: Connie Estes RN, BSN, CAPA", tel: "Tel: 646.422.4432; Fax: 212.452.3323", email: "Email: estesc@mskcc.org", web: "Click for Website", adult: "", desc2:"Montefiore Einstein Center for Cancer Care, Bronx", contact2:"Contact: Monique White, NP-C", tel2:"Tel: 718.862.8840 ext 236; Fax: 718.862.8852", email2:"E-mail: mnwhite@montefiore.org", desc3:"SUNY Upstate Medical University, Syracuse", contact3:"Contact: Jennifer Lee", tel3:"Tel: 315-464-6031; Fax: 315-464-6117", email3:"E-mail: LeejeN@upstate.edu"  },
			{ name: "OHIO", desc: "Ohio State University Wexner Medical Center" , contact: "Contact: Martha Lewis-Hanna, NP", tel: "Tel: 614.293-4448", email: "E-mail: Martha.Lewis-Hanna@osumc.edu", web: "", adult: "" },
			{ name: "PENNSYLVANIA", desc: "University of Pittsburgh, Pittsburgh" , contact: "Contact: Darcy Thull, MS, CGC", tel: "Tel: 800.454.8156 or 412-641.1466; Fax: 412-641.1132", email: "E-mail: dthull@mail.magee.edu", web: "", adult: "" },
			{ name: "UTAH", desc: "Huntsman Cancer Institute, Salt Lake City" , contact: "Contact: Samantha Greenberg, MS, MPH, CGC", tel: "Tel: 801.213.5774; Fax: 801.585.5763", email: "Email: VHLClinic@hci.utah.edu", web: "Click for Website", adult: "" },
		];
		
		this.set("sections1", sections1);
		
		var sections2 = [
			{ name:"ARGENTINA", desc:"Hospital Italiano de Buenos Aires, Buenos Aires", contact:"Contact, Adults: Valeria de Miguel, MD, Endocrinology, Metabolism and Nuclear Medicine Unit.", tel:"Tel: +541149590200, ext: 4849/8442; Fax: +541149590323", email:"E-mail: valeria.demiguel@hospitalitaliano.org.ar", contact2:"Contact, Pediatrics: Gabriela Sansó, PhD.", tel2:"Tel: +5441149635931, ext: 129; Fax: +541149635930", email2:"E-mail: gsanso@cedie.org.ar", desc2:"Hospital Privado Centro Médico de Córdoba. Monica Blascetta, Servicio de Nefrología.", email3:"E-mail: monicablascetta@gmail.com"},
			{ name:"AUSTRALIA", desc:"Prince of Wales Hospital, Sydney. Hereditary Cancer Clinic.", contact:"", tel:"", email:"E-mail: POWHCC@sesiahs.health.nsw.gov.au", web:"", adult:""},
			{ name:"BELGIUM", desc:"University of Brussels, Brussels. Neurosurgery", contact:"Contact: Professor Dr. Sven Gläsker", tel:"Tel. +02.477.55.14; Fax. +02.477.55.70", email:"Email: Sven.Glaesker@uzbrussel.be", desc2:"Nephrology and Internal Medicine", contact2:"Contact: Dr. Peter Janssens", tel2:"Tel. +02.477.60.55", email2:"Email: Peter.Janssens@uzbrussel.be"},
			{ name:"CANADA", desc:"Memorial University of Newfoundland, St. John’s, NF.", contact:"Contact: Dr. Jane Green, Medical Genetics.", tel:"Tel: 1-709.777.6242  Fax: 1-709.777.7317", email:"E-mail: janeg@mun.ca", desc2:"Toronto General Hospital, Toronto, ON.", contact2:"Contact, Adults: Laura Legere, RN.", tel2:"Tel: 1.416.340.3111 x6243", email2:"E-mail: laura.legere@uhn.ca", desc3:"Pediatrics: The Hospital for Sick Children, Toronto, ON", contact3:"Contact: Harriet Druker, MSc., Cancer Genetics Program", tel3:"Tel: 416-813-8597", email3:"E-mail: harriet.druker@sickkids.ca"},
			{ name:"CHINA", desc:"Peking University First Hospital, Beijing,", contact:"Contact: Gong Kan, MD.,", tel:"Tel: +86 (10) 83575101; Fax: +86 (10) 66552211", email:"E-mail: gongkan2013@163.com", web:"", adult:"ADULT AND PEDIATRIC"},
			{ name:"FRANCE", desc:"Necker Hospital and Kremlin-Bicêtre Hospital, Paris.", contact:"Contact: Stéphane Richard, MD, Oncogenetics.", tel:"Tel/Fax: +33 (1) 49.59.67.28", email:"E-mail: stephane.richard@kb.u-psud.fr", web:"Click for Website!", adult:""},
			{ name:"GERMANY", desc:"Albert-Ludwigs University Medical Center Freiburg.", contact:"Contact: Stefan Zschiedrich, MD, Nephrology", tel:"Tel: +49.761.27034140; Fax: +49.761.34140", email:"E-mail: med-vhl@uniklinik-freiburg.de", web:"", adult:""},
			{ name:"INDIA", desc:"Amrita Institute of Medical Sciences, Elamakkara Post, Kochi, Kerala.", contact:"Contact: Ashok Pillai, MD, Neurosurgery.", tel:"Tel: Fax: + 91.484.280.2020", email:"E-mail: brashok@aims.amrita.edu", web:"", adult:""},
			{ name:"ISRAEL", desc:"Hadassah University Hospital, Jerusalem.", contact:"Contact: Simona Glasberg, Endocrinology.", tel:"Tel: +972 (0)2.677.8899", email:"E-mail: simonag@hadassah.org.il", web:"", adult:""},
			{ name:"JAPAN", desc:"Kochi Medical School Hospital, Nankoku Kochi.", contact:"Contact: Mari Tashiro, Genetic Counselor. Department of Clinical Genetics", tel:"Tel: 088.866.5811", email:"E-mail: jm-m.tashiro@kochi-u.ac.jp", web:"", adult:""},
			{ name:"THE NETHERLANDS", desc:"University Hospital Utrecht.", contact:"Rachel Giles, PhD, Internal Medicine.", tel:"", email:"E-mail: r.giles at umcutrecht.nl", web:"", adult:""},
			{ name:"POLAND", desc:"Pomeranian Academy of Medicine, Szczecin.", contact:"Contact: Karol Krzystolik, MD, Genetics.", tel:"Fax: +48 (91) 4828.450", email:"E-mail: poland@vhl.org", web:"", adult:""},
			{ name:"SINGAPORE", desc:"National Cancer Centre Singapore.", contact:"Contact: Min-Han Tan, MD, PhD, Medical Oncology.", tel:"Tel: +65.6436.8000", email:"Email: tan.min.han@nccs.com.sg, minhan.tan@gmail.com", web:"", adult:""},
			{ name:"UNITED KINGDOM", overview:"Care for VHL and other genetic conditions in the UK is organized under the local genetics centres. People should begin by contacting their local centre, which will network with the major centres as necessary.", desc:"University of Birmingham", contact:"Contact: Sue Carless", tel:"Tel: +044.0121.627.2710", email:"Email: Sue.Carless@bwhct.nhs.uk", 
			desc2:"University of Cambridge", contact2:"Contact: Prof. Eamonn Maher, Dept. of Medical Genetics.", tel2:"Tel: +44.01223.217.054", email2:"Email: erm1000@medschl.cam.ac.uk", 
			desc3:"St. Bartholomew’s Hospital, London", contact3:"Contact: Ms. L. McAndrew, Neuroendocrine Clinical Nurse Specialist.", tel3:"Tel: +44 (0) 203.465.7264", email3:"Email: Lorraine.mcandrew@bartshealth.nhs.uk", 
			desc4:"Churchill Hospital, Oxford", contact4:"Regional Genetics Service", tel4:"Tel: +0114.271.7025"},

		];
		
		this.set("sections2", sections2);
    }
	
	public donate = function () {
		utilsModule.openUrl("https://donatenow.networkforgood.org/1411829?code=orange")

	}

		public onOpenSurvey = function () {
			utilsModule.openUrl("https://docs.google.com/forms/d/1x35igCRZFCvcaeYmY_d5M2xYW1KMUCmLvjJuSQ4ZTbc/viewform?edit_requested=true")
		}
		
		public onButtonTap = function (args) {
				var websites = [
	"https://stanfordhealthcare.org/medical-conditions/cancer/von-hippel-lindau-syndrome.html", 
	"https://medicine.yale.edu/urology/programs/genitourinary/kidney/hereditary.aspx", 
	"http://www.uchospitals.edu/specialties/cancer/risk/about/vhl/index.html", 
	"http://www.massgeneral.org/cancer/about/ccra_rcc.aspx", 
	"http://www.mcancer.org/endocrine-cancer/familial-neuroendocrine-syndromes/comprehensive-clinical-care-center-von-hippel-lindau-disease", 
	"http://columbiaspine.org/condition/von-hippel-lindau/",
	"https://unclineberger.org/patientcare/programs/vonhippellindau",
	"https://my.clevelandclinic.org/health/articles/von-hippel-lindau-disease",
	"https://www.pennmedicine.org/for-patients-and-visitors/find-a-program-or-service/translational-medicine-and-human-genetics/von-hippel-lindau-vhl-syndrome-center",
	"",
	"https://www.mdanderson.org/cancer-types/von-hippel-lindau-disease.html",
	"https://neurosciences.uvahealth.com/services/neurocutaneous-disorders/neurocutaneous-conditions/von-hippel-lindau-disease",
	];
			if(args.index != 9){
				    utilsModule.openUrl(websites[args.index])
			}
        }
		
        public onButtonTap1 = function (args) {
				var websites1 = [
	"https://www.uabmedicine.org/patient-care/conditions/von-hippel-lindau",
	"http://www.mayoclinic.org/departments-centers/clinical-genomics/overview/specialty-groups/von-hippel-lindau-clinic",
	"",
	"",
	"",
	"",
	"",
	"",
	"http://www.hopkinsmedicine.org/nephrology/patient_care/vhl-care.html",
	"https://www.lahey.org/Departments_and_Locations/Departments/Breast_Center/Ebsco_Content/Chemotherapy.aspx?chunkiid=22504",
	"http://www.mayoclinic.org/departments-centers/clinical-genomics/overview/specialty-groups/von-hippel-lindau-clinic",
	"https://www.mskcc.org/cancer-care/patient-education/frequently-asked-questions-about-von-hippel-lindau-vhl-syndrome",
	"",
	"",
	"",
	"http://healthcare.utah.edu/huntsmancancerinstitute/patient-care/clinics-and-care-teams/high-risk-cancer-research-clinics-and-studies/family-cancer-assessment-clinic/von-hippel-lindau.php",
	];
			utilsModule.openUrl(websites1[args.index])

        }
		
		public onButtonTap2 = function (args) {
				var websites2 = [
	"",
	"",
	"",
	"",
	"",
	"http://www.predir.org/",
	"",
	"",
	"",
	"",
	"",
	"",
	"",

	];
			if(args.index == 5){
				utilsModule.openUrl(websites2[args.index])
			}
        }
		
		public selectItemTemplate = function (item, index, items) {
			
			if(index == 4 || index == 6 || index == 7 || index == 10){
				return "two";
			}
			else if (index == 12){
				return "three";
			}
			else{
				return "one";
			}
		}
		
		public selectItemTemplate1 = function (item, index, items) {
			
			if(index ==  0){
				return "argentina";
			}
			else if(index == 2){
				return "belgium";
			}
			else if(index == 3){
				return "canada";
			}
			else if(index ==13){
				return "uk";
			}
			else{
				return "normal";
			}
		}
}
