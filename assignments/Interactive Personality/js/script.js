
$(document).ready(function () {
    ////Refresh
    //setTimeout(function () {
    //    window.location.reload(1);
    //}, 5000);

    ////Title
    //setInterval(function () {
    //    $("#title").css("color", randomColor(1.0));
    //}, 100);

    //$('.div-content').resizable({handles: 'n,w'});

    $(function () {
        $("#div-content-second").resizable({
            handles: "e",
            maxWidth: 1200
        });
    });

    //$('.handle').on('mousedown', function (e) {
    //    var $dragable = $(this).parent(),
    //        startWidth = $dragable.width(),
    //        pX = e.pageX;

    //    $(document).on('mouseup', function (e) {
    //        $(document).off('mouseup').off('mousemove');
    //    });
    //    $(document).on('mousemove', function (me) {
    //        var mx = (me.pageX - pX);
    //        //var my = (me.pageY - pY);

    //        $dragable.css({
    //            left: mx / 2,
    //            width: startWidth - mx,
    //            //top: my
    //        });
    //    });

    //});

});

//**From and Until included**
function randomInt(intFrom, intUntil) {
    return Math.floor((Math.random() * intUntil) + intFrom);
}

//function generateRandomImageContent() {
//    var numberOfImages = randomInt(1, 4);
//    var content = "";

//    for (var i = 0; i < numberOfImages; ++i) {
//        //Adds an img tag with a random cat gif
//        content += "<img src='img/cat" + randomInt(1, TOTAL_CAT_GIFS) + ".gif'>";
//    }
//    return content;
//}

//function setRandomBackground() {
//    var backgroundPath = "img/bg" + randomInt(1, TOTAL_BACKGROUNDS) + ".gif";
//    $('body').css('background-image', 'url(' + backgroundPath + ')');
//}

//var randomColor = function (transparency) {
//    var r = randomInt(0, 255);
//    var g = randomInt(0, 255);
//    var b = randomInt(0, 255);
//    return "rgba(" + r + ", " + g + ", " + b + ", " + transparency + ")";
//};