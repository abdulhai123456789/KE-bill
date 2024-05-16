function generateBill() {
    var customerName = document.getElementById("customerName").value;
    var currentMonth = document.getElementById("currentMonth").value;
    var numberOfUnits = parseFloat(document.getElementById("numberOfUnits").value);
    var chargesPerUnit = parseFloat(document.getElementById("chargesPerUnit").value);
    var latePaymentSurcharge = parseFloat(document.getElementById("latePaymentSurcharge").value);

    var netAmount = numberOfUnits * chargesPerUnit;
    var grossAmount = netAmount + latePaymentSurcharge;

    document.getElementById("result").innerHTML =
        "<h2>Electricity Bill</h2>" +
        "<p><strong>Customer Name:</strong> " + customerName + "</p>" +
        "<p><strong>Current Month:</strong> " + currentMonth + "</p>" +
        "<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>" +
        "<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</p>" +
        "<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmount.toFixed(2) + "</p>" +
        "<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + "</p>" +
        "<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmount.toFixed(2) + "</p>";
}