//
//  Cynthia L. McLaughlin
//  March 2017
//
//

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function flickerName() {
    $("#input-name").css("font-size", "+=1");
    await sleep(200);
    $("#input-name").css("font-size", "-=1");
    await sleep(200);
}

$(document).ready(function () {

    setInterval(function () {
        flickerName();
    }, 500);
});

//$(window).on('resize', function () {
//    setPageElementsSize();
//});

//**From and Until included**
function randomInt(intFrom, intUntil) {
    return Math.floor((Math.random() * intUntil) + intFrom);
}