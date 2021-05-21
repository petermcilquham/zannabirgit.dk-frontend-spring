const in1 = document.getElementById("productID");
const in2 = document.getElementById("productName");
const in3 = document.getElementById("productPrice");

const editProductBtn = document.querySelector(".editProductButton");
editProductBtn.onclick = function() {
    postFunction({
        "productID": `${in1.value}`,
        "productName": `${in2.value}`,
        "productPrice": `${in3.value}`,
    });
}

function postFunction(inputValue){
    const url = "http://localhost:8080/products/edit";

    const filteredData = filterMethod(inputValue)
    let requestBody = JSON.stringify(filteredData);

    const requestOption = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
            'Access-Control-Allow-Credentials' : true
        },
    method: 'POST',
    body: requestBody
    };

    fetch(url, requestOption)
        .then(response => response.json())
    //
    // location.reload();
}

function filterMethod(inputValue) {
    let inValFiltered = {}

    inValFiltered.productID = inputValue.productID

    if (inputValue.productID.length > 0) {
        inValFiltered.productID = inputValue.productID;
    }

    if (inputValue.productName.length > 0) {
        inValFiltered.productName = inputValue.productName;
    }

    if (inputValue.productPrice.length > 0) {
        inValFiltered.productPrice = inputValue.productPrice;
    }
    return inValFiltered;
}
