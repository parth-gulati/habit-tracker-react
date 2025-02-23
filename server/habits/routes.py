from flask import Flask
from flask_jwt_extended import jwt_required
from app import app
from habits.models import Habit

@app.route('/habit/create', methods=['POST'])
def create():
    return Habit().create_habit()

@app.route('/habit/get-all', methods=['GET'])
def get_all():
    return Habit().get_user_habits()

@app.route('/habit/delete', methods=['POST'])
def delete_one():
    return Habit().delete_habit()