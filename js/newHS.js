'use strict'
var currentQ = localStorage.getItem('currentQuestion');
var userName = localStorage.getItem('userName');
currentQ = currentQ * 100;
////////////////HIGHSCORE TABLE/////////////////////////
var tableEl = document.getElementById("highscore-table");
var rowEle = document.createElement('tr');
var tdEle = document.createElement('td');

function insertTableRow(currentQ, userName) {
    var trEl = document.createElement("tr");
    for (var i = 0; i < 1; i++) {
        var tdEl = document.createElement("td");
        tdEl.textContent = userName;
        trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
    for (var j = 0; j < 1; j++) {
        var tdEl = document.createElement("td");
        tdEl.textContent = currentQ;
        trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
}
insertTableRow(currentQ, userName);