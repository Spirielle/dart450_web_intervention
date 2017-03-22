/*
    Cynthia L. McLaughlin
    March 2017

    Web Intervention Exercise 09

    Simple exercise in which we fetch a Chuck Norris joke fom http://www.icndb.com/api/
    but we replace "Chuck Norris" with something having the format "adjective" + "animal"
*/


var ApiUrl = "https://api.icndb.com/jokes/random"

var jokeApiData;
var animal;
var adjective;

$(document).ready(function () {
    //$.getJSON(ApiUrl, jokeCallback);
    //$.getJSON('data/animals.json', );
    $.getJSON('data/adjectives.json', adjectivesCallback);
});

function adjectivesCallback(adjectivesData) {
    // Select random adjective
    adjective = getRandomElement(adjectivesData.adjectives);
    console.log(adjective);

    //Chaining JSON calls to make sure they are are loaded...
    $.getJSON('data/animals.json', animalsCallback);
}

function animalsCallback(animalsData) {
    // Select random adjective
    animal = getRandomElement(animalsData);
    console.log(animal);

    //Get the right (or most likely) article for the adjective
    //ie. "a" or "an"
    var article = getArticle(adjective);

    var parameters = "?firstName=" + article + " " + adjective + "&lastName=" + animal;

    //Chaining JSON calls to make sure they are are loaded...
    $.getJSON(ApiUrl + parameters, jokeCallback);

    console.log(ApiUrl + parameters);
}


function jokeCallback(jokeData) {
    // Get the joke, got it? hehe
    joke = capitalizeFirstLetter(jokeData.value.joke);
    console.log(joke);

    document.getElementById("content").innerHTML = joke;

}

//From http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

////////////////////////////    ||
// Stolen from Pippin Bar //   \  /
////////////////////////////    \/

// getArticle (string)
//
// Returns 'a' if the string starts with a consonant and
// return 'an' if the string starts with a vowel
function getArticle(string) {
    var article;
    // Get the first letter of the string in lower case
    var firstLetter = string.charAt(0).toLowerCase();
    // Check if the letter appears in the string 'aeiou'
    // We use indexOf, which returns the location in a string
    // of the argument string or -1 if it's not found.
    // Note how, weirdly, we can all indexOf on a literal string!
    if ("aeiou".indexOf(firstLetter) != -1) {
        // if it does, we have a vowel...
        article = "an"
    }
    else {
        // if not we have a consonant
        article = "a"
    }
    // Return the article
    return article;
}

// getRandomElement ()
//
// Our old friend
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
