export const htmlQuizz = {
    questions: [
        {
        question:
        "Which character is used to indicate an end tag?",
        choices: [
          "<#>",
          "<%>",
          "</>",
          "<*>", 
        ],
        type: "MCQs",
        correctAnswer: "</>",
      },
      {
        question:
        "What should be the first tag in any HTML Document?",
        choices: [
            "<head>",
            "<title>",
            "<html>",
            "<!Doctype html>", 
        ],
        type: "MCQs",
        correctAnswer: "<!Doctype html>",
      },
      {
        question:
        "What type of a language is HTML?",
        choices: [
            "Network Protocol",
            "Programming Language",
            "Scripting Language", 
            "Markup Language",
        ],
        type: "MCQs",
        correctAnswer: "Markup Language",
      },
      {
        question:
        "What tag is used to display a picture in a HTML page?",
        choices: [
            "Img",
            "Source", 
            "Picture", 
            "Image", 
        ],
        type: "MCQs",
        correctAnswer: "Img",
      },
      {
        question:
        "HTML are web pages read and rendered by",
        choices: [
            "Server",
            "Web browser",
            "Compiler",
            "Interpreter", 
        ],
        type: "MCQs",
        correctAnswer: "Web browser",
      },
      {
        question:
        "What is the correct HTML tag for inserting a line break?",
        choices: [
            "<br/>",
            "<lb>",
            "<break/>",
            "<nbsp>", 
        ],
        type: "MCQs",
        correctAnswer: "<br/>",
      },
      {
        question:
        "HTML documents are saved in?",
        choices: [
            "None of the above",
            "ASCII text",
            "Special binary format",
            "Machine language codes", 
        ],
        type: "MCQs",
        correctAnswer: "ASCII text",
      },
      {
        question:
        "Which tag creates a check box for a form in HTML?",
        choices: [
            "<input type= checkbox>",
            "<input=checkbox>", 
            "<checkbox>",
            "<input checkbox>", 
        ],
        type: "MCQs",
        correctAnswer: "<input checkbox>",
      },
      {
        question:
        "Choose the correct HTML tag for the smallest size heading?",
        choices: [
            "<H6>",
            "<H1>",
            "<Heading>",
            "<Head/>",  
        ],
        type: "MCQs",
        correctAnswer: "<H6>",
      },
      {
        question:
        "Choose the correct HTML element to define important text?",
        choices: [
            "<i>",
            "<strong>",
            "<important>",
            "<b/>",  
        ],
        type: "MCQs",
        correctAnswer: "<strong>",
      },
    ]
  }

  export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers:0,
  }