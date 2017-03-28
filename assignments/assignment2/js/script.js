//
//  Cynthia L. McLaughlin
//  March 2017
//
//

//  IDEAS
//  Cat sound when level complete?
//
//  look at underscore library (helper library)
//  Casper for hidden cat heheheh
//


$(document).ready(function animateBowlName() {
    $('#input-name').animate({
        //Makes text alternate size to fit the visual aesthetic of the game
        fontSize: $('#input-name').css('fontSize') == '20px' ? '21px' : '20px'
    }, 200, animateBowlName);
});

$(document).ready(function() {
    $("#input-name").blur(function () {
        testInput($("#input-name").val());
    });
});



//$(window).on('resize', function () {
//    setPageElementsSize();
//});

//TODO: Make this function more "universal"
//      and the check less obvious
function testInput(inputContent) {
    if (inputContent == "Floof")
    {
        localStorage.setItem("level1Completion", true);
        alert("You did it!");
        window.location.replace("index.html");
    }
}

//**From and Until included**
function randomInt(intFrom, intUntil) {
    return Math.floor((Math.random() * intUntil) + intFrom);
}