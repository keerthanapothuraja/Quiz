// src/components/Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import gk from './gk.jpg';
import c from './c.png';
import java from './java.jpeg';
import js from './js.jpeg';
import dsa from './dsa.jpg';
import css from './css.jpg';
import html from './html.jpeg';

const Home = () => {
  // Initialize navigate hook
  const navigate = useNavigate();

  // Function to handle button click
  const handleStartQuiz = () => {
    navigate('/c'); // Navigate to the C Program Quiz component
  };

  return (
    <div className="home">
      <h1>Discover your True Personality</h1>
      <p>Test your knowledge under pressure with timed quiz challenges.</p>
      <div className="quiz-categories">
        <div className="quiz-category">
          <img src={gk} alt="General Knowledge" />
          <p>General Knowledge</p>
          <button>Start Quiz</button>
        </div>
        <div className="quiz-category">
          <img src={c} alt="C Language" />
          <p>C Language</p>
          {/* Button with onClick event to navigate to the C Program Quiz */}
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
        <div className="quiz-category">
          <img src={java} alt="Java Language" />
          <p>Java Language</p>
          <button>Start Quiz</button>
        </div>
        <div className="quiz-category">
          <img src={js} alt="Java Language" />
          <p>JavaScript</p>
          <button>Start Quiz</button>
        </div>
        <div className="quiz-category">
          <img src={dsa} alt="Data Structures and Algorithms" />
          <p>Data Structures and Algorithms</p>
          <button>Start Quiz</button>
        </div>
      </div>
      <div className="quiz-categories">
        <div className="quiz-category">
          <img src={css} alt="CSS" />
          <p>Cascading Style Sheets</p>
          <button>Start Quiz</button>
        </div>
        <div className="quiz-category">
          <img src={html} alt="HTML" />
          <p>Hypertext Markup Language</p>
          <button>Start Quiz</button>
        </div>
        <div className="quiz-category">
          <img src={java} alt="Java Language" />
          <p>Java Language</p>
          <button>Start Quiz</button>
        </div>
        <div className="quiz-category">
          <img src={java} alt="Java Language" />
          <p>Java Language</p>
          <button>Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
