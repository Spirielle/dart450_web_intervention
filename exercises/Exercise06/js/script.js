//  Cynthia L. McLaughlin
//  February 2017
//
//  Exercise 06 - Surveillance
//  Based on Pippin Barr example https://github.com/pippinbarr/dart450_class/tree/master/examples/week06/attentionseeker
//
//  Tracks the user's face using tracking.js and frame it with an id card
//  The code also prompt the user for his/her name and adds it on top of the card
//

$(document).ready(function () {

    // Prepare Media
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true }, handleVideo, videoError);
    }

    //Prompt for name
    askName();
});

//Ask user for name and change content of div id name accordingly
function askName() {
    var name = prompt("Please enter your name");
    if (name != null) {
        document.getElementById("name").innerHTML = name;
    }
}

// handleVideo (stream)
//
// When getUserMedia gets hold of the user's webcam, it calls this function
// with the argument "stream" which is the stream of the webcam data
function handleVideo(stream) {

    var streamURL = window.URL.createObjectURL(stream);
    
    //Set source
    $('#webcam').attr({
        src: streamURL
    });

    startTracking();
}

//Video Error Handling
function videoError(e) {
    console.log("Error With Video")
}

//Start Tracking Face
function startTracking() {

    var faceTracker = new tracking.ObjectTracker(['face']);

    // Assign tracking handler
    faceTracker.on('track', handleTrackingEvent);

    // Start tracking
    tracking.track('#webcam', faceTracker);
}

// handleTrackingEvent
//
// Called every frame of video that detection is running
function handleTrackingEvent(event) {

    if (event.data.length === 0) {
        // No detection
    }
    else {
        event.data.forEach(function (rect) {

            //Change size and position of id card image and name
            //  to frame the user's face

            var cardNewCss = {
                left: rect.x - rect.width * 0.4,
                top: rect.y - rect.width,
                width: rect.width * 5,
                display: "initial"
            }

            var nameNewCss = {
                left: rect.x + rect.width * 2,
                top: rect.y - rect.width * 0.1,
                fontSize: rect.width * 0.18,
                display: "initial"
            }

            $("#card").css(cardNewCss);
            $("#name").css(nameNewCss);
        });
    }
}

