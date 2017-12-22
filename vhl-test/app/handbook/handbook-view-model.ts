import { Observable } from "data/observable";

export class handbookViewModel extends Observable {
    constructor() {
        super();
    }
    public tapAction(args) {
		//ADD NAVIGATION CODE HERE
		frameModule.topmost().navigate("hbsection" + (args.index + 1) + "/hbsection" + (args.index + 1));	
	}
	
}
