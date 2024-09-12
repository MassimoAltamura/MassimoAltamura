function mostraPromemoria() {
    console.log("Promemoria: È ora di fare una pausa!");
}

// Stampa il messaggio iniziale
console.log("Il promemoria è in fase di impostazione");

// Imposta setTimeout per chiamare mostraPromemoria dopo un ritardo di 5000 millisecondi (5 secondi)
setTimeout(mostraPromemoria, 5000);
