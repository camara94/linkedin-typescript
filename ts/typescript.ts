let foo: string = 'Foo';
let bar: string = 'Bar';
let foobar: string = foo + bar;
let log( arg: string ): void => console.log('test log: ' + arg);
log(foobar)