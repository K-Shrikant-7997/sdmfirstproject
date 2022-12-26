let emp = {Name:'Shrikant', employeeid:'2412234', laptop:{brand:'Lenovo' , RAM:'12gb'}};
for(let key in emp)
{
    //console.log(key);
    console.log(key, emp[key]);
}
for(let key in emp.laptop)
{
    console.log(key, emp.laptop[key]);
}