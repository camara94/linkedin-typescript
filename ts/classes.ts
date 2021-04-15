class Foobar {
    foo: string;
    bare: number;
    constructor(){
        foo = 'Foo';
    }
}

let b: Foobar = new Foobar();
console.log(b.foo)