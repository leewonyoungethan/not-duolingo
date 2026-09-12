import { useState } from 'react'
import XPBar from './components/XPBar'
import QuizCard from './components/QuizCard'
import questions from './data/questions'
import './App.css'

const XP_PER_CORRECT_ANSWER = 10
const NEXT_QUESTION_DELAY = 800

function App() {
  const [xp, setXp] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)

  const currentQuestion = questions[currentIndex]

  const handleSelect = (choice) => {
    if (selected !== null) return

    setSelected(choice)
    if (choice === currentQuestion.answer) {
      setXp((prevXp) => prevXp + XP_PER_CORRECT_ANSWER)
    }

    setTimeout(() => {
      setSelected(null)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length)
    }, NEXT_QUESTION_DELAY)
  }

  return (
    <div className="app">
      <XPBar xp={xp} />
      <QuizCard
        question={currentQuestion}
        selected={selected}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default App
