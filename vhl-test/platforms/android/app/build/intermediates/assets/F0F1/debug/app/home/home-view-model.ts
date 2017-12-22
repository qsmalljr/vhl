import { Observable } from "data/observable";
var utilsModule = require("tns-core-modules/utils/utils");

export class HomeViewModel extends Observable {
    constructor() {
        super();
    }
	
	public donate = function () {
		utilsModule.openUrl("https://donatenow.networkforgood.org/1411829?code=orange")

	}
	
}
