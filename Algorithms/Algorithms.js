// chapter 2

// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just reate one that is easy to understand and debug.
function isPrime(num){
    // accept a number into an indexed loop that will count from num to 0
    // no need to divide the number by itself
    
    for (var i = num - 1; i > 1; i--) {
        console.log(i + " " + num % i);
        // if the number is divisible by any number other than itself and 1 stop the loop and return false
        if (num % i == 0) {
            return false;
        }
    }
    // if the index reaches 1, then the number is prime.
    return true;
}
/* console.log(isPrime(1062)); */

// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.
function sweatshirtPricing(num) {
    // one (num -1) = index sweater costs $20
    // two (num -1) = indexseaters costs $20 * (1 - .09) * 2
    // three (num -1) = indexseaters cost $20 * (1 - .19) * 3
    // four+ (3) = indexsewaters cost $20 * (1 - .35) * num
    
    var cost = 20;
    var discount = [0, .09, .19, .35];

    if (num >= 4) {
        return Math.ceil(cost * (1 - discount[3]) * num);
    } else {
        return Math.ceil(cost * (1 - discount[num - 1]) * num);
    }
}
/* console.log(sweatshirtPricing(3)); */

// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, val) {
    // start a loop at the end of the arry
    // decrement the array until the value of arr[0] has been moved into arr[1];
    for (var i = arr.length; i > 0; i--) {
        // insert value of arr.length - 1 in position arr[arr.legnth]
        arr[i] = arr[i - 1];
    }
    // insert val into arr[0]
    arr[0] = val;
    return arr;
}
/* console.log(pushFront([1,3,5],7)); */

// Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, ind, val) {
    // start a loop at the end of the array
    //decrement the array untili = ind
    // insert val
    //contiue through the array
    for (var i = arr.length; i >= 0; i--) {
        if (i  === ind) {
            arr[i] = val;
            i -= 2;
        } else {
            arr[i] = arr[i - 1];
        }
    }
    return arr;
}
console.log(insertAt([1,3,5],2,13));