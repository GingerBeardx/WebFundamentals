// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > Y) {
            count++
        }
    }
    console.log(count);
}

greaterThanY([5,4,8,2,1,20],6);

// Given an array, print the max, min and average values for that array.

function minMaxAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];

    for(i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } else if(arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    console.log(min, max, avg);
}
minMaxAvg([3,1,-5,6,8,10,5,6]);

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push("Dojo");
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
x = replaceNegatives([1,2,-3,-5,5]);
console.log(x);

// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr,x,y) {
    var i = 0; 
    b = y - x + 1;
    while (i < b) {
        arr.splice(x, 1);
        i++;
    }
    return arr;
}
z = removeVals([20,30,40,50,60,70],2,4);
console.log(z);
