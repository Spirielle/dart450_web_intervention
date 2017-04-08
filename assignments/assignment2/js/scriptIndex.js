//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var NUMBER_OF_LEVELS = 5;

$(document).ready(function () {
    initializeLevelDivs();
    getLocation();
});

//From https://www.w3schools.com/html/html5_geolocation.asp
function getLocation() {
    //Making sure the "asked for location" popup doesn't always show
    var cookie = Cookies.get('positionRequest');
    if (cookie === null ||cookie === undefined) {  // if expired / non-existent
        //Get the position
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(storePosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    } 
}
function storePosition(position) {
    //Take and store the position 
    localStorage.setItem("longitude", position.coords.longitude);
    localStorage.setItem("latitude", position.coords.latitude);

    //Cookie expires after an hour which mean the position will only be asked once per hour
    var now = new Date();
    var expiringDate = now.setHours(now.getHours() + 1);
    Cookies.set("positionRequest", "1", { expires: expiringDate });
}

function initializeLevelDivs()
{
    //Assumptions are:
    //Every level file follow the naming pattern : level1.html, level2.html ...
    //Clickable divs ids follow the naming convention : div-level1, div-level2 ...
    //Star shaped spans ids follow the naming convention : star-level1, star-level2 ...
    //Completion information is stored in the following the convention : level1Completion, level2Completion ...
    //  * Assumptions are generally harmful, but for the scope of this project they do the trick
    for (var i = 1; i <= NUMBER_OF_LEVELS; ++i) {
        //Getting level completion
        var levelCompleted = localStorage.getItem("level" + i + "Completion") == "true";
        $("#star-level" + i).addClass(levelCompleted ? "fa-star" : "fa-star-o");

        //To prevent the click function to capture i
        //Otherwise it would use the last value of i; the one after the for loop completion
        //Closure within closure =__________=
        (function (n) {
            //Setting Onclick Events
            $("#div-level" + n).click(function () {
                location.href = "level" + n + ".html";
            })
        })(i);
    }
}
//TODO: maybe an unf*ck closure funtion because why not