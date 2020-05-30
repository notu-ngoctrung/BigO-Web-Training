var myVideo = document.getElementById("WelcomVideo"); 
var myButton = document.getElementById("playPauseButton");
function playPause() {  
    if (myVideo.paused) {
        myVideo.play();
        myButton.style.opacity = 0;
    }
    else { 
        myVideo.pause(); 
        myButton.style.opacity = 1;
    }
}