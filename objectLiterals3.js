var foo = {
    bar: 123,
    bas: {
        bas1: 'some string',
        bas2: 345
    }
};
console.log(foo);
document.getElementById('txt').value = foo.bas.bas1;
