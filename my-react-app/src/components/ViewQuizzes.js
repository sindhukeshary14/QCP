import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewQuizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch the list of quizzes from your backend API
    axios.get('http://localhost:5000/api/quizzes')
      .then(response => {
        setQuizzes(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch quizzes: " + error.message);
      });
  }, []);

  return (
    <div>
      <h2>View Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <h3>Quiz {index + 1}</h3>
            <p>Question: {quiz.question}</p>
            <p>Options: {quiz.options.join(', ')}</p>
            <p>Correct Answer: Option {quiz.correctAnswer + 1}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewQuizzes;
