/*
    Cynthia L. McLaughlin
    March 2017

    Web Intervention Exercise 10
*/

var timer = 0;
var hiddenAudio;

$(document).ready(function () {
    document.getElementById("music-player").volume = 0.5;
    changeMusicSpeed();

    hiddenAudio = new Audio('src/binaural.ogg');

    setInterval(function () {
        timer++;
        console.log(timer);
        if (timer % 15 == 0)    //Every 15 seconds
        {
            hiddenAudio.play();
        }
    }, 1000);
});

$(window).on('resize', function () {
    changeMusicSpeed();
});

function changeMusicSpeed() {
    var windowWidth = $(window).width();
    var newSpeed = windowWidth / 600 + 0.3;

    //Sadly max is 4, min is 0.5
    newSpeed = newSpeed > 4 ? 4 : newSpeed;
    newSpeed = newSpeed < 0.5 ? 0.5 : newSpeed;

    document.getElementById("music-player").playbackRate = newSpeed;
}

