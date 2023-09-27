/*const number = new Set([1, 2, 3]);



number.has(3);
number.has(4);

number.add(6);
number.add(7);
number.add(8);


for (const item of number) {
    console.log(item);
}

function sum() {

    const arrSumm = [...arguments]; 
    return arrSumm.reduce((accum, item) => accum + item);
  }
  console.log(sum(...number))

  number.delete(1);

  number.clear()*/


/*const numberYnik = ([1, 6, 9, 1, 5, 6]);

const numberYnik1 = [...new Set(numberYnik)]

const numberOne = ([5, 10, 11]);

const oneMassiv = [...new Set([...numberYnik, ...numberOne])];

console.log(oneMassiv);*/


const messages = [
    { id: 1, name1: 'Ivo', message: 'hello', date: new Date() },
    { id: 2, name1: 'Ivo', message: 'how are you', date: new Date() },
    { id: 3, name1: 'Wally', message: 'hi)', date: new Date() },
    { id: 4, name1: 'Wally', message: 'fine)', date: new Date() },
  ];

const names = [...new Set(messages.map(messages => messages.name1))]
console.log(names)

const nameWithMessegesDate = {};

name1.forEach(
    b => (nameWithMessegesDate[b] = messages.filter(u => u.message === b).map(u => u.name1)
))

console.log(nameWithMessegesDate)
