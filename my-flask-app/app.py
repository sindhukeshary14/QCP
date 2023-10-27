from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)

# CORS(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow all origins for development


# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')  # Replace with your MongoDB connection string
db = client['Quiz']  # Replace with your database name
users_collection = db['User'] 
tests_collection = db['Tests']
questions_collection = db['AdminQuestion']

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
 
 
    if not login_data:
        return jsonify({"error": "Invalid request data"}), 400

    # username = login_data.get('username')
    # password = login_data.get('password')

    username = login_data['username']
    password = login_data['password']
    role=login_data['role']
   
    # Check the username and password against MongoDB data
    user_data = users_collection.find_one({'username': username, 'password': password,'role':role})
    
    if user_data:
        # Login is successful, you can return user data
        return jsonify({"message": "Login successful"})

    # If login fails, return an error response
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/api/tests', methods=['GET'])
def get_test(testId):
    # Fetch test data by testId from the database
    test_data = tests_collection.find_one({'id': testId})
    if test_data:
        return jsonify(test_data)
    return jsonify({"error": "Test not found"}), 404

@app.route('/api/questions', methods=['POST'])
def add_question():
    question_data = request.get_json()
    if not question_data:
        return jsonify({"error": "Invalid request data"}), 400

    # Insert the question into the MongoDB collection
    questions_collection.insert_one(question_data)

    return jsonify({"message": "Question added successfully"}), 201

@app.route('/api/quizzes', methods=['GET'])
def get_quizzes():
    # Retrieve the list of quizzes from the MongoDB collection
    quizzes = list(questions_collection.find({}, {'_id': 0}))
    return jsonify(quizzes), 200

# @app.route('/api/admin-profile', methods=['GET'])
# def get_admin_profile():
#     admin_data = request.get_json()
#     print(admin_data)
 
#     if not admin_data:
#         return jsonify({"error": "Invalid request data"}), 400

#     # username = login_data.get('username')
#     # password = login_data.get('password')

#     username = admin_data['username']
#     # role=admin_data['role']
    
    
#     admin_data = users_collection.find_one({'username': username, 'role': 'admin'})
#     if admin_data:
#         # Return the admin data as JSON
#         return jsonify(admin_data)
#     else:
#         return jsonify({"error": "Admin not found"}), 404

@app.route('/api/admin-profile', methods=['GET'])
def get_admin_profile():
    username = request.args.get('username')
    role = request.args.get('role')
 
    if not username or not role:
        return jsonify({"error": "Username and role are required"}), 400

    admin_data = users_collection.find_one({'username': username, 'role': role})
    if admin_data:
        response_data = {
            'name': admin_data['name'],
            'email': admin_data['email'],
            'username': admin_data['username']
        }
        
        return jsonify(response_data)
        
    else:
        return jsonify({"error": "Admin not found"}), 404



if __name__ == '__main__':
    app.run(debug=True)
