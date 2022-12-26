//  COMPLEX OBJECT :- object inside object is complex object
// eg:-


let emp = {Name:'Shrikant', employeeid:'2412234', laptop:{brand:'Lenovo' , RAM:'12gb'}}
console.log(emp);
console.log(typeof(emp));

// accesing elemenst in complex objects is similar to that of normal objects
console.log(emp.Name);
console.log(emp.employeeid);
console.log(emp.laptop);
console.log(emp.laptop.RAM);
console.log(emp.laptop.brand);

// we can delete elements also

delete emp.laptop.RAM;
console.log(emp);  
/* output after deleting:-
{
  Name: 'Shrikant',
  employeeid: '2412234',
  laptop: { brand: 'Lenovo' }
}  */