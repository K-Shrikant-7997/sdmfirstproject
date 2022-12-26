

function print(n)
{
    if(n==0)
    {
        return;
    }
    print(n-1);
    console.log(n);
}

print(5);


function factorial(n)
{
    if(n<2)
    {
        return n;
    }
    return n * factorial(n-1);
}
console.log(factorial(5));