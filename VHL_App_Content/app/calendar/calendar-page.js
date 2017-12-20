const frameModule = require("ui/frame");

var CalendarViewModel = require("./calendar-view-model");
var calendarModule = require("nativescript-pro-ui/calendar");




var calendarViewModel = new CalendarViewModel();
/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    /* ***********************************************************
    * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
    * Skipping the re-initialization on back navigation means the user will see the
    * page in the same data state that he left it in before navigating.
    *************************************************************/
    if (args.isBackNavigation) {
        return;
    }

	var page = args.object;
	page.bindingContext = calendarViewModel;

	
}




/* ***********************************************************
 * According to guidelines, if you have a drawer on your page, you should always
 * have a button that opens it. Get a reference to the RadSideDrawer view and
 * use the showDrawer() function to open the app drawer section.
 *************************************************************/
function onDrawerButtonTap(args) {
    const sideDrawer = frameModule.topmost().getViewById("sideDrawer");
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;

var page;
var pageData = new Observable();

exports.pageLoaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;

    var eventTitles = ["Lunch with Steve", "Meeting with Jane", "Q1 Recap Meeting"];
    var events = [];

    var j = 1;
    for (var i = 0; i < eventTitles.length; i++) {
        var now = new Date();
        var startDate = new Date(now.getFullYear(), now.getMonth(), j * 2, 12);
        var endDate = new Date(now.getFullYear(), now.getMonth(), (j * 2) + (j % 3), 13);
        var event = new calendarModule.CalendarEvent(eventTitles[i], startDate, endDate);
        events.push(event);
        j++;
    }

    pageData.set("events", events);
}