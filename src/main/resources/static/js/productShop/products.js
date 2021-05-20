const url = "http://localhost:8080/products/all"

const requestOption = {
    headers: {
        "Content-type": 'application/json'
    },
    method: 'GET',
    redirect: 'follow'
};

fetch(url, requestOption)
    .then(response => response.json())
    .then(data => gotData(data))

function gotData(data) {
    data.forEach(addRow)
}
function addRow(data) {
    const table = document.querySelector(".productsTable");
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = "- " + data.productName;

    let cell2 = row.insertCell(1);
    cell2.innerHTML = data.productPrice + "kr";

    let cell3 = row.insertCell(2);
    addToCartBtn = document.createElement("BUTTON");
    let btnText = document.createTextNode("Tilføj til kurv")
    addToCartBtn.appendChild(btnText)

    cell3.appendChild(addToCartBtn)
    addToCartBtn.onclick = function () {
        fetchById(data.productId)
        getTotalSum(data.productPrice)
    }
}