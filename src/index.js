const APP_NAME = 'Jenkins PR Test App';
const VERSION = '1.0.0';

function greet(name) {
    return `Hello, ${name}! Welcome to ${APP_NAME}`;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function main() {
    console.log(`${APP_NAME} v${VERSION}`);
    console.log(greet('Developer'));
    console.log(`2 + 3 = ${add(2, 3)}`);
    console.log(`4 x 5 = ${multiply(4, 5)}`);
}

module.exports = { greet, add, multiply };

if (require.main === module) {
    main();
}
