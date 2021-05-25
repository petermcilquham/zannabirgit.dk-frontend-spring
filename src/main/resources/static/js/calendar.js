const calendarUrl = "http://localhost:8080/calendar/all";

const requestOption = {
    headers: {
        "Content-type": 'application/json'
    },
    method: 'GET',
    redirect: 'follow'
};

//rendering the calendar
fetch(calendarUrl, requestOption)
    .then(response => response.json())
    .then(data => gotData(data));

function gotData(data) {
    console.log(data)
    data.forEach(addToArray)
}

function addToArray(data) {
    let id = data.id
    let date = data.bookingDate
    let title = "Start tid: " + data.bookingTime.slice(0, 5)
        + "\n " + data.customerName
        + "\n Tlf: " + data.customerPhone

    $('#calendar').fullCalendar('renderEvent', {
        id: id,
        start: date,
        title: title,
        textColor: "black",
        backgroundColor: "rgb(188, 202, 139)",
        borderColor: "rgb(188, 202, 139)",
    }, true);
}

let currentTime = new Date();
$(document).ready(function() {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: `${currentTime}`,
        navLinks: true,
        eventLimit: true,
        weekNumbers: true,
        basicDay: currentTime,
        events: [
        ],
    });
});


