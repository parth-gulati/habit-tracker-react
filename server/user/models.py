import uuid
from flask import Flask, jsonify, request, session
from passlib.hash import pbkdf2_sha256
from app import db
from datetime import datetime

class User:

    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(user), 200

    def sign_out(self):
        session.clear()
        return jsonify({"success": "logged out"}), 200

    def signup(self):
        user = {
            "_id": uuid.uuid4().hex,
            "first_name": request.json.get('first_name'),
            "last_name": request.json.get('last_name'),
            "email": request.json.get("email"),
            "password": request.json.get("password"),
            "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }

        user['password'] = pbkdf2_sha256.encrypt(user['password'])
        
        if db.users.find_one({"email": user['email']}):
            return jsonify({"error": "Email already in use"}), 400

        if db.users.insert_one(user):
            return self.start_session(user)
        
        return jsonify({"error": "Signup failed"}), 400
    
    def login(self):
        user = db.users.find_one({
            "email": request.json.get("email"),

        })

        print(request.json.get("email"))

        if user and pbkdf2_sha256.verify(request.json.get('password'), user['password']):
            return self.start_session(user)
        
        return jsonify({"error": "Password or email is invalid"}), 401