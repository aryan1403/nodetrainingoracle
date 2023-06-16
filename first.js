let a = 10;
let b = 80;

function work() {
    // body
    console.log('working');
}

// parametric functions
function add(a, b) {
    console.log('Sum of', a, 'and', b, 'is :', (a+ b));
}

function check(a, b) {
    if(a > b) {
        console.log(a, 'is greater than', b);
    } else {
        console.log(a, 'is smaller than', b);
    }
}

function work1() {
    for (let i = 0; i < 10; i++) { // 0 1 2 3 4 5 6 7 8 9
        console.log(i+1, 'hello work');
    }
}

// print line is here.....

/* console.log('hi i am aaryan');
console.log(a * b);
console.log('heya'); */

work();
add(10, 20);
check(2, 4);
work1();