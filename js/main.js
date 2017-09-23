var Root = 'https://www.googleapis.com/calendar/v3/calendars/u5f0srmm6nc683nic5p0b1avto@group.calendar.google.com/events?maxResults=3&key=';
var APIKey = 'AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY';
//ANwU0p4FJzmWw39XLKydYnam1ONCgsTc8Q
//1ckigt59gh9uikdn3qlsdnmr8k

var eventsDiv = document.getElementById("section-c");

$(document).ready(function () {
    $.ajax({
      url: Root + APIKey,
      method: 'GET'
    }).then(function(data) {
        console.log(data);
        var items = data.items;
        for(var i = 0; i < items.length; i++) {
            var startTime = new Date(items[i].start.dateTime);
            var card = '<div class="card"><div class="container"><h4><b>' + items[i].summary + '</b></h4><br/><p>' + getShowDate(startTime) + '</p><p>' + getShowTime(startTime) + '</p><p>' + getShowLocation(items[i]) + '</p></div></card>';
            eventsDiv.innerHTML += card;
            console.log(items[i]);            
            console.log(startTime);            
        }
    });
});

function  getShowDate(date) {
    return "Date: " + date.toDateString();
}

function  getShowTime(date) {
    return "Start Time: " + date.toLocaleTimeString();
}

function  getShowLocation(event) {
    return "Location: " + event.location;
}