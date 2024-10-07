
import React, { useState } from 'react';
import './Quiz.css';
const quizQuestions = [
    {
      question: "Given that x = 7.5, j = -1.0, n = 1.0, m = 2.0 the value of - - x + j == x>n> = m is:",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      answer: "0"
    },
    {
      question: "Which of the following is true?",
      options: [
        "gets() doesn't do any array bound testing and should not be used.",
        "fgets() should be used in place of gets() only for files, otherwise gets() is fine",
        "gets() cannot read strings with spaces",
        "None of the above"
      ],
        answer:"gets() doesn't do any array bound testing and should not be used.",
    },
    {
      question: "What is the output of the following code?\n\n```c\n#include<stdio.h>\nint main() {\n   printf(\"%d\", 3 * 4 / 2 + 3);\n   return 0;\n}\n```",
      options: [
        "9",
        "11",
        "12",
        "10"
      ],
      answer: "9"
    },
    {
        question:"What does the following C statement mean? \n   scanf(\"%4s\", str);\n\n",
        options: [
          "Read exactly 4 characters from console.",
          "Read maximum 4 characters from console.",
          "Read a string str in multiples of 4",
          "None"
        ],
        answer: "Read maximum 4 characters from console."
      },
      {
        question:"If n has 3, then the statement a[++n]=n++;",
        options: [
        "assigns 3 to a[5]",
        "assigns 4 to a[5]",
        "assigns 4 to a[4]",
        "what is assigned is compiler dependent",
        ],
        answer:"what is assigned is compiler dependent",
      },
      {
        question:"Which of the following is not a logical operator?",
        options:[
        "&&",
        "!", 
        "||" ,
        "|" , 
        ],
        answer:"|",
      },
      {
        question:"Which of the following operators can be applied on structure variables?",
        options:[
            "Equality comparison ( == )",
            "Assignment ( = )",
            "Both of the above",
            "None of the above",
        ],
        answer:"Both of the above",
      },
      {
        question:"Pick the best statement for the below program snippet: struct {int a[2];} arr[] = {1,2};",
        options:[
            "No compile error and it’ll create array arr of 2 elements. Each of the element of arr contain a struct field of int array of 2 elements. arr[0]. a[0] would be 1 and arr[1].a[0] would be 2.",
            "No compile error and it’ll create array arr of 2 elements. Each of the element of arr contain a struct field of int array of 2 elements. arr[0]. a[0] would be 1 and arr[0].a[1] would be 2. The second element arr[1] would be ZERO i.e. arr[1].a[0] and arr[1].a[1] would be 0.",
            "No compile error and it’ll create array arr of 1 element. Each of the element of arr contain a struct field of int array of 2 elements. arr[0]. a[0] would be 1 and arr[0].a[1] would be 2.",
            "None of the above",
        ],
        answer:"No compile error and it’ll create array arr of 1 element. Each of the element of arr contain a struct field of int array of 2 elements. arr[0]. a[0] would be 1 and arr[0].a[1] would be 2.",
      },
      {
        questions:"The translator which performs macro calls expansion is called: ",
        options:[
            "Macro processor",
            "Micro pre - processor",
            "Macro pre - processor",
            "Dynamic Linker",
        ],
        answer:"Macro pre - processor",
      },
      {
        question:"What is the use of #pragma once?",
        options:[

            "Used in a header file to avoid its inclusion more than once.",
            "Used to avoid multiple declarations of same variable.",
            "Used in a c file to include a header file at least once.",
            "Used to avoid assertions",
        ],
        answer:"Used in a header file to avoid its inclusion more than once.",
      },
      {
        question:"A one dimensional array A has indices 1....75. Each element is a string and takes up three memory words. The array is stored at location 1120 decimal. The starting address of A[49] is",
        options:[
            "1267",
            "1164",
            "1264",
            "1169",
        ],
        answer:"1264",
      },
      {
      question:"Which of the following is true about arrays in C?",
            options:[
                "For every type T, there can be an array of T.",
             "For every type T except void and function type, there can be an array of T.",
           "When an array is passed to a function, C compiler creates a copy of array.",
           "2D arrays are stored in column major form",
            ],
            answer:"For every type T except void and function type, there can be an array of T.",
      },
  ];
  

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
          </div>
          <div className="question-text">{quizQuestions[currentQuestion].question}</div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
