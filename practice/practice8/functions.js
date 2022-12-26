function greet()     // <------ function defination
{
    console.log('Hello world');
}
greet();             //  <--------- function calling


function sum(s1 , s2)
{
    return s1+s2;
}
let result =  sum(10, 20);
console.log(result);


function main()
{
    console.log(" calling main1 function");
    main1();
    console.log("main completed");
}

function main1()
{
    console.log("main function called me, i'll call main 2");
    main2();
    console.log("main1 completed");
}
function main2()
{
    console.log("i am main2.....");
}
main();


function greet1(user)
{
    return `hello ${ user}!!!`
}

console.log(greet1('shrikant'));