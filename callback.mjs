
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';


const filePath = 'messaggio.txt';
const content = 'Ciao, questo è un file di testo scritto con fs.writeFile() in Node.js.';


const data = Buffer.from(content);


writeFile(filePath, data, (err) => {
  if (err) {
   
    console.error('Si è verificato un errore durante la scrittura del file:', err);
  } else {
 
    console.log('Il file "messaggio.txt" è stato scritto con successo.');
  }
});
