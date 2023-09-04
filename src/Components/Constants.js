export const jsQuizz = 
  {
    questions: [
      {
        question:
          "________ provide a way to pass data from one component to another. Fill in the blank",
        
        type: "FIB",
        correctAnswer: "Props",
      },
      {
        question:
          "What is JavaScript and what is its role in web development?",
        choices: [
          "Network Protocol",
          "Programming Language",
          "Scripting Language",
          "It is a programming language used for web development to add interactivity, dynamic",
        ],
        type: "MCQs",
        correctAnswer: "Programming Language",
      },
      {
        question: "How do you declare a variable in JavaScript?",
        choices: [
          "Using var",
          "Using let",
          "Using const",
          "Using variable",
        ],
        type: "MCQs",
        correctAnswer: "Using var",
      },
      {
        question:
        "Explain the difference between let, const, and var for variable declaration.",
        choices: [
          "Their scope",
          "Their color in code editors",
          "Their data type", 
          "Their size in memory",
        ],
        type: "MCQs",
        correctAnswer: "Their scope",
      },
      {
        question: "How do you display a message in the browser's console using JavaScript?",
        choices: [
          "console.log()", 
          "browser.print()",
          "alert()", 
          "display.message()",
        ],
        type: "MCQs",
        correctAnswer: "console.log()",
      },
      {
        question:  "What is the purpose of the typeof operator in JavaScript?",
        choices: [
          "To check if a variable is defined",
          "To determine the data type of a value",
          "To compare two values",
          "To declare a new variable",
        ],
        type: "MCQs",
        correctAnswer: "To determine the data type of a value",
      },
      {
        question: "How do you comment in JavaScript?",
        choices: [
          "//This is a comment",
          "<!--This is a comment-->",
          "*This is a comment*",
          "**This is a comment**",
        ],
        type: "MCQs",
        correctAnswer: "//This is a comment",
      },
      {
        question: "Describe the concept of data types in JavaScript.",
        choices: [
          "The size of the variable",
          "The amount of data a variable can hold",
          "The type of content a variable can store",
          "The shape of the variable",
        ],
        type: "MCQs",
        correctAnswer: "The type of content a variable can store",
      },
      {
        question: "How can you prevent JavaScript code execution until the document is fully loaded?",
        choices: [
          "Using the window.load() method",
          "Placing scripts at the top of the HTML file",
          "Using the document.ready() method",
          "Placing scripts at the bottom of the HTML file",
        ],
        type: "MCQs",
        correctAnswer: "Placing scripts at the bottom of the HTML file",
      },
      {
        question: "What is the significance of the 'this' keyword in JavaScript?",
        choices: [
          "It refers to the previous function call",
          "It represents the current date and time",
          "It refers to the global object",
          "It refers to the current object context",
        ],
        type: "MCQs",
        correctAnswer: "It refers to the current object context",
      },
      {
        question:  "What is a closure in JavaScript?",
        choices: [
          "A variable that holds an entire HTML document",
          "A function that has access to its own variables and variables in its containing function's scope",
          "A type of loop in JavaScript",
          "A method for importing external libraries",
        ],
        type: "MCQs",
        correctAnswer: "A function that has access to its own variables and variables in its containing function's scope",
      },
    ],
  };

  export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers:0,
  }