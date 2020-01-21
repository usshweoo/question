// Question 3
//swap two int 
var a = 1;
var b = 2;
const swap = (a,b) => {
    [a,b] = [b,a];
    console.log('a ',a);
    console.log('b ',b);
}

swap(a,b);