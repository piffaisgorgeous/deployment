"use strict";
var medicine = /** @class */ (function () {
    function medicine(a, b, c, d) {
        this.bname = a;
        this.gname = b;
        this.stock = c;
        this.price = d;
    }
    return medicine;
}());
var med = [];
var addRow;
var sell;
var purchase;
var edit;
var clearAmount;
addRow = function () {
    var bname = document.querySelector('#bname');
    var gname = document.querySelector('#gname');
    var stock = document.querySelector('#stock');
    var price = document.querySelector('#price');
    var table = document.querySelector('#medicine');
    var a = new medicine(bname.value, gname.value, stock.valueAsNumber, price.valueAsNumber);
    med.push(a);
    var count = table.rows.length;
    var row = table.insertRow(count);
    for (var i = count - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
    for (var i = 0, j = 1; i < med.length && j <= med.length; i++) {
        var row_1 = table.insertRow(j);
        row_1.insertCell(0).innerHTML = med[i].bname;
        row_1.insertCell(1).innerHTML = med[i].gname;
        row_1.insertCell(2).innerHTML = med[i].stock.toString();
        row_1.insertCell(3).innerHTML = med[i].price.toString();
    }
    bname.value = "";
    gname.value = "";
    stock.value = "";
    price.value = "";
};
sell = function () {
    var table = document.querySelector('#medicine');
    var qsell = document.querySelector('#QuantToSell');
    var msell = document.querySelector('#MedToSell');
    var count = table.rows.length;
    var flag = 0;
    for (var i = 0; i < med.length; i++) {
        if (med[i].bname.toLowerCase() == msell.value.toLowerCase()) {
            if (qsell.valueAsNumber > med[i].stock) {
                alert('Stock is insufficient');
                flag++;
            }
            else {
                med[i].stock -= qsell.valueAsNumber;
                flag = 1;
                break;
            }
        }
    }
    if (flag == 0) {
        alert("Medicine is Not in the pharmacy");
    }
    for (var i = count - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
    for (var i = 0, j = 1; i < med.length && j <= med.length; i++) {
        var row = table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].bname;
        row.insertCell(1).innerHTML = med[i].gname;
        row.insertCell(2).innerHTML = med[i].stock.toString();
        row.insertCell(3).innerHTML = med[i].price.toString();
    }
    qsell.value = "";
    msell.value = '';
};
purchase = function () {
    var table = document.querySelector('#medicine');
    var amt = document.querySelector('#amount');
    var qpur = document.querySelector('#QuantToPurchase');
    var mpur = document.querySelector('#MedToPurchase');
    var count = table.rows.length;
    var amount;
    var flag;
    flag = 0;
    for (var i = 0; i < med.length; i++) {
        if (med[i].bname.toLowerCase() == mpur.value.toLowerCase()) {
            if (qpur.valueAsNumber > med[i].stock) {
                alert("Out of Stock");
                flag++;
                break;
            }
            else {
                med[i].stock -= qpur.valueAsNumber;
                amount = med[i].price * qpur.valueAsNumber;
                amt.value = amount.toString();
                flag == 1;
                break;
            }
        }
    }
    if (flag == 0) {
        alert("Medicine is Not in the pharmacy");
    }
    for (var i = count - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
    for (var i = 0, j = 1; i < med.length && j <= med.length; i++) {
        var row = table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].bname;
        row.insertCell(1).innerHTML = med[i].gname;
        row.insertCell(2).innerHTML = med[i].stock.toString();
        row.insertCell(3).innerHTML = med[i].price.toString();
    }
    qpur.value = "";
    mpur.value = "";
};
edit = function () {
    var table = document.querySelector('#medicine');
    var medit = document.querySelector('#MedToEdit');
    var bedit = document.querySelector('#BnameToEdit');
    var gedit = document.querySelector('#GnameToEdit');
    var sedit = document.querySelector('#StockToEdit');
    var pedit = document.querySelector('#PriceToEdit');
    var count = table.rows.length;
    var flag = 0;
    for (var i = 0; i < med.length; i++) {
        if (med[i].bname.toLowerCase() == medit.value.toLowerCase()) {
            flag++;
            if (bedit.value != '') {
                med[i].bname = bedit.value;
            }
            if (gedit.value != '') {
                med[i].gname = gedit.value;
            }
            if (sedit.value != '') {
                med[i].stock = sedit.valueAsNumber;
            }
            if (pedit.value != '') {
                med[i].price = pedit.valueAsNumber;
            }
            break;
        }
    }
    if (flag == 0) {
        alert("Medicine is Not in the pharmacy");
    }
    for (var i = count - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
    for (var i = 0, j = 1; i < med.length && j <= med.length; i++) {
        var row = table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].bname;
        row.insertCell(1).innerHTML = med[i].gname;
        row.insertCell(2).innerHTML = med[i].stock.toString();
        row.insertCell(3).innerHTML = med[i].price.toString();
    }
    medit.value = "";
    bedit.value = "";
    gedit.value = "";
    sedit.value = "";
    pedit.value = "";
};
clearAmount = function () {
    var amount = document.querySelector('#amount');
    amount.value = "";
};
