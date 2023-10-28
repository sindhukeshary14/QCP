import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuizForm() {
  const [formData, setFormData] = useState(Array(10).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [testData, setTestData] = useState({});

  const { testId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const testName = searchParams.get('testName');

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/tests/admin/${testName}`);
      const data = await response.data;
      setTestData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching test questions:", error);
    }
  };
  
  useEffect(() => {
    fetchQuestions();
  },[])

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newFormData = [...formData];
    newFormData[questionIndex] = selectedOption;
    setFormData(newFormData);
  };

  const calculateScore = () => {
    const userScore = testData.questions.reduce((totalScore, question, index) => {
      if (question.answer === formData[index]) {
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
        {testData && testData.questions && testData.questions.map((question, index) => (
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
          <p>Form submitted. Your score is: {score} out of {testData.questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default QuizForm;
