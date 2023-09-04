export const cssQuizz = 
{
    questions: [
        {
            question:
            "What does CSS stand for?",
            choices: [
              "Computer style sheets",
              "Creative style sheets",
              "Colourful style sheet",
              "Cascading style sheet", 
            ],
            type: "MCQs",
            correctAnswer: "Cascading style sheet",
          },
          {
            question:
            "Where in an HTML document is the correct place to refer to an external style sheet?",
            choices: [
              "In the head section",
              "In the body section",
              "At the end of the document",
              "At the middle section", 
            ],
            type: "MCQs",
            correctAnswer: "In the head section",
          },
          {
            question:
            "Which HTML tag is used to define an internal style sheet?",
            choices: [
              "<css>",
              "<script>",
              "<style>",
              "<myStyle>", 
            ],
            type: "MCQs",
            correctAnswer: "<style>",
          },
          {
            question:
            "Which is the correct CSS syntax?",
            choices: [
              "body{color=black;}",
              "body:color=black",
              "{body;color:black;}",
              "{body:color=black;}", 
            ],
            type: "MCQs",
            correctAnswer: "body{color=black;}",
          },
          {
            question:
            "How do you insert a comment in a CSS file?",
            choices: [
              "//This is a comment//",
              "//This is a comment",
              "/* This is a comment*/",
              "/This is a comment/", 
            ],
            type: "MCQs",
            correctAnswer: "//This is a comment//",
          },
          {
            question:
            "Which property is used to change the background color?",
            choices: [
              "bgcolor",
              "background-color",
              "color",
              "backgroundColor", 
            ],
            type: "MCQs",
            correctAnswer: "background-color",
          },
          {
            question:
            "Which CSS property is used to change the text color of an element?",
            choices: [
              "text-color",
              "color-text",
              "fgcolor",
              "color", 
            ],
            type: "MCQs",
            correctAnswer: "color",
          },
          {
            question:
            "Which CSS property controls the text size?",
            choices: [
              "text-style",
              "text-size",
              "font-size",
              "font-style", 
            ],
            type: "MCQs",
            correctAnswer: "font-size",
          },
          {
            question:
            "How do you make the text bold?",
            choices: [
              "font-weight:bold",
              "style:bold",
              "font:bold",
              "font-size:bold", 
            ],
            type: "MCQs",
            correctAnswer: "font-weight:bold",
          },
          {
            question:
            "Which property is used to change the left margin of an element?",
            choices: [
              "indent",
              "margin-right",
              "margin-left",
              "padding-left", 
            ],
            type: "MCQs",
            correctAnswer: "margin-left",
          },
    ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers:0,
}