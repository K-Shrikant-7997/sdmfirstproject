//map is collection of key value pairs

let map = new Map();

map.set("shrikant" ,'java');
map.set("Bhushan" ,'js');
map.set("shubham" ,'c');
map.set("sanket" ,'C++');

console.log(map.get("sanket"));
map.forEach((v, k) =>{
    console.log(k,":",v);
})
