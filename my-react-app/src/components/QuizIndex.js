import React from 'react';

function QuizIndex() {
  return (
    <div className='body'>
      <h2>Welcome to the Quiz App</h2>
       <div className='body'> 
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://a.storyblok.com/f/47007/2500x1309/0fd8d4feb6/221103_app_onboarding_v03_meta.png" className="d-block w-100" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhdBvvPCYD4UWGcsJNoY1f4M40l0iyn6xGw&usqp=CAU" className="d-block w-100" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.dribbble.com/users/1752777/screenshots/12018136/prestation_quiz_app_d.png" className="d-block w-100" alt="Image 3" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" ariahidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        <div className='row'>
          <div className='col col-md-6'>
            <br></br>
            <br></br>
            <h2>A simple quiz platform for all types of learning and checking your brain.</h2>
          </div>
          <div className='col col-md-6'>
            <img src="https://media.tenor.com/CeDk6XdCgOUAAAAj/develop-web.gif" alt="Developing Web"></img>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default QuizIndex;
