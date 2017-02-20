
$(document).ready(function () {
    setPageElementsSize();
});

$(window).on('resize', function () {
    setPageElementsSize();
});

//**From and Until included**
function randomInt(intFrom, intUntil) {
    return Math.floor((Math.random() * intUntil) + intFrom);
}

//Sets a static width to most elements based on the window's size
//This allows the second layer effect when resizing the div "div-content-1"
function setPageElementsSize() {
    var windowWidth = $(window).width();
    var contentWidth = windowWidth * 0.7;
    var contentMargin = windowWidth * 0.15;
    var pictureWidth = contentWidth * 0.3;
    var pictureTopMargin = contentWidth * 0.05;
    var descriptionWidth = contentWidth * 0.55;
    var descriptionPadding = descriptionWidth * 0.1;
    var fontSize = descriptionWidth * 0.03;
    var titleFontSize = descriptionWidth * 0.04;

    var contentCss = {
        width: contentWidth,
        marginLeft: contentMargin,
    }

    var pictureCss = {
        width: pictureWidth,
        marginTop: pictureTopMargin,
    }

    var descriptionCss = {
        width: descriptionWidth,
        padding: descriptionPadding,
        fontSize: fontSize
    }

    $(".div-content").css(contentCss);
    $(".img-profile").css(pictureCss);
    $(".div-description").css(descriptionCss);
    $(".div-title").css("font-size", titleFontSize);

    $('#div-content-first').resizable({
        handles: "e",
        maxWidth: contentWidth,
        //This parts prevents the div resizing from triggering the window resize event
        //Solution found here: http://stackoverflow.com/questions/15902920/resizing-an-element-triggers-the-resize-event-of-the-window
        create: function (event, ui) {
            $(this).parent().on('resize', function (e) {
                e.stopPropagation();
            });
        }
    });
}