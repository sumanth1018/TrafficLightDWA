let SButton = document.getElementById("stopButton");
let RButton = document.getElementById("readyButton");
let GButton = document.getElementById("goButton");
let SBulb = document.getElementById("stopLight");
let RBulb = document.getElementById("readyLight");
let GBulb = document.getElementById("goLight");

function STOP() {
    SButton.style.backgroundColor = "#cf1124";
    RButton.style.backgroundColor = "#1f1d41";
    GButton.style.backgroundColor = "#1f1d41";
    SBulb.style.backgroundColor = "#cf1124";
    RBulb.style.backgroundColor = "#4b5069";
    GBulb.style.backgroundColor = "#4b5069";
}

function READY() {
    SButton.style.backgroundColor = "#1f1d41";
    RButton.style.backgroundColor = "#f7c948";
    GButton.style.backgroundColor = "#1f1d41";
    SBulb.style.backgroundColor = "#4b5069";
    RBulb.style.backgroundColor = "#f7c948";
    GBulb.style.backgroundColor = "#4b5069";
}

function GO() {
    SButton.style.backgroundColor = "#1f1d41";
    RButton.style.backgroundColor = "#1f1d41";
    GButton.style.backgroundColor = "#199473";
    SBulb.style.backgroundColor = "#4b5069";
    RBulb.style.backgroundColor = "#4b5069";
    GBulb.style.backgroundColor = "#199473";
}