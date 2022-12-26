let values = [];
// to add values in array there is method 'push'

values.push(50);
values.push(60);
values.push(70);
values.push(50);
values.push(20);
values.push(10);
console.log(values);

// to get values by their index
console.log(values[0]);
console.log(values[3]);
console.log(values[1]);
console.log(values[2]);

// to delete the last element 'POP'
console.log(values.pop);
console.log(values.pop);
console.log(values);

// 'Shift' this method is delete the element from first

console.log(values.shift);
console.log(values);

// 'Unshift'  this method will add element at first index
values.unshift(20);
console.log(values);

// to delete element from particular index 'splice
values.splice(2,1); //<-- here we have to pass index number and from that index how many numbers we want tyo delete
// if we are pasing only index number then all the elements with that index will be get deleted
console.log(values);

