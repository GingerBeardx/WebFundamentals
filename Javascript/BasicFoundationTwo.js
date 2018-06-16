// Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function big(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(big([-1,3,5,-5])); 

// Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr) {
    var max = arr[0];
    var min = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(lowHigh([1,5,2,8]))

// Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.
function printReturn(arr) {
    var odd = 0;

    console.log(arr[arr.length - 2]);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd = arr[i];
            return odd;
        } 
    }
    return "There are no odd values";
}
console.log(printReturn([2,4,3,8,10]));

//  Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.
function doubleUp(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(doubleUp([1,2,3]));

// Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function positives(arr) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr.pop();
    arr.push(count);
    return arr;
}
console.log(positives([-1,1,1,1]));

// Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"
function evensAndOdds(arr) {
    var evens = 0;
    var odds = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            odds = 0;
            evens++;
            if (evens === 3) {
                console.log("Even more so!");
                evens = 0;
            }
        } else {
            evens = 0;
            odds ++;
            if (odds === 3) {
                console.log("That's odd!")
                odds = 0;
            }
        }
    }
}
evensAndOdds([1,4,5,7,9,2,12,18]);

// Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
function incrementSeconds(arr) {
    for (i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
    }
    return arr;
}
console.log(incrementSeconds([5, 7, 2, 4, 7, 9, 8]));

// You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
function previousLength(arr) {
    var length1 = arr[0].length;
    var length2 = arr[1].length;

    for (var i = 1; i < arr.length; i++) {
        length2=arr[i].length
        arr[i] = length1;
        length1 = length2;        
    }
    return arr;
}
console.log(previousLength(["hello","dojo","awesome"]));

// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function sevens(arr) {
    var newArr = [];

    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] += 7)
    }
    return newArr;
}
console.log(sevens([2,6,9]));

// Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArr(arr) {
    var temp = "";

    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = temp;
    }
    return arr;
}
console.log(reverseArr([1,3,5,7,9]));

// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i] *= -1)
        } else {
            newArr.push(arr[i]);    
        }
    }
    return newArr
}
console.log(outlookNegative([1,-3,-5, 2, 8, -4, -12]));

// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function hungry(arr) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            count++;
        }
    }
    if (count === 0) {
        console.log("I'm Hungry!");
    }
}
hungry([1,3,5,8,"food",2]);

// Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapCenter(arr) {
    var temp = "";

    for (var i = 0; i < arr.length / 2; i += 2) {
        temp = arr[i];
        arr[i] = arr[arr.length - (1 +i)];
        arr[arr.length - (1 + i)] = temp;
    }
    return arr;
}
console.log(swapCenter([true,42,"Ada",2,"pizza"]));

// Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function scale(arr, mult) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= mult;
    }
    return arr;
}
console.log(scale([1,2,3],3));