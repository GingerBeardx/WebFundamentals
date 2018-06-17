var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log("John - " + users[1].age);
console.log(users[0].name);


// create a loop that starts at index 0
for (i = 0; i < users.length; i++) {
    // print each index's name and age in a concatenated string
    console.log(users[i].name + " - " + users[i].age);
    // increment by 1
}