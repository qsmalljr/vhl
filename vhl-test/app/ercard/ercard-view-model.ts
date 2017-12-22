import { Observable } from "data/observable";
var utilsModule = require("tns-core-modules/utils/utils");

export class ercardViewModel extends Observable {
    constructor() {
        super();
    }
	
	public donate = function () {
		utilsModule.openUrl("https://donatenow.networkforgood.org/1411829?code=orange")

	}
}
