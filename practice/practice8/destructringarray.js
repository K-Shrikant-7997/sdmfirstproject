let arr =[];
for(let i =1; i<=10; i++)
{
    arr.push(i);
}
console.log(arr);

let words ="my name is shrikant".split(' ')
console.log(words);
let [a, ...b ] = words; //<-- these three dots means rest of the elements eual to 'b'
console.log(a);
console.log(b);
//lets add filter and print it
//here we are applying filter such that it will return even number onlyu  and then by forEach loop we will print it
arr.filter(n => n%2===0).forEach(n=>{
    console.log(n);
})