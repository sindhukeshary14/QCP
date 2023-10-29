import React, {useState} from 'react'

const CreateQuiz = () => {
  const [testName, setTestName] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], answer: '' },
  ]);

  const handleQuestionChange = (index, event) => {
    const { name, value } = event.target;
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], [name]: value };
    setQuestions(newQuestions);
  };

  const handleOptionsChange = (questionIndex, optionIndex, event) => {
    const { value } = event.target;
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(questions);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/add_test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
          test_name: testName,
          questions,
        }),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Test added successfully!');
        window.alert('Test has been created successfully!');
      } else {
        // Handle error, e.g., show an error message
        console.error('Failed to add test');
        window.alert('Failed to create test. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred while creating the test. Please try again later.');
    }
  };

  return (
    <div className='question-form'>
    <form onSubmit={handleSubmit}>

      
      <h2 className='cq'>Create Quiz</h2> 
      <label>
        Test Name:
        <input type="text" value={testName} style={{width: '15.5vw'}} onChange={(e) => setTestName(e.target.value)} />
      </label>
      <br />

      {questions.map((question, index) => (
        <div key={index}>
          <label>
            Question {index + 1}:
            <input
            style={{width: '15vw'}}
              type="text"
              name="question"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e)}
            />
          </label>
          <br />

          {question.options.map((option, optionIndex) => (
            <label key={optionIndex}>
              Option {optionIndex + 1}:
              <input
                type="text"
                value={option}
                style={{width: '10vw'}}
                className='question-input'
                onChange={(e) => handleOptionsChange(index, optionIndex, e)}
              />
            </label>
          ))}
          <br />

          <label>
            Answer:
            <select
              value={question.answer}
              className='select-question'
              onChange={(e) => handleQuestionChange(index, e)}
              name="answer"
            >
              {question.options.map((_, optionIndex) => (
                <option key={optionIndex}>{`option${optionIndex + 1}`}</option>
              ))}
            </select>
          </label>
          <br />
        </div>
      ))}
      <button className='createquiz-button sb-bttn' type="button"  onClick={addQuestion}>
        Add Another Question
      </button>

      <button className='createquiz-button sb-bttn' type="submit" >Submit Test</button>
    </form>
    </div>
  );
}

export default CreateQuiz