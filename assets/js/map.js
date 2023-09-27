const map1 = new Map([
[1, 'first'],
[3, 'third']
]);

console.log('map1.size :>>', map1.size);

map1.set(4, 'four');
console.log(map1);

map1.delete(2);
console.log(map1);

console.log(map1.has('two'));


const mapKey = [...map1.keys()];
console.log(mapKey);
console.log([...map1.values()]);


