import uuid
from flask import jsonify, request
from datetime import datetime
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity

CHECK_INS = "check_ins"

class CheckIn:
    @jwt_required()
    def check_in(self):
        try:
            current_user = get_jwt_identity()
            if not current_user:
                return jsonify({"status": "error", "message": "Invalid JWT token"}), 401
            today = datetime.now()
            year = str(today.year)
            month = f"{today.month:02d}"
            day = today.day

            habit_id = request.json.get('habit_id')

            habit = db.habits.find_one({"_id": habit_id})

            if not habit_id:
                return jsonify({"status": "error", "message": "Habit not found"}), 500
            
            if CHECK_INS not in habit:
                habit[CHECK_INS] = {}
            if year not in habit[CHECK_INS]:
                habit[CHECK_INS][year] = {}
            if month not in habit[CHECK_INS][year]:
                habit[CHECK_INS][year][month] = []
            
            if day not in habit[CHECK_INS][year][month]:
                habit[CHECK_INS][year][month].append(day)
            
                db.habits.update_one(
                    {"_id": habit_id},
                    {"$set": {f"check_ins.year.month": habit[CHECK_INS][year][month]}}
                )

                return jsonify({"status": "success", "message": "Check in recorded"}), 200

            else:
                return jsonify({"status": "error", "message": "Check-in already exists for today"}), 500

        except:
            return jsonify({"status": "error", "message": "Check in error"}), 500