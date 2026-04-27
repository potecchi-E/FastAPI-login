async function loggati() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password)
        return alert("Scrivi lo username e password");

    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("bottone").disabled = true;
        document.getElementById("bottonePandas").disabled = true;
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("username").focus();
    }
}

async function loggatiPandas() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password)
        return alert("Scrivi lo username e password");

    const res = await fetch("/loginPandas", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("bottone").disabled = true;
        document.getElementById("bottonePandas").disabled = true;
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("username").focus();
    }
}

document.getElementById('bottone').addEventListener('click', loggati);
document.getElementById('bottonePandas').addEventListener('click', loggatiPandas);