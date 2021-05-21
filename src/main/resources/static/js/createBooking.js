const in1 = document.getElementById("serviceDropdown");
const in2 = document.getElementById("bookingDate");
const in3 = document.getElementById("bookingTime");
const in4 = document.getElementById("customerEmail");
const in5 = document.getElementById("customerName");
const in6 = document.getElementById("customerPhone");
let customerId = 0


const createBookingBtn = document.querySelector(".createBookingButton");
createBookingBtn.onclick = function(){
  getCustomerId()
}

//get customer id
function getCustomerId() {
  const customerEmailUrl = `http://localhost:8080/customers/email/${in4.value}`;
  const customerEmailRequestOption = {
    headers: {
      "Content-type": 'application/json'
    },
    method: 'GET',
    redirect: 'follow'
  };

  fetch(customerEmailUrl, customerEmailRequestOption)
      .then(response => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json()
              .then(customerData => changeCustomerId(customerData));

        } else {
          return response.text()
              .then(newCustomerData => createCustomer(newCustomerData));

        }
      })
}

function createCustomer() {
  alert("laver ny customer")
  postCreateCustomer({
    "customerName": `${in5.value}`,
    "customerEmail": `${in4.value}`,
    "customerPhone": `${in6.value}`,
  });
}

function postCreateCustomer(inputValue) {
  const customerUrl = "http://localhost:8080/customers/create";
  let customerRequestBody = JSON.stringify(inputValue);

  const customerRequestOption = {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
      'Access-Control-Allow-Credentials' : true
    },
    method: 'POST',
    body: customerRequestBody,
  };
  fetch(customerUrl, customerRequestOption)
      .then(response => response.json())

  postFunction(inputValue)
}

function changeCustomerId(customerData) {
  alert("customer findes allerede")
  postFunction({
    "serviceId": `${in1.value}`,
    "bookingDate": `${in2.value}`,
    "bookingTime": `${in3.value + ":00"}`,
    "customerId": customerId = customerData.customerId
  });
}

//actual create booking function
function postFunction(inputValue) {
  const bookingUrl = "http://localhost:8080/bookings/create";
  let bookingRequestBody = JSON.stringify(inputValue);

  const bookingRequestOption = {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
      'Access-Control-Allow-Credentials' : true
    },
    method: 'POST',
    body: bookingRequestBody,

  };

  fetch(bookingUrl, bookingRequestOption)
      .then(response => response.json())

  alert("Tak for din booking:"
        + bookingRequestBody
  )
  location.reload()
}

//create customer if they dont exist
function isEmpty(customerEmailUrl) {
  // for (var prop in customerEmailUrl) {
  //   if (customerEmailUrl.hasOwnProperty(prop)) {
  //     return alert("kunde findes ikke")
  //   }
  //   return alert("kunde findes")
  // }

  console.log(Object.keys(customerEmailUrl).length)

}


//Get services list
const serviceUrl = "http://localhost:8080/services/all";

const serviceRequestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

fetch(serviceUrl, serviceRequestOption)
    .then(response => response.json())
    .then(data => gotData(data));

function gotData(data) {
  data.forEach(populateSelect)
}

function populateSelect(data) {
  let element = document.getElementById('serviceDropdown');
  element.innerHTML = element.innerHTML + '<option value="' + data.serviceId + '">' + data.serviceName + " (" + data.serviceLength + " min. " + data.servicePrice + "kr )" + '</option>';
}
