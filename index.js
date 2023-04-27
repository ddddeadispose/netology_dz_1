#!/usr/bin/env node

const yargs = require('yargs');

const add = (time, { years = 0, months = 0, days = 0 }) => {
    return new Date(time.getFullYear() + years, time.getMonth() + months, time.getDate() + days, time.getHours(), time.getMinutes(), time.getSeconds());
};

const sub = (time, { years = 0, months = 0, days = 0 }) => {
    return new Date(time.getFullYear() - years, time.getMonth() - months, time.getDate() - days, time.getHours(), time.getMinutes(), time.getSeconds());
};

yargs.command({
    command: 'current',
    describe: 'Текущая дата и время',
    builder: {
        year: {
            describe: 'Текущий год',
            alias: 'y',
            type: 'boolean'
        },
        month: {
            describe: 'Текущий месяц',
            alias: 'm',
            type: 'boolean'
        },
        date: {
            describe: 'Текущая дата',
            alias: 'd',
            type: 'boolean'
        }
    },
    handler(argv) {
        const now = new Date();

        if (argv.year) {
            console.log(now.getFullYear());
        } else if (argv.month) {
            console.log(now.getFullYear());
        } else if (argv.date) {
            console.log(now.getDate());
        } else {
            console.log(now);
        }
    }
});

yargs.command({
    command: 'add',
    describe: 'Дата в будущем',
    builder: {
        year: {
            describe: 'Год',
            alias: 'y',
            type: 'number'
        },
        month: {
            describe: 'Месяц',
            alias: 'm',
            type: 'number'
        },
        day: {
            describe: 'День',
            alias: 'd',
            type: 'number'
        }
    },
    handler(argv) {
        const now = new Date();
        const newDate = add(now, {years: argv.year, months: argv.month, days: argv.day});
        console.log(newDate);
    }
});

yargs.command({
    command: 'sub',
    describe: 'Дата в прошлом',
    builder: {
        year: {
            describe: 'Год',
            alias: 'y',
            type: 'number'
        },
        month: {
            describe: 'Месяц',
            alias: 'm',
            type: 'number'
        },
        day: {
            describe: 'День',
            alias: 'd',
            type: 'number'
        }
    },
    handler(argv) {
        const now = new Date();
        const newDate = sub(now, {years: argv.year, months: argv.month, days: argv.day});
        console.log(newDate);
    }
});

yargs.parse();