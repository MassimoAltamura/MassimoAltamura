function somma(...args) {
    // Usa reduce per calcolare la somma degli argomenti
    return args.reduce((total, current) => total + current, 0);
}

// Esempio di utilizzo della funzione somma
const result = somma(1, 2, 3, 4, 5);
console.log(result); // Output: 15
