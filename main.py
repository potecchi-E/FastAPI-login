from fastapi import FastAPI, Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import pandas as pd

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

# Caricamento file utenti
df = pd.read_excel("dataset password.xlsx")


@app.get("/")
def home():
    return FileResponse("static/index.html")


@app.post("/login")
def controlla(username: str = Form(...), password: str = Form(...)):
    if username.lower() == "admin" and password == "xxx123##":
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}


@app.post("/loginPandas")
def controlla_password(username: str = Form(...), password: str = Form(...)):
    risultato = df[
        (df["username"] == username) &
        (df["password"] == password)
    ]

    if not risultato.empty:
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}