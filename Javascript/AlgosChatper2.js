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
/* console.log(drawLeftStars(25)); */

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
/* console.log(drawRightStars(25)); */

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
/* console.log(drawCenterStars(25)); */

// Threes and Fives - Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
function threesAndFives() {
    // loop that starts at 100 and goes to 4000000
    // if i is divisible by 3 AND 5 do not add
    // if i is divisible by 3 add to sum
    // if i is divisible by 5 add to sum

    var sum = 0;
    // test case 1 to 30
    for(i = 100; i < 4000000; i++) {
        if(i % 5 == 0 && i % 3 == 0) {
            continue;
        } else if (i % 5 == 0 || i % 3 == 0) {
            sum += i;
        }
    }
    return sum;
}
/* console.log(threesAndFives()); */

// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
function generateCoinChange(cents) {
    // evaluate if the cents / 25 has a remainder
    // if there is a remainder increment quarter count by 1 and reduce cents by 25
    // if the remainder is less than 25, evaluate if cents / 10 has a remainder
    // if there is a remainder, increment dimes count by 1 and reduce cents by 10
    //if the remainder is less than 10, evaluate if cents / 5 has a remainder
    // if there is a remainder, increment nickles count by 1 and reduce cents by 5
    // any remaining cenets should be pennies, so pennies = remainder.

    var quarters = 0,
        dimes = 0,
        nickles = 0,
        pennies = 0;

    while (cents > 0) {
        if (cents > 25) {
            quarters++;
            cents -= 25;
        } else if (cents > 10) {
            dimes++;
            cents -= 10;
        } else if (cents > 5) {
            nickles++;
            cents -= 5;
        } else {
            pennies = cents;
            cents -= cents;
        }
    }
    console.log("Pennies: " + pennies + " Nickles: " + nickles + " Dimes: " + dimes + " Quarters: " + quarters);
}
/* generateCoinChange(4852); */


