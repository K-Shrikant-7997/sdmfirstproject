function changecolor()
{
    let h1ref = document.querySelector('p');
    let optref = document.querySelector('option');
    h1ref.style.color = `${optref.value}`;
}