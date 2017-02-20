
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
    var contentWith = windowWidth * 0.8;
    var contentMargin = windowWidth * 0.1;

    var contentCss = {
        width: contentWith,
        marginLeft: contentMargin,
    }

    $(".div-content").css(contentCss);

    $('#div-content-second').resizable({
        handles: "e",
        maxWidth: contentWith,
        //This parts prevents the div resizing from triggering the window resize event
        //Solution found here: http://stackoverflow.com/questions/15902920/resizing-an-element-triggers-the-resize-event-of-the-window
        create: function (event, ui) {
            $(this).parent().on('resize', function (e) {
                e.stopPropagation();
            });
        }
    });
}