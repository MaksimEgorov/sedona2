function minus_qty() {
    var adults_qty;

    adults_qty = document.getElementById("adults").value;
    adults_qty = parseInt(adults_qty);

    result = adults_qty - 1;

    document.getElementById("adults").innerHTML = result;
}
