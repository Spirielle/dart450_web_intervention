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
    $('#bowl-name').animate({
        //Makes text alternate size to fit the visual aesthetic of the game
        fontSize: $('#bowl-name').css('fontSize') == '20px' ? '21px' : '20px'
    }, 200, animateBowlName);
});

$(document).ready(function () {

});


//$(window).on('resize', function () {
//    setPageElementsSize();
//});

function testInput(inputContent, levelId) {

    //Get hash of answer
    var shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.update(inputContent);
    var hash = shaObj.getHash("HEX");
    var rightAnswer;

    switch(levelId) {
        case 1:
            rightAnswer = "41857db3118a2814c1c88ac684cf100e63665c26345ae9468d947b80de81b981669d84bbcfa3e0995228842d52704322591bfaa99c0cd998341298bdddc061de";
            break;
        default:
            Console.Log("Testing input for an nonexistent level or level not requiring input testing")
            return;
    }

    if (hash == rightAnswer)
        levelCompleted(levelId);
}

function levelCompleted(levelId) {
    localStorage.setItem("level" + levelId + "Completion", true);
    alert("You did it!");
    window.location.replace("index.html");
}

//**From and Until included**
function randomInt(intFrom, intUntil) {
    return Math.floor((Math.random() * intUntil) + intFrom);
}