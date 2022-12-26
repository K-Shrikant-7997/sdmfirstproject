function Laptop(Name , cpu , ram)
{
    this.Name = Name;
    this.cpu = cpu;
    this.ram = ram;
}

let laptop1 = new Laptop('Lenovo', 'i9','12GB');
let laptop2 = new Laptop('Apple', 'M1','8GB');
let laptop3 = new Laptop('Asus', 'i7','4GB');
let laptop4 = new Laptop('Dell', 'i9','8GB');

console.log(laptop1);
console.log("-----------<><<<<<<<<<>>>>>>>><>-----------");
console.log(laptop2);
console.log("-----------<><<<<<<<<<>>>>>>>><>-----------");
console.log(laptop3);
console.log("-----------<><<<<<<<<<>>>>>>>><>-----------");
console.log(laptop4);
console.log("-----------<><<<<<<<<<>>>>>>>><>-----------");