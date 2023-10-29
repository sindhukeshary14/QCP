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
questions_collection = db['AdminQuestion']

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response


# Register API
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




# Login API
@app.route('/api/login', methods=['POST'])
def login():
    login_data = request.get_json()
 
 
    if not login_data:
        return jsonify({"error": "Invalid request data"}), 400


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


# Add_test API
@app.route('/api/add_test', methods=['POST'])
def add_test():
    test_data = request.get_json()
    if not test_data or not isinstance(test_data, dict):
        return jsonify({"error": "Invalid request data or data format"}), 400

    username = test_data.get("username")
    test_name = test_data.get("test_name")
    questions = test_data.get("questions")
    print(username,"username")
    print(test_name,"test_name")
    print(questions, "questions")
    if not username or not test_name or not questions:
        return jsonify({"error": "Invalid test data format"}), 400

    # Search for the user in the collection
    user = questions_collection.find_one({"username": username})
    if user:
        # User exists, update the tests
        tests = user.get("tests", {})
        print(tests)
        tests[test_name] = questions
        questions_collection.update_one({"username": username}, {"$set": {"tests": tests}})
    else:
        # User doesn't exist, create a new user document
        print("else")
        user_document = {
            "username": username,
            "tests": {
                test_name: questions
            }
        }
        print(user_document)
        questions_collection.insert_one(user_document)

    return jsonify({"message": f"Test added for user: {username}"}), 201




# View Quiz API
@app.route('/api/quizzes', methods=['GET'])
def get_quizzes():
    # Retrieve the list of quizzes from the MongoDB collection
    quizzes = list(questions_collection.find({}, {'_id': 0}))
    return jsonify(quizzes), 200




#Fetch questions API
@app.route('/api/tests/<username>/<test_name>', methods=['GET'])
def get_test_questions(username, test_name):
    user = questions_collection.find_one({"username": username})

    if not user:
        return jsonify({"error": "User not found"}), 404

    tests = user.get("tests", {})
    selected_test = tests.get(test_name)

    if not selected_test:
        return jsonify({"error": f"Test '{test_name}' not found for user '{username}'"}), 404

    return jsonify({"username": username, "test_name": test_name, "questions": selected_test}), 200




# Add Admin Profile API
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
    



# Add User Profile API
@app.route('/api/user-profile', methods=['GET'])
def get_user_profile():
    username = request.args.get('username')
    role = request.args.get('role')
 
    if not username or not role:
        return jsonify({"error": "Username and role are required"}), 400

    user_data = users_collection.find_one({'username': username, 'role': role})
    if user_data:
        response_data = {
            'name': user_data['name'],
            'email': user_data['email'],
            'username': user_data['username']
        }
        
        return jsonify(response_data)
        
    else:
        return jsonify({"error": "Admin not found"}), 404



if __name__ == '__main__':
    app.run(debug=True)
