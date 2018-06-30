'use strict'
function toggleSideBar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
    
};

function startHandler(){
    event.preventDefault();
    var userName = document.getElementById('user-name');
    var getUserName = userName.playername.value;
    var setName2Storage = localStorage.setItem('userName', JSON.stringify(getUserName));
    window.location.href = "game.html";
}

var startButton = document.getElementById('submit').addEventListener('click', startHandler);


function clearNameHandler(){
    event.preventDefault();
    localStorage.clear();
}
var clearButtion = document.getElementById('clear-name').addEventListener('click', clearNameHandler);

