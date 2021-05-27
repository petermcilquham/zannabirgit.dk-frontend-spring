const in1 = document.getElementById("productId");
const in2 = document.getElementById("productName");
const in3 = document.getElementById("productPrice");

const editProductBtn = document.querySelector(".editProductButton");
editProductBtn.onclick = function() {
    postFunction({
        "productId": `${in1.value}`,
        "productName": `${in2.value}`,
        "productPrice": `${in3.value}`,
    });
}

function postFunction(inputValue){
    const url = "http://localhost:8080/products/edit";

    // const filteredData = filterMethod(inputValue)
    let requestBody = JSON.stringify(inputValue);
    console.log(requestBody)

    const requestOption = {
        headers: {
            'Content-type': 'application/json',
            // 'Accept': 'application/json',
            // 'Access-Control-Allow-Origin' : '*',
            // 'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            // 'Access-Control-Allow-Credentials' : true
        },
    method: 'PUT',
    body: requestBody
    };

    fetch(url, requestOption)
        .then(response => response.json())
    location.reload();
}
