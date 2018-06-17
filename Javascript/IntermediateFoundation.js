// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var count = 0;
    var sum = 0;

    while (count <= num) {
        sum += count;
        count++;
    }
    return sum;
}
/* console.log(sigma(5)); */

// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
    var count = 1;
    var sum = 1;

    while (count <= num) {
        sum *= count;
        count ++
    }
    return sum;
}
/* console.log(factorial(5)); */

// Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function fibonacci(num) {
    var fibs = [0, 1];
        
    if (num < 2) {
        return num;
    } else {
        while (fibs.length <= num) {
            fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);            
        }
        return fibs[fibs.length - 1];
    }
}
/* console.log(fibonacci(10)); */

function fibonacci2(num) {
    // if num < 2, return num
    if (num < 2) {
        return num;
    }
    // fibonacci2(num - 2) + fibonacci2(num - 1) 
    return fibonacci2(num - 2) + fibonacci2(num - 1);
}
/* console.log(fibonacci2(10)); */

// Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(arr) {
    // if array < 2 then return null
    if (arr.length < 2) {
        return null;
    } else {
        // return the value in index of array length - 2
        return arr[arr.length - 2];
    }
}
/* console.log(secondToLast([42, true, 4, "Liam", 7])); */

// Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthFromEnd(arr, idx) {
    // if array length is less than index then return null
    if (arr.length < idx) {
        return null;
    } else {
        // else return the value of array - index
        return arr[arr.length - idx];
    }
}
/* console.log(nthFromEnd([5,2,3,6,4,9,7],8)); */

// Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondLargest(arr) {
    // if array length is less than 3, then return null
    if (arr.length < 3) {
        return null;
    } else {
        var max = arr[0];
        second = arr[1];

        // iterate through the array and as you find a new max value, store old max in another variable
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                i = -1;
            } else if (arr[i] < max && arr[i] > second) {
                second = arr[i]
                // reset counter to make sure all values are evaluated
                i = -1;
            }
        }
        return second;
    }
}
/* console.log(secondLargest([42,1,4,3.14,78])); */

// Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr) {
    
    // get the value in array index i
    // increment i by 2
    for (var i = 0; i < arr.length; i += 2) {
        // splice in the same value in index i + 1
        arr.splice(i + 1, 0, arr[i]);
    }
    return arr;
}
console.log(doubleTrouble([4, "Ulysses", 42, false]));
