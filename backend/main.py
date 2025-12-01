from fastapi import FastAPI
import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate("carbonandcostawaredms-firebase-adminsdk-fbsvc-ee7a06d7cb.json")
firebase_admin.initialize_app(cred)

app = FastAPI(title="FastAPI Backend")

@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI!"}


@app.get("/user_role")
async def get_user_role(uuid: str, user_role: str):
    auth.set_custom_user_claims(uuid, {"admin": True} if user_role == "admin" else {"admin": False})
    return {"message": f"User role is {user_role} and UUID is {uuid}"}