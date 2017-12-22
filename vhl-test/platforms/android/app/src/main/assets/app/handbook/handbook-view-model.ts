import { Observable } from "data/observable";
import frameModule = require("tns-core-modules/ui/frame");
var utilsModule = require("tns-core-modules/utils/utils");

export class handbookViewModel extends Observable {
    constructor() {
        super();
		
		var sections = [
            { name: "What is VHL?", imageSrc: "1" },
            { name: "Possible VHL Manifestations", imageSrc: "2" },
            { name: "Healthy Living for the VHL Family", imageSrc: "3" },
            { name: "Discussing VHL with Your Family", imageSrc: "4" },
            { name: "VHL Research", imageSrc: "5" },
            { name: "Glossary of Medical Terms", imageSrc: "6" },
            { name: "VHL Support Resources", imageSrc: "7" },
        ];
		
		this.set("sections", sections);
		
    }
	
    public tapAction(args) {
		//ADD NAVIGATION CODE HERE
		frameModule.topmost().navigate("hbsection" + (args.index + 1) + "/hbsection" + (args.index + 1) + "-page");	
	}
	
	public donate = function () {
		utilsModule.openUrl("https://donatenow.networkforgood.org/1411829?code=orange")

	}
	
}
