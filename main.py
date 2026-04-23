from fastapi import FastAPI, Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import pandas as pd

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") # Endpoint: punto in cui andiamo a richiamare il server web
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')

@app.post("/login")
def Controlla(username: str = Form(...), password: str = Form(...)):
    if username.lower() == "admin" and password == "xxx123##":
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}