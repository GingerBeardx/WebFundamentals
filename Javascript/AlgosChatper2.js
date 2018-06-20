/* Assume that you have a text field that is exactly 75 characters long. You want to fill it with
spaces and asterisks ('*'), sometimes called stars. You should print the given number of
asterisks consecutively. Depending on which function is called, those stars should be leftjustified
(first star would be very first char in the text field), or right-justified (last star would
be very last char in the text field, with potentially some number of spaces at beginning of
text field before the block of stars start), or centered in the 75-character text field (with
same number of spaces on either side of the block of stars, plus/minus one). */

function drawLeftStars(num) {
    // print num number of stars
    // while stars < num, print stars
    // once stars = num
    // print the remainder of 75 - num as spaces
    var string = "";
    for (var i = 1; i <= 75; i++) {
        if (i <= num) {
            string += "*";
        } else {
            string += " ";
        }
    }
    return string;
}
console.log(drawLeftStars(25));

function drawRightStars(num) {
    // declare a string value that will be printed
    var string = "";
    // need to print 75 - num dashes
    // do a for loop, while i > 75 - num
    for (var i = 75; i >= 1; i--) {
        // print the dashes until i == 75-num
        if (i > 75 - (75 - num)) {
            // print the stars until i == 75
            string += " ";
        } else {
            string += "*";
        }
    }
    return string;
}
console.log(drawRightStars(25));

function drawCenterStars(num) {
    var string = "";
    // for loop up to 75 characters
    // determine the range to print *
    // if i is within the star range, print stars
    // otherwise print spaces.

    //test case if stars = 10
    // first 75 - 10 = 65
    // 65 / 2 = 32
    // prtnt 32 spaces => 10 stars => 33 spaces = 75 character string

    for (var i = 0; i < 75; i++) {
        if (i > (75 - num) / 2 && i < ((75 - num) / 2) + num) {
            string += "*";
        } else {
            string += " ";
        }
    }
    console.log(string.length);
    return string;
}
console.log(drawCenterStars(25));