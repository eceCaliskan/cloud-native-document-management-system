from fastapi import FastAPI

app = FastAPI(title="FastAPI Backend")

@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI!"}

