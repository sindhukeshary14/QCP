import React, { useState } from 'react';
import axios from 'axios';

function CreateQuiz() {
  const [quizData, setQuizData] = useState([]); // To store quiz questions
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '', '']);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(0);

  const addQuestion = () => {
    const newQuestion = {
      question: currentQuestion,
      options: currentOptions,
      correctAnswer: currentCorrectAnswer,
    };

    axios.post('http://localhost:5000/api/questions', newQuestion)
    .then(response => {
      console.log("Question added successfully");
    })
    .catch(error => {
      console.error("Failed to add question: " + error.message);
    });

    setQuizData([...quizData, newQuestion]);
    setCurrentQuestion('');
    setCurrentOptions(['', '', '', '']);
    setCurrentCorrectAnswer(0);
  }

  const handleOptionChange = (index) => (e) => {
    const updatedOptions = [...currentOptions];
    updatedOptions[index] = e.target.value;
    setCurrentOptions(updatedOptions);
  }

  const handleNextQuestion = () => {
    addQuestion(); // Add the current question before moving to the next one
  }

  return (
    <div>
      <h2>Create Quiz</h2>
      <form>
        <div>
          <label>Question:</label>
          <input
            type="text"
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
          />
        </div>
        <div>
          <label>Options:</label>
          {currentOptions.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option}
                onChange={handleOptionChange(index)}
              />
            </div>
          ))}
        </div>
        <div>
          <label>Correct Answer:</label>
          <select
            value={currentCorrectAnswer}
            onChange={(e) => setCurrentCorrectAnswer(e.target.value)}
          >
            {currentOptions.map((_, index) => (
              <option key={index} value={index}>
                Option {index + 1}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleNextQuestion}>Next Question</button>
      </form>
      
    </div>
  );
}

export default CreateQuiz;


