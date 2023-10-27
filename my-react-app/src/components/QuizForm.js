import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function QuizForm() {
  const { testId } = useParams();
  const [questions, setQuestions] = useState([
    {
      question: 'What is Python?',
      options: ['A programming language', 'A snake', 'A fruit'],
      correctAnswer: 'A programming language',
    },
    {
      question: 'Which of the following is not a Python data type?',
      options: ['Integer', 'Float', 'Boolean', 'Complex'],
      correctAnswer: 'Complex',
    },
    {
      question: 'How do you define a function in Python?',
      options: ['func', 'define', 'function', 'def'],
      correctAnswer: 'def',
    },
    {
      question: 'What is the result of 2 + 2 in Python?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      question: 'Which statement is used to exit a loop in Python?',
      options: ['exit', 'break', 'stop', 'end'],
      correctAnswer: 'break',
    },
    {
      question: 'What does the "print" function do in Python?',
      options: ['Display output on the screen', 'Pause the program', 'Clear the screen', 'Save data to a file'],
      correctAnswer: 'Display output on the screen',
    },
    {
      question: 'How do you create a comment in Python?',
      options: ['// This is a comment', '# This is a comment', '-- This is a comment', '/* This is a comment */'],
      correctAnswer: '# This is a comment',
    },
    {
      question: 'Which module is used for working with regular expressions in Python?',
      options: ['regex', 're', 'string', 'pattern'],
      correctAnswer: 're',
    },
    {
      question: 'What is the result of "5 / 2" in Python?',
      options: ['2.5', '2', '2.0', '2.2'],
      correctAnswer: '2.5',
    },
    {
      question: 'Which data structure in Python is ordered and changeable?',
      options: ['List', 'Set', 'Tuple', 'Dictionary'],
      correctAnswer: 'List',
    },
  ]);
  const [formData, setFormData] = useState(new Array(10).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const handleOptionChange = (questionIndex, selectedOption) => {
    const newFormData = [...formData];
    newFormData[questionIndex] = selectedOption;
    setFormData(newFormData);
  };
  const calculateScore = () => {
    const userScore = questions.reduce((totalScore, question, index) => {
      if (question.correctAnswer === formData[index]) {
        return totalScore + 1;
      }
      return totalScore;
    }, 0);
    return userScore;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userScore = calculateScore();
    setScore(userScore);
    setSubmitted(true);
  };
  return (
    <div className="container">
      <h3>Python Quiz</h3>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="ques-div">
            <h2 className="qnum">Question {index + 1}</h2>
            <div className="dotted-spaced"></div>
            <hr />
            <h1 className="ques-heading">{question.question}</h1>
            <div className="options-div">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value={option}
                    checked={formData[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="btn btn-primary btn-lg sub-btn" type="submit">
          Submit
        </button>
      </form>
      {submitted && (
        <div>
          <p>Form submitted. Your score is: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
}
export default QuizForm;