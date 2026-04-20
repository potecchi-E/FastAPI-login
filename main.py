from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Spieghiamo a FastAPI che i file dentro "static" sono accessibili
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") # End point è il punto dove chiamiamo il nostro server web, lo / è la homepage
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')

@app.get("/login")
def controlla(username:str, password:str):
    print('Username', username, 'password', password)
    if username == 'admin' and password == 'xxx123':
        risposta = {'messaggio' : 1}
    else: 
        risposta = {'messaggio' : 0}
    return risposta