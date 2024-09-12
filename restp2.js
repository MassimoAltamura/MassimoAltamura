function filterOutOdds(...args) {

    return args.filter(num => num % 2 === 0);
}

const evenNumbers = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(evenNumbers); 
