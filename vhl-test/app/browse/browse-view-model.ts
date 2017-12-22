import { Observable } from "data/observable";
import calendarModule = require("nativescript-pro-ui/calendar");
import observableModule = require("tns-core-modules/data/observable");
import frameModule = require("tns-core-modules/ui/frame");
import { Color } from "tns-core-modules/color";
import applicationSettingsModule = require("application-settings");

export class BrowseViewModel extends Observable {
    constructor() {
        super();
		
		//CALENDAR POPULATING STUFF
		let now = new Date();
        let startDate: Date,
            endDate: Date,
            event: calendarModule.CalendarEvent;
        let colors: Array<Color> = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        let events: Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
        event = new calendarModule.CalendarEvent("pooping", new Date(now.getFullYear(),now.getMonth(),23), new Date(now.getFullYear(), now.getMonth(), 25), false);
		
		/*
		for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), 19);
            endDate = new Date(now.getFullYear(), now.getMonth(), 20);
            event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
            if (i % 3 == 0) {
                event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event);
            }
        }
		*/
		events.push(event);
		//convert events to dictionaries, stringify
		//when reading in, convert back from dictionaries to event objects
		
		var dictEvent;
		applicationSettingsModule.setNumber("length", events.length);
		for(let i = 0; i < events.length; i++){
			
			dictEvent = {
				title: events[i].title,
				startDate: events[i].startDate.toString(),
				endDate: events[i].endDate,
			}
			
			//String niggers = new String("event" + i.toString());
			applicationSettingsModule.setString("event" + i, JSON.stringify(dictEvent));
		}
		//console.log(JSON.stringify(dictEvent));
		//applicationSettingsModule.setString("events", JSON.stringify(dictEvent));
		//console.log(JSON.parse(dictEvent));
		var length = applicationSettingsModule.getNumber("length");
		let tempEvents: Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
		//convert all back to events	
		for(var i = 0; i < length; i++){
			var eventi = JSON.parse(applicationSettingsModule.getString("event" + i.toString()));
			
			console.log(eventi.title);
			console.log(<Date>eventi.startDate);
			
			//let pooper: Date = new Date(2017, 12, 20);
			//console.log(pooper);
			var tempEvent: calendarModule.CalendarEvent;
			
			//dates could be in wrong format
			tempEvent = new calendarModule.CalendarEvent(eventi.title, new Date(eventi.startDate), new Date(eventi.endDate));
			tempEvents.push(tempEvent);
		}

		this.source = tempEvents;
		console.log(events.length);

		
		//console.log(events[events.length - 1].title);
		//console.log(events[0].startDate);
		
		//ADD AN EVENT ON ANOTHER PAGE, RELOAD THIS PAGE WITH A METHOD THAT GETS ALL THE EVENTS AND POPULATES THE CALENDAR IN THE CONSTRUCTOR
		//this.addEvent(event);
		
        //this.source = events;
    }
	
	public addEvent(eventData) {
		//this event gets fired properly
		console.log("add");
		let now = new Date();
		var events: Array<calendarModule.CalendarEvent> = this.source;
		//console.log(events.length);
		var event: calendarModule.CalendarEvent;
		event = new calendarModule.CalendarEvent("pooping", new Date(now.getFullYear(),now.getMonth(),19), new Date(now.getFullYear(), now.getMonth(), 25), false);
		events.push(event);
		
		//save locally
		applicationSettingsModule.setString("events", JSON.stringify(events));
		
		this.set("calendarEvents", events);
		
		//events = <Array<calendarModule.CalendarEvent>>JSON.parse(applicationSettingsModule.getString("events"));
		//resolve(events);
		/*
		for(let i = 0; i < events.length; i++){
			events[i] = events[i] as calendarModule.CalendarEvent;
		}
		console.log(typeof(events[1]) == typeof(calendarModule.CalendarEvent));
		console.log(events[1].title);
		*/
		//var poop = new BrowseViewModel();
		
	}
	
	//gets the json string of events and populates the calendar on page load
	public loadEvents(){
		var events: Array<calendarModule.CalendarEvent> = <Array<calendarModule.CalendarEvent>>JSON.parse(applicationSettingsModule.getString("events"));
		
	}
	
	public deleteEvent(eventData) {
		//this event gets fired properly
		console.log("delete");
	}
	//MORE CALENDAR METHODS
    set source(value: Array<calendarModule.CalendarEvent>) {
        this.set("eventSource", value);
    }

    get source(): Array<calendarModule.CalendarEvent> {
        return <Array<calendarModule.CalendarEvent>>this.get("eventSource");
    }

    public onDateSelected(args: calendarModule.CalendarSelectionEventData) {
        var date: Date = args.date;
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>frameModule.topmost().getViewById("calendar");
        var events: Array<calendarModule.CalendarEvent> = calendar.getEventsForDate(date);
        this.set("myItems", events);
    }
	
	
	public toggleDropdown(eventData){
		//toggle works now
		this.set("showDetails", !this.get("showDetails"));
	}
	

}

