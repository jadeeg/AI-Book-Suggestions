from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os


from auth import auth_bp
from search import search_bp

load_dotenv()

app= Flask(__name__)
CORS(app)
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY","process.env.JWT_SECRET_KEY")
jwt = JWTManager(app)

app.register_blueprint(auth_bp,  url_prefix="/api/auth")
app.register_blueprint(search_bp, url_prefix="/api")

@app.route("/")

def hello():
    return {"message": "Backend is running!"}
if __name__ == "__main__":
    app.run(debug=True)
    
