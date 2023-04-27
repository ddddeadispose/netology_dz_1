const readline = require('readline');

const random = Math.floor(Math.random() * 101)

console.log('Загадано число в диапазоне от 0 до 100')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    if (input < random){
        console.log(`Искомое число больше`);
    }else if (input > random) {
        console.log(`Искомое число меньше`);
    }else {
        console.log(`Вы угадали. Число - ${random}`);
        rl.close();
    }
});