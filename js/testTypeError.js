let testTypeError = (humain: {name: string}) => console.log(humain.name.toUpperCase());

let h1 = {
    name: 'fooBar1'
};

let h2 = {
    name: 'foobar2'
};

testTypeError(h1);
console.log('h1: executed');
testTypeError(h2);
console.log('h2: executed');