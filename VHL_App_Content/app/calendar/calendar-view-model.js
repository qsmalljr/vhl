var observableModule = require("data/observable");

function CalendarViewModel() {
	
	var now = new Date();
    const viewModel = observableModule.fromObject({
		
		events:[],

		
    });

    return viewModel;
}

module.exports = CalendarViewModel;
