function a(){ // 35
    return 35;
}
console.log(a())

function a(){ // 8
    return 4;
}
console.log(a()+a()); 

function a(b){ // 6
    return b;
}
console.log(a(2)+a(4)); 

function a(b){ // 3, 9
    console.log(b);
    return b*3;
}
console.log(a(3)); 

function a(b){ // 40
    return b*4;
    console.log(b);
}
console.log(a(10)); 

function a(b){ // 4
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15)); 

function a(b,c){ // 10, 3, 30
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

function a(b){ // 3, 4
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

function a(){ // 2, 5, 8, 11
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

function a(b,c){ // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

function a(){ // This function will not run as there is no call.
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

function a(){ // This function will also not run as there is no call. There was also a missing closing curly brace for the i for loop.
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
    }
    console.log(j,i);
}

z = 10; // 10
function a(){
    z = 15;
    console.log(z);
}
console.log(z);

z = 10;
function a(){ // 15, 15
        z = 15;
        console.log(z);
}
a();
console.log(z);

z = 10; // 15, 15
function a(){
    z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

