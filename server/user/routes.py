from flask import Flask
from flask_jwt_extended import jwt_required
from app import app
from user.models import User

@app.route('/user/signup', methods=['POST'])
def signup():
    return User().signup()

@app.route('/user/signout', methods=['POST'])
def signout():
    return User().sign_out()

@app.route('/user/signin', methods=['POST'])
def signin():
    return User().login()

@app.route('/user/getuser', methods=['GET'])
@jwt_required()
def get_user():
    return User().get_user()