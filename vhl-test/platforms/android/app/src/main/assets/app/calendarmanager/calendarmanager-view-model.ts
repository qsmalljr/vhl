import { Observable } from 'data/observable';

export class calendarmanagerViewModel extends Observable {

    constructor() {
        super();
		
		
    }
	
	get title(): String {
        return <String>this.get("textFieldValue");
    }
	
	get year(): String {
		return <String>this.get("currentYear");
	}
	
	public navBack = function () {
		var title = this.title;
		var year = this.year;
	}
}
