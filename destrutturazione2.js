const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
};

// Destrutturazione dell'oggetto nidificato
const { info: { name, age }, grades: { math: mathGrade } } = student;

console.log(name);       // Output: Bob
console.log(age);        // Output: 25
console.log(mathGrade);  // Output: 95
