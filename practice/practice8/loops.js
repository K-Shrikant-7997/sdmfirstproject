//there are three types of loops in javascript;
// while loop, do while loop, for loop

//1:- While loop
// lets print "hii " 5 times

let i = 1;
while (i <= 5) {
  console.log("hii");
  i++;
}

//2:- do while loop
//this loop executes atleast one time even if condition is false
console.log("----------------<><<<<>>>><>----------------");
let j = 5;
do {
  console.log("hii");
} while (j < 3); // here the conditon is false but then also it will print hii beacuse condition is checked after execution
console.log("----------------<><<<<>>>><>----------------");

//3:- for loop
//lets print 1 to 10 numbers

for(let i = 1; i<=10; i++)
{
    console.log(i);
}
