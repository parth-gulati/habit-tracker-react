from flask import Flask
from flask_cors import CORS, cross_origin
import pymongo
import urllib.parse
from dotenv import load_dotenv
import os
import base64

load_dotenv()

USERNAME = os.getenv('USERNAME')
PASSWORD = os.getenv('PASSWORD')
encoded_secret = os.getenv("SECRET_KEY_BASE64")
SECRET_KEY = base64.b64decode(encoded_secret)

username = urllib.parse.quote_plus(USERNAME)
password = urllib.parse.quote_plus(PASSWORD)

# Correctly formatted URI
uri = f"mongodb+srv://{username}:{password}@cluster0.ezkac.mongodb.net/parthgulati?retryWrites=true&w=majority"
# Database
client = pymongo.MongoClient(uri)
db = client.habittracker

app = Flask(__name__)
app.secret_key = SECRET_KEY
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Routes
from user import routes
