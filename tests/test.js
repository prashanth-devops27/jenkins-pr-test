const { greet, add, multiply } = require('../src/index');

let passed = 0;
let failed = 0;

function test(name, condition) {
    if (condition) {
        console.log(`PASS: ${name}`);
        passed++;
    } else {
        console.log(`FAIL: ${name}`);
        failed++;
    }
}

test('greet works', greet('John').includes('John'));
test('add works', add(2,3) === 5);
test('multiply works', multiply(4,5) === 20);

process.exit(failed > 0 ? 1 : 0);
