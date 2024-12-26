import { useState } from 'react';
import './App.css';

function App() {
  const ques= [
    {
      question: "What is React?",
      Options: [
        "A JavaScript library for building user interfaces",
        "A database management system",
        "A programming language",
        "A web server"
      ],
      correct: "A JavaScript library for building user interfaces",
    },
    {
      question: "What is a React component?",
      Options: [
        "A function or class that returns HTML",
        "A type of CSS selector",
        "An element in the DOM",
        "A database query"
      ],
      correct: "A function or class that returns HTML",
    },
    {
      question: "What is JSX in React?",
      Options: [
        "JavaScript Syntax Extension",
        "A type of JSON",
        "A server-side framework",
        "A database language"
      ],
      correct: "JavaScript Syntax Extension",
    },
    {
      question: "What is the purpose of the useState hook?",
      Options: [
        "To manage state in a functional component",
        "To handle HTTP requests",
        "To create a Redux store",
        "To perform side effects"
      ],
      correct: "To manage state in a functional component",
    },
    {
      question: "What is the virtual DOM in React?",
      Options: [
        "A lightweight copy of the actual DOM",
        "A replacement for the HTML DOM",
        "A backend database",
        "A JavaScript library"
      ],
      correct: "A lightweight copy of the actual DOM",
    },
    {
      question: "How do you pass data from a parent to a child component in React?",
      Options: [
        "Using props",
        "Using state",
        "Using context",
        "Using Redux"
      ],
      correct: "Using props",
    },
    {
      question: "What is the significance of the 'key' prop in React lists?",
      Options: [
        "It helps React identify which items have changed",
        "It is used to set a default value for a component",
        "It manages component styling",
        "It creates global variables"
      ],
      correct: "It helps React identify which items have changed",
    },
    {
      question: "What is React's primary goal?",
      Options: [
        "To create dynamic and interactive user interfaces",
        "To manage databases efficiently",
        "To replace JavaScript entirely",
        "To develop mobile apps exclusively"
      ],
      correct: "To create dynamic and interactive user interfaces",
    },
  ];
  
  const [count, setCount] = useState(0); // For tracking the current question
  const [score, setScore] = useState(0); // For tracking the score
  let temp;
  function checkAns(index) {
    if (ques[count].Options[index] === ques[count].correct) {
      temp=score+1
      setScore(temp); // Directly update score without temp
    }
    
    
  }

  function change(index)
  {
    checkAns(index);
    setCount(count + 1); // Move to the next question
  }

  return (
    <div className="container">
      <div className="card">
        {count < ques.length ? (
          <>
            <h2>
              Question: {count + 1}/{ques.length}
            </h2>
            <p>{ques[count].question}</p>
            <div id="ops">
              {ques[count].Options.map((option, index) => (
                <li key={index} onClick={() => change(index)}>
                  {option}
                </li>
              ))}
            </div>
          </>
        ) : (
          <div id="result">
          <h2>Your Quiz Over</h2>
          <h2>Your Score: {score}/{ques.length}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
