function counter()
{
    let h1erf = document.querySelector("span");
    let currvalue =h1erf.innerHTML;
    let currcount = parseInt(currvalue);
    currcount++;
    h1erf.innerHTML=currcount;
}

function countless()
{
    let h1ref = document.querySelector("span");
    let count = h1ref.innerHTML;
    let currval = parseInt(count);
    currval--;
    h1ref.innerHTML=currval;
}