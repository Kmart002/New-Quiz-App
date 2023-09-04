import { useState } from 'react'
import { resultInitialState } from '../Constants';
import './Quiz.css'
import AnswerTimer from '../AnswerTimer/AnswerTimer';
// import React from 'react'

const Quiz = ({questions}) => {
  const [currentQuestion, setCurrentQuestion]= useState(0);
  const [answerIdx, setAnswerIdx] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [result, setResult] = useState(resultInitialState)
  const [showResult, setShowResult] = useState(false)
  const [showAnswerTimer, setShowAnswerTimer] = useState(true)

  const {question, choices, correctAnswer, type} = questions[currentQuestion]

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index)
    if(answer === correctAnswer) {
      setAnswer(true)
    } else{
      setAnswer(false)
    }
  }

  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null)
    setShowAnswerTimer(false)
    setResult((prev) => 
      finalAnswer
      ? {
        ...prev,
        score: prev.score + 10,
        correctAnswers: prev.correctAnswers + 1,
      } : {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }
    )

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else{
      setCurrentQuestion(0);
      setShowResult(true)
    }

    setTimeout(() => {
      setShowAnswerTimer(true)
    })
  }
  const onTryAgain = () => {
    setResult(resultInitialState)
    setShowResult(false)
  }

  const handleTimeUp = () => {
    setAnswer(false)
    onClickNext(false)
  }

  const getAnswerUI = () => {
      if(type === 'FIB') {
        return <input />
      }

    return (
      <ul>
          {
            choices.map((choice, index) => (
              <li
                onClick={() => onAnswerClick(choice, index)}
                 key={choice}
                 className={answerIdx === index ? 'selected-answer' : null}
                 >
                  {choice}
              </li>
            ))
          }
        </ul>
    );
  }

  return (
    <div className='quiz-container'>
      {!showResult ? (<>
      {showAnswerTimer && (
          <AnswerTimer duration={10} onTimeUp={handleTimeUp} />
      )} 
        <span className='active-question-no'>{currentQuestion + 1}</span>
        <span className='total-question'>/{questions.length}</span>
        <h2>{question}</h2>
        {getAnswerUI()}
          <div className='footer'>
            <button className='Quiz' onClick={() => onClickNext(answer)} disabled={answerIdx === null}>
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
      </>) : 
      <div className='results'>
                <h3>Result</h3>
                <p>
                  Total Questions: <span className='result'>{questions.length}</span>
                </p>
                <p>
                  Total Score: <span className='result'>{result.score}</span>
                </p>
                <p>
                  Correct Answers: <span className='result'>{result.correctAnswers}</span>
                </p>
                <p>
                  Wrong Answers: <span className='result'>{result.wrongAnswers}</span>
                </p>
                <button className='Quiz' onClick={onTryAgain}>Try Again</button>
      </div>}
      
    </div>
  )
}

export default Quiz
