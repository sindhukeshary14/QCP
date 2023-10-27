from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)

# CORS(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow all origins for development


# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')  # Replace with your MongoDB connection string
db = client['Quiz']  # Replace with your database name
users_collection = db['User']  # Replace with your collection name

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response

@app.route('/api/register', methods=['POST'])
def register():
    user_data = request.get_json()
    if not user_data:
        return jsonify({"error": "Invalid request data"}), 400

    name = user_data.get('name')
    email = user_data.get('email')
    username = user_data.get('username')
    password = user_data.get('password')
    role = user_data.get('role')

    if not name or not email or not username or not password:
        return jsonify({"error": "All fields are required"}), 400

    if users_collection.find_one({'email': email}):
        return jsonify({"error": "Email is already registered"}), 400

    new_user = {
        'name': name,
        'email': email,
        'username': username,
        'password': password,
        'role': role
    }

    users_collection.insert_one(new_user)

    return jsonify({"message": "User registered successfully"}), 201

@app.route('/api/login', methods=['POST'])
def login():
    login_data = request.get_json()
    print(login_data)
 
    if not login_data:
        return jsonify({"error": "Invalid request data"}), 400

    # username = login_data.get('username')
    # password = login_data.get('password')

    username = login_data['username']
    password = login_data['password']
   
   
    # Check the username and password against MongoDB data
    user_data = users_collection.find_one({'username': username, 'password': password})
    
    if user_data:
        # Login is successful, you can return user data
        return jsonify({"message": "Login successful"})

    # If login fails, return an error response
    return jsonify({"error": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
