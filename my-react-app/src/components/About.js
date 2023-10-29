import React from 'react';
const About = () => {
  return (
    <div className='about-bg' >
      <header>
        <h1 style={{color:'#531558'}}>Welcome to QuizApp</h1>
      </header>
        <img src='https://qph.cf2.quoracdn.net/main-qimg-c5b5bb8c951bbee14dc90021851f4079' alt='About'width="700px" height="400px" className='img'/>
          <div className='text'>
            <section id="introduction">
              <h2>Introduction</h2>
                <p>Hello, quiz enthusiasts! We're excited to introduce you to QuizApp, your go-to destination for fun and informative quizzes. Whether you're a trivia buff or just looking to challenge your knowledge, you've come to the right place.</p>
            </section>
          </div>
    
    </div>
  );
};
export default About;