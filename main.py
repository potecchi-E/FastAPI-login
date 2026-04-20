from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse('static/index.html')


@app.get("/login")
def controlla(username: str, password: str):

    if username == 'admin' and password == 'xxx123':
        return {"messaggio": 1}
            
    else: 
        return { "messaggio": 0}
       
