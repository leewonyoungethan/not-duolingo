import { useState } from 'react'
import XPBar from './components/XPBar'
import QuizCard from './components/QuizCard'
import CompletionScreen from './components/CompletionScreen'
import questions from './data/questions'
import './App.css'

const XP_PER_CORRECT_ANSWER = 10
const NEXT_QUESTION_DELAY = 800

function App() {
  const [xp, setXp] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = questions[currentIndex]

  const handleSelect = (choice) => {
    if (selected !== null) return

    setSelected(choice)
    const isCorrect = choice === currentQuestion.answer
    if (isCorrect) {
      setXp((prevXp) => prevXp + XP_PER_CORRECT_ANSWER)
      setCorrectCount((prevCount) => prevCount + 1)
    }

    setTimeout(() => {
      setSelected(null)
      if (currentIndex + 1 >= questions.length) {
        setIsFinished(true)
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }
    }, NEXT_QUESTION_DELAY)
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setCorrectCount(0)
    setIsFinished(false)
  }

  return (
    <div className="app">
      <XPBar xp={xp} />
      {isFinished ? (
        <CompletionScreen
          correctCount={correctCount}
          total={questions.length}
          onRestart={handleRestart}
        />
      ) : (
        <QuizCard
          question={currentQuestion}
          selected={selected}
          onSelect={handleSelect}
        />
      )}
    </div>
  )
}

export default App
