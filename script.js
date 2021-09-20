console.log("page loaded...");
// mute onplay function and unmute onclick function

var vid = document.getElementById("myVideo");

function enableMute() { 
    vid.muted = true;
} 

function disableMute() {
    vid.muted = false;
} 