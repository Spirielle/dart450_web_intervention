//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var NUMBER_OF_LEVELS = 3;

$(document).ready(function () {

    //Assumptions are:
    //Every level file follow the naming pattern : level1.html, level2.html ...
    //Clickable divs ids follow the naming convention : div-level1, div-level2 ...
    //Star shaped spans ids follow the naming convention : star-level1, star-level2 ...
    //Completion information is stored in the following the convention : level1Completion, level2Completion ...
    //  * Assumptions are generally harmful, but for the scope of this project they do the trick
    for (var i = 1; i <= NUMBER_OF_LEVELS; ++i)
    {
        //Getting level completion
        var levelCompleted = localStorage.getItem("level" + i + "Completion") == "true";
        $("#star-level" + i).addClass(levelCompleted ? "fa-star" : "fa-star-o");

        //To prevent the click function to capture i
        //Otherwise it would use the last value of i; the one after the for loop completion
        //Closure within closure =__________=
        (function(n){
            //Setting Onclick Events
            $("#div-level" + n).click(function () {
                location.href = "level" + n + ".html";
            })
        })(i);
    }
});

//TODO: maybe an unf*ck closure funtion because why not