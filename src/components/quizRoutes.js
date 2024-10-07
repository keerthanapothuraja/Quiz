// src/components/Quiz.js

import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
    }
  };

  return (
    <div className="quiz">
      <h2>Quiz: {questions[currentQuestion].category}</h2>
      <div className="question">{questions[currentQuestion].questionText}</div>
      <div className="answers">
        {questions[currentQuestion].answers.map((answer) => (
          <button key={answer.text} onClick={() => handleAnswer(answer.isCorrect)}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
