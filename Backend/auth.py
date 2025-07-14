from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from wekzbzeug.security import check_password_hash

auth_bp = Blueprint("auth", __name__)

users = {"user1@email.com": {"password": 11111}}

@auth_bp.route("/login", methods=["POST"])

def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    
    user = users.get(email)
    if not user or not check_password_hash(user["passwprd"], password):
        return jsonify({"message":"Error: Invalid email or password"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


