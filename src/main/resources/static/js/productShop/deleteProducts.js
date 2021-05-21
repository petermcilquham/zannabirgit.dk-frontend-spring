const getProductsUrl = "http://localhost:8080/products/all"

const requestOption = {
    headers: {
        "Content-type": 'application/json'
    },
    method: 'GET',
    redirect: 'follow'
};

fetch(getProductsUrl, requestOption)
    .then(response => response.json())
    .then(data => gotData(data))

function gotData(data) {
    data.forEach(addRowForEdit)
}

function addRowForEdit(data) {
    const table = document.querySelector(".editProductsTable");
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = data.productId + " - " ;

    let cell2 = row.insertCell(1);
    cell2.innerHTML = data.productName;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = data.productPrice + "kr";
}

const inputProductID = document.getElementById("deleteProduct");
const deleteProductBtn = document.querySelector(".deleteProductButton")

deleteProductBtn.onclick = function(){
    deleteProduct(`http://localhost:8080/products/delete/${inputProductID.value}`);
    location.reload();
}
const deleteRequestOption = {
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials' : true
    },
    method: 'DELETE',
    redirect: 'follow'

};

function deleteProduct(deleteUrl){
    fetch(deleteUrl, deleteRequestOption)
        .then(response => response.json())
}

