async function controllaCredenziali() {
    // 1. Prendiamo gli input dell'utente
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        return alert("Scrivi un username e una password")
    }

    // 2. Chiamiamo il server
    const res = await fetch(`/login?username=${username}&password=${password}`);
    const dati = await res.json();

    // 3. Controlliamo il messaggio del server
    if (dati.messaggio === 1) {
        document.getElementById('risultato').innerText = "Accesso efettuato con successo"; // inner text serve a leggere il contenuto dell'elemento in html (es. <p>)

        // rende gli input non modificabili
        document.getElementById('username').disabled = true;
        document.getElementById('password').disabled = true;

        // rimuove il bottone
        document.getElementById('btn_registrati').remove();
    } 
    
    else if (dati.messaggio === 0) { // "===" confronta oltre al valore il tipo della variabile
        document.getElementById('risultato').innerText = "Username o password errati";

        // svuota input
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        document.getElementById('username').focus(); // .focus() rimette il cursore su un elemento, è vuoto quindi lo mette sul primo disponibile
    }
}

// collegamento click del bottone alla funzione 
document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);