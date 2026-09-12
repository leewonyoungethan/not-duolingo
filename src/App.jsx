import { useEffect, useRef, useState } from 'react'
import XPBar from './components/XPBar'
import QuizCard from './components/QuizCard'
import CompletionScreen from './components/CompletionScreen'
import LanguageSelect from './components/LanguageSelect'
import LevelUpBanner from './components/LevelUpBanner'
import questionSets from './data/questions'
import { getLevel } from './utils/leveling'
import './App.css'

const XP_PER_CORRECT_ANSWER = 10
const NEXT_QUESTION_DELAY = 800
const LEVEL_UP_BANNER_DURATION = 1800
const XP_STORAGE_KEY = 'not-duolingo:xp'

function getStoredXp() {
  try {
    return Number(localStorage.getItem(XP_STORAGE_KEY)) || 0
  } catch {
    return 0
  }
}

function App() {
  const [xp, setXp] = useState(getStoredXp)
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [levelUpLevel, setLevelUpLevel] = useState(null)
  const previousLevelRef = useRef(getLevel(xp))

  useEffect(() => {
    try {
      localStorage.setItem(XP_STORAGE_KEY, String(xp))
    } catch {
      // ignore write failures (e.g. private browsing)
    }

    const newLevel = getLevel(xp)
    if (newLevel > previousLevelRef.current) {
      setLevelUpLevel(newLevel)
      const timeoutId = setTimeout(() => setLevelUpLevel(null), LEVEL_UP_BANNER_DURATION)
      previousLevelRef.current = newLevel
      return () => clearTimeout(timeoutId)
    }
    previousLevelRef.current = newLevel
  }, [xp])

  const questions = selectedLanguage ? questionSets[selectedLanguage].questions : null
  const currentQuestion = questions ? questions[currentIndex] : null

  const handleSelectLanguage = (languageKey) => {
    setSelectedLanguage(languageKey)
    setCurrentIndex(0)
    setSelected(null)
    setCorrectCount(0)
    setIsFinished(false)
  }

  const handleChangeLanguage = () => {
    setSelectedLanguage(null)
  }

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
      {!selectedLanguage ? (
        <LanguageSelect questionSets={questionSets} onSelect={handleSelectLanguage} />
      ) : isFinished ? (
        <CompletionScreen
          correctCount={correctCount}
          total={questions.length}
          onRestart={handleRestart}
          onChangeLanguage={handleChangeLanguage}
        />
      ) : (
        <QuizCard
          question={currentQuestion}
          selected={selected}
          onSelect={handleSelect}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
        />
      )}
      {levelUpLevel !== null && <LevelUpBanner level={levelUpLevel} />}
    </div>
  )
}

export default App
