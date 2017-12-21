var observableModule = require("data/observable");
var calendarModule = require("nativescript-pro-ui/calendar");

function CalendarViewModel() {
	
	
	
	var now = new Date();
	var startDate = new Date(2017, 12, 15);
	var endDate = new Date(2017, 12, 19);
	
	
    const viewModel = observableModule.fromObject({
		
		events:[
		{
		title: "poop",
		startDate: startDate,
		endDate: endDate,
		},
		],

		
    });

    return viewModel;
}

module.exports = CalendarViewModel;
