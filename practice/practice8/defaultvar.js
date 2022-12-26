

function sum(num1 , num2)
{
    return num1 + num2;
}

console.log(sum(5));  //<-- in this case output will be NaN beacuse we are not passing value to num2 

// now we will learn to set default values

function add(num1=0, num2=0)
{
    return num1 + num2;
}
console.log(add());  //<-- in this case we will get output as 0 because we have set default values of num1 and num2 as 0
console.log(add(4)); // <-- output = 4 
console.log(add(45,55)); //<--- output = 100