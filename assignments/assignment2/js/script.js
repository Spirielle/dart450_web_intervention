//
//  Cynthia L. McLaughlin
//  March 2017
//
//

//  IDEAS
//  Cat sound when level complete?
//  Maybe empty the bowl as well
//
//  look at underscore library (helper library)
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
        case 7:
            rightAnswer = "e9a1f3cbe2a4404b3e91a1355bd22b8f0268874c378b85e656022dd9321e91ba72def501e9b3159d45b09d75bf53f12b127afa04e14745be515cd6653685c15b";
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
    $("#div-answer").css("display", "block");
    $.getJSON('data/answers.json', getCallBack(levelId));
}

function getCallBack(levelId) {
    return function answersCallback(data) {
        answer = data.answer[levelId - 1];
        $("#div-answer").append(answer);
    }
}

//**From and Until included**
function randomInt(intFrom, intUntil) {
    return Math.floor((Math.random() * intUntil) + intFrom);
}