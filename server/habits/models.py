import uuid
from flask import jsonify, request
from datetime import datetime
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity

class Habit:
    @jwt_required()
    def create_habit(self):
        try:
            current_user = get_jwt_identity()
            if not current_user:
                return jsonify({"status": "error", "message": "Invalid JWT token"}), 401

            habit = {
                "_id": uuid.uuid4().hex,
                "user_email": current_user,
                "title": request.json.get("title"),
                "description": request.json.get("description"),
                "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }

            if not habit['title'] or not habit['description']:
                return jsonify({"status": "error", "message": "Description or title cannot be empty"}), 500
            
            if db.habits.find_one({"title": habit['title']}):
                return jsonify({"status": "error", "message": "Habit already exists"}), 500

            if db.habits.insert_one(habit):
                return jsonify({"status": "success", "message": "Habit created successfully", "data": habit}), 201

            return jsonify({"status": "error", "message": "Habit creation failed"}), 400
        except Exception as e:
            return jsonify({"status": "error", "message": "An error occurred", "error": str(e)}), 500

    @jwt_required()
    def get_user_habits(self):
        try:
            current_user = get_jwt_identity()
            if not current_user:
                return jsonify({"status": "error", "message": "Invalid JWT token"}), 401

            habits = list(db.habits.find({"user_email": current_user}))
            return jsonify({"status": "success", "data": {"habits": habits}}), 200
        except Exception as e:
            return jsonify({"status": "error", "message": "An error occurred", "error": str(e)}), 500

    @jwt_required()
    def delete_habit(self):
        try:
            current_user = get_jwt_identity()
            if not current_user:
                return jsonify({"status": "error", "message": "Invalid JWT token"}), 401
            if db.habits.find_one_and_delete({
                "title": request.json.get("title")
            }):
                return jsonify({"status": "success", "message": "Deleted habit successfully"}), 200
        except:
            return jsonify({"status": "error", "message": "Unable to delete, invalid title"}), 500
        return jsonify({"status": "error", "message": "Unable to delete, invalid title"}), 500