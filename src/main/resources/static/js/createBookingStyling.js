let serviceSelectDiv = document.getElementById("serviceSelectDiv")
let bookingDateDiv = document.getElementById("bookingDateDiv")
let bookingTimeDiv = document.getElementById("bookingTimeDiv")
let customerEmailDiv = document.getElementById("customerEmailDiv")
let customerNameDiv = document.getElementById("customerNameDiv")
let customerPhoneDiv = document.getElementById("customerPhoneDiv")
let bookingBtn = document.getElementById("createBookingButton")
let restartButton = document.getElementById("restartButton")

$(bookingDateDiv).hide();
$(bookingTimeDiv).hide();
$(customerEmailDiv).hide();
$(customerNameDiv).hide();
$(customerPhoneDiv).hide();
$(bookingBtn).hide();
$(restartButton).hide();

serviceSelectDiv.addEventListener("change", function() {
    $(bookingDateDiv).show();
})

bookingDateDiv.addEventListener("change", function() {
    $(bookingTimeDiv).show();
})

bookingTimeDiv.addEventListener("change", function() {
    $(customerEmailDiv).show();
    $(customerNameDiv).show();
    $(customerPhoneDiv).show();
    $(bookingBtn).show();
    $(restartButton).show();
})
