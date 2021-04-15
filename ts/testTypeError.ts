let testTypeErrors = (humain):void => console.log(humain.name.toUpperCase());

let h1 = {
    name: 'fooBar1'
};

let h2 = {
    name: 'foobar2'
};

testTypeErrors(h1);
console.log('h1: executed');
testTypeErrors(h2);
console.log('h2: executed');