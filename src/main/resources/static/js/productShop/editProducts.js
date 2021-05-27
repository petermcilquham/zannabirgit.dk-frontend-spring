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

    let requestBody = JSON.stringify(inputValue);
    console.log(requestBody)

    const requestOption = {
        headers: {
            'Content-type': 'application/json',
        },
    method: 'PUT',
    body: requestBody
    };

    fetch(url, requestOption)
        .then(response => response.json())
     location.reload();
}
