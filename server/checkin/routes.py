from flask import Flask
from flask_jwt_extended import jwt_required
from app import app
from checkin.models import CheckIn

@app.route('/habit/checkin', methods=['POST'])
def check_in():
    return CheckIn().check_in()
