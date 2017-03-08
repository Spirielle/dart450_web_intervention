/*

ScrollMagic
http://scrollmagic.io/

TweenMax
https://greensock.com/tweenmax

*/

$(document).ready(function () {

    //Make a manual scroll button
    $("#scroll").click(function () {
        var y = $(window).scrollTop();  //y position on the page from top
        $(window).scrollTop(y + 20);
    });

    //Manual scroll back up button
    $("#scroll-up").click(function () {
        $(window).scrollTop(0);
    });

    //Make the cat clickable for winning the game
    $("#cat").click(function () {
        alert("You did it!! It was cute wasn't it?")
        $(window).scrollTop(0);
    });

    // Create a ScrollMagic Controller so we can use the library
    var controller = new ScrollMagic.Controller();

    //Make messages appear when scrolling
    //TODO: Avoid all this repetition
    var msgScene1 = new ScrollMagic.Scene({ triggerElement: "#message1" })
                    .setTween("#message1", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene2 = new ScrollMagic.Scene({ triggerElement: "#message2" })
                    .setTween("#message2", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene3 = new ScrollMagic.Scene({ triggerElement: "#message3" })
                    .setTween("#message3", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene4 = new ScrollMagic.Scene({ triggerElement: "#message4" })
                    .setTween("#message4", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene5 = new ScrollMagic.Scene({ triggerElement: "#message5" })
                    .setTween("#message5", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene6 = new ScrollMagic.Scene({ triggerElement: "#message6" })
                    .setTween("#message6", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene7 = new ScrollMagic.Scene({ triggerElement: "#message7" })
                    .setTween("#message7", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene8 = new ScrollMagic.Scene({ triggerElement: "#message8" })
                    .setTween("#message8", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene9 = new ScrollMagic.Scene({ triggerElement: "#message9" })
                    .setTween("#message9", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    var msgScene10 = new ScrollMagic.Scene({ triggerElement: "#message10" })
                    .setTween("#message10", 0.5, { "left": "50%", "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);

    //Make the kitty go from left to right
    var kittyScene = new ScrollMagic.Scene({ triggerElement: "#cat" })
                    .setTween("#cat", 4.0, { "right": -500, "visibility": "visible" })
                    .triggerHook(0.5)
                    .addTo(controller);
});
