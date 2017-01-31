//Global constants

var TOTAL_CAT_GIFS = 54;
var TOTAL_BACKGROUNDS = 9;

$(document).ready(function () {
    //Refresh
    setTimeout(function () {
        window.location.reload(1);
    }, 5000);

    //Title
    setInterval(function () {
        $("#title").css("color", randomColor(1.0));
    }, 100);

    //Background
    setRandomBackground();

    //Content
    var numberOfRow = randomInt(3, 10);
    for (var i = 0; i < numberOfRow; ++i) {

        //Variables
        var numberOfColumn = randomInt(1, 4);
        var rowHeight = randomInt(100, 500);
        var divWidth = 100 / numberOfColumn;
        var divCssClassName = "box-col-" + numberOfColumn;

        for (var j = 0; j < numberOfColumn; ++j) {

            //Building the div
            var divContent = "<div class='box " + divCssClassName + "' style='height: " + rowHeight + "px; background-color: " + randomColor(0.9) + "'>";
            divContent += generateRandomImageContent();
            divContent += "</div>";

            $("#div-content").append(divContent);
        }
    }

    //To make sure the div content wraps the whole thing
    $("#div-content").append("<div>hello world</div>");
});

//**From and Until included**
function randomInt(intFrom, intUntil) {
    return Math.floor((Math.random() * intUntil) + intFrom);
}

function generateRandomImageContent() {
    var numberOfImages = randomInt(1, 4);
    var content = "";

    for (var i = 0; i < numberOfImages; ++i) {
        //Adds an img tag with a random cat gif
        content += "<img src='img/cat" + randomInt(1, TOTAL_CAT_GIFS) + ".gif'>";
    }
    return content;
}

function setRandomBackground() {
    var backgroundPath = "img/bg" + randomInt(1, TOTAL_BACKGROUNDS) + ".gif";
    $('body').css('background-image', 'url(' + backgroundPath + ')');
}

var randomColor = function (transparency) {
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    return "rgba(" + r + ", " + g + ", " + b + ", " + transparency + ")";
};