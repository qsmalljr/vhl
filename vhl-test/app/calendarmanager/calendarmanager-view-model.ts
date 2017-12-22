import { Observable } from 'data/observable';
import { DatePicker } from "ui/date-picker";

export class calendarmanagerViewModel extends Observable {
	
    constructor() {
        super();
		
		
    }
	
	get title(): String {
        return <String>this.get("textFieldValue");
    }
	
	get year(): Number {
		//doesnt work
		return <Number>this.get("currentYear");
	}
	
	public navBack = function () {
		//var title = this.title;
		//var year = this.year;
		//console.log(year);
	}
	
	public onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;

        //console.log(datePicker.year);
    }
}
