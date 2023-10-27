// CreateQuiz.js
import React, { useState } from 'react';

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
        <button type="button" onClick={addQuestion}>Add Question</button>
      </form>
      <div>
        <h3>Quiz Questions</h3>
        <ul>
          {quizData.map((question, index) => (
            <li key={index}>
              Question: {question.question}
              <br />
              Options: {question.options.join(', ')}
              <br />
              Correct Answer: Option {question.correctAnswer + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreateQuiz;
