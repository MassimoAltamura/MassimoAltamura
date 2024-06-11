import React from 'react';

export function UncontrolledLogin() {
    function handleFormSubmit(event) {
        event.preventDefault();
        const username = event.target.elements.namedItem('username').value;
        const password = event.target.elements.namedItem('password').value;
        const session = event.target.elements.namedItem('session').checked;
        const data = {
            username,
            password,
            session
        };
        console.log(data);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input id="username" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" />
            </div>
            <div>
                <label htmlFor="session"></label>
                <input id="session" name="session" type="checkbox" />
            </div>
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    );
}
//Vantaggi:
//Semplicità: l'utilizzo dell'API FormData semplifica il processo di accesso ai valori del modulo. Fornisce un modo semplice per raccogliere i dati del modulo senza interrogare manualmente i singoli elementi di input.
//Flessibilità: l'API FormData può gestire vari tipi di campi modulo, inclusi input di testo, caselle di controllo, pulsanti di opzione, input di file e altro ancora. Questo lo rende versatile per diversi tipi di forme.
//Coerenza: indipendentemente dalla struttura del modulo o dal numero di campi, l'API FormData fornisce un modo coerente per accedere ai dati del modulo. Ciò semplifica la manutenzione e la comprensione del codice.
//Codifica automatica: l'API FormData gestisce automaticamente la codifica dei dati del modulo, garantendo che i caratteri speciali siano codificati correttamente per l'invio tramite HTTP. Ciò aiuta a prevenire le vulnerabilità di sicurezza più comuni, come gli attacchi XSS (cross-site scripting).
//Svantaggi:
//Supporto limitato dei browser: sebbene la maggior parte dei browser moderni supporti l'API FormData, i browser più vecchi potrebbero avere un supporto limitato o assente. Questo può essere uno svantaggio se è necessario supportare un'ampia gamma di browser, richiedendo l'implementazione di metodi di fallback o polyfill.
//Nessuna convalida integrata: FormData stesso non esegue alcuna convalida lato client dei dati del modulo. Raccoglie semplicemente i valori immessi dall'utente. Ciò significa che dovrai implementare la tua logica di convalida, se necessario, il che potrebbe portare a ulteriore complessità.
//Complessità per moduli di grandi dimensioni: per moduli di grandi dimensioni con molti campi, la gestione dei dati del modulo utilizzando l'API FormData può diventare complicata. Accedere a valori specifici ed eseguire operazioni su di essi può richiedere uno sforzo aggiuntivo, soprattutto se la struttura del modulo è complessa.
//Mancanza di indipendenza dal tipo: FormData tratta tutti i valori dei campi del modulo come stringhe, indipendentemente dal loro tipo effettivo. Ciò può portare a potenziali problemi relativi al tipo se i dati devono essere elaborati o manipolati ulteriormente. Gli sviluppatori devono garantire la corretta conversione del tipo secondo necessità.
//In sintesi, sebbene l'API FormData offra semplicità e flessibilità per l'accesso ai dati dei moduli nelle applicazioni Web, gli sviluppatori dovrebbero essere consapevoli dei suoi limiti, in particolare in termini di supporto del browser, convalida, complessità per moduli di grandi dimensioni e mancanza di sicurezza dei tipi. A seconda dei requisiti specifici dell'applicazione e del pubblico di destinazione, FormData può essere uno strumento comodo ed efficace per la gestione dei dati dei moduli.