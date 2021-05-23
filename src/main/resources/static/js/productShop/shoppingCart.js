function fetchById(productId){
    clearCartTable()
    hideCartIfEmpty()
    let url = `http://localhost:8080/products/id/${productId}`;
    fetch(url, requestOption)
        .then(response => response.json())
        .then(product => shoppingCartData(product));
}

shoppingCartArray = []
function shoppingCartData(product){
    shoppingCartArray.push(product)
    shoppingCartArray.forEach(addCartRow)
}

function addCartRow(cartData){
    const table = document.querySelector(".shoppingCartTable");
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = "- " + cartData.productName;

    let cell2 = row.insertCell(1);
    cell2.innerHTML = cartData.productPrice + "kr";
}

let cartTable = document.querySelector(".shoppingCartTable");
function clearCartTable() {
    let tableHeaderRowCount = 0;
    let rowCount = cartTable.rows.length;

    for (let i = tableHeaderRowCount; i < rowCount; i++) {
        cartTable.deleteRow(tableHeaderRowCount);
    }
}

shoppingCartTotalSum = []
function getTotalSum(productPrice) {
    shoppingCartTotalSum.push(productPrice)

    //Array.prototype.reduce from stackoverflow
    let totalSum = shoppingCartTotalSum.reduce(function(acc, val) {
        return acc + val;
        }, 0)
    document.getElementById("shoppingCartTotal").innerHTML = totalSum + "kr"
}

document.getElementById("reserveOnlineBtn").addEventListener("click", reserveOnline)
function reserveOnline() {
    let totalSum = document.getElementById("shoppingCartTotal").innerHTML
    alert("Tak for din bestilling for: " + totalSum
        + ". \nReservationen vil være klar inden en dag i butikken." +
        "\nTak for du handler med mig")
    location.reload()
}

hideCartIfEmpty()
function hideCartIfEmpty() {
    let shoppingCart = document.getElementById("shoppingCart")
    if (shoppingCartArray.length === 0) {
        $(shoppingCart).hide();
        shoppingCartArray.length+=1
    } else {
        $(shoppingCart).show();
    }
}