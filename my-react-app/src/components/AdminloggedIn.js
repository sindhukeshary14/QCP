// AdminLoggedIn.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminLoggedIn() {
  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <div>
        <h3>Admin Dashboard</h3>
        <ul>
          <li>
            <Link to="/create-quiz">Create Quiz</Link> {/* Link to CreateQuiz */}
          </li>
          <li>
            <Link to="/view-quiz">View Quizzes</Link> {/* Link to a page where you view quizzes */}
          </li>
          {/* Add more admin options here as needed */}
        </ul>
      </div>
    </div>
  );
}

export default AdminLoggedIn;
