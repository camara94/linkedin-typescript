var foo = 'Foo';
var bar = 'Bar';
var foobar = foo + bar;
var log;
(function (arg) { return console.log('test log: ' + arg); });
log(foobar);
