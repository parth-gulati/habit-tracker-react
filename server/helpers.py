from functools import wraps
from flask import request, jsonify
import jwt
from app import app
from user.models import User

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers('x-access-token')

        if not token:
            return jsonify({'status': 'error', 'message': 'Token is missing'}), 401
        
        try: 
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query\
                .filter_by(public_id = data['public_id'])\
                .first()
        except:
            return jsonify({
                'message' : 'Token is invalid !!'
            }), 401
        
        return  f(current_user, *args, **kwargs)
  
    return decorated