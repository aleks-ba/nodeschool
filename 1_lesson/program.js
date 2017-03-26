const argumentsList = process.argv.slice(2);
const sumOfArguments = argumentsList.reduce((accumulator, argument) => {
    return accumulator + Number(argument)
}, 0);

console.log(sumOfArguments);