async function controllaCredenziali() {
    // 1. Prendiamo quello che l'utente ha scritto
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        return alert("Scrivi un username e una password")
    }

    // 2. Chiamiamo il server passando lo username e password nell'URL (?username=...)
    const res = await fetch(`/login?username=${username}&password=${password}`);
    const dati = await res.json();

    // 3. Mostriamo la risposta del server nella pagina
    document.getElementById('risultato').innerText = dati.messaggio;
}

// Colleghiamo i bottoni alle funzioni
document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);