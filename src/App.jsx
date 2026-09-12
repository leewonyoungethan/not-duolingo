import { useEffect, useRef, useState } from 'react'
import XPBar from './components/XPBar'
import QuizCard from './components/QuizCard'
import CompletionScreen from './components/CompletionScreen'
import LanguageSelect from './components/LanguageSelect'
import LessonPath from './components/LessonPath'
import LevelUpBanner from './components/LevelUpBanner'
import questionSets from './data/questions'
import { getLevel } from './utils/leveling'
import { getStoredProgress, saveProgress } from './utils/progress'
import './App.css'

const XP_PER_CORRECT_ANSWER = 10
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
  const [progress, setProgress] = useState(getStoredProgress)
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [currentUnitIndex, setCurrentUnitIndex] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [isChecked, setIsChecked] = useState(false)
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

  const units = selectedLanguage ? questionSets[selectedLanguage].units : null
  const completedCount = selectedLanguage ? progress[selectedLanguage] || 0 : 0
  const currentUnit = units && currentUnitIndex !== null ? units[currentUnitIndex] : null
  const questions = currentUnit?.questions
  const currentQuestion = questions ? questions[currentIndex] : null
  const isCorrect = isChecked && selected === currentQuestion?.answer

  const handleSelectLanguage = (languageKey) => {
    setSelectedLanguage(languageKey)
    setCurrentUnitIndex(null)
  }

  const handleChangeLanguage = () => {
    setSelectedLanguage(null)
    setCurrentUnitIndex(null)
  }

  const handleSelectUnit = (unitIndex) => {
    if (unitIndex > completedCount) return
    setCurrentUnitIndex(unitIndex)
    setCurrentIndex(0)
    setSelected(null)
    setIsChecked(false)
    setCorrectCount(0)
    setIsFinished(false)
  }

  const handleExitUnit = () => {
    setCurrentUnitIndex(null)
  }

  const handleSelect = (choice) => {
    if (isChecked) return
    setSelected(choice)
  }

  const handleCheck = () => {
    if (selected === null) return

    setIsChecked(true)
    if (selected === currentQuestion.answer) {
      setXp((prevXp) => prevXp + XP_PER_CORRECT_ANSWER)
      setCorrectCount((prevCount) => prevCount + 1)
    }
  }

  const handleContinueQuestion = () => {
    setSelected(null)
    setIsChecked(false)
    if (currentIndex + 1 >= questions.length) {
      setIsFinished(true)
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const handleContinueFromCompletion = () => {
    if (currentUnitIndex === completedCount) {
      const nextProgress = { ...progress, [selectedLanguage]: completedCount + 1 }
      setProgress(nextProgress)
      saveProgress(nextProgress)
    }
    setIsFinished(false)
    setCurrentUnitIndex(null)
  }

  let screen = null
  if (!selectedLanguage) {
    screen = <LanguageSelect questionSets={questionSets} onSelect={handleSelectLanguage} />
  } else if (currentUnitIndex === null) {
    screen = (
      <LessonPath
        language={questionSets[selectedLanguage]}
        units={units}
        completedCount={completedCount}
        onSelectUnit={handleSelectUnit}
        onChangeLanguage={handleChangeLanguage}
      />
    )
  } else if (isFinished) {
    screen = (
      <CompletionScreen
        chapterTitle={currentUnit.title}
        correctCount={correctCount}
        total={questions.length}
        onContinue={handleContinueFromCompletion}
      />
    )
  } else {
    screen = (
      <QuizCard
        question={currentQuestion}
        selected={selected}
        isChecked={isChecked}
        isCorrect={isCorrect}
        onSelect={handleSelect}
        onCheck={handleCheck}
        onContinue={handleContinueQuestion}
        onExit={handleExitUnit}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
      />
    )
  }

  return (
    <div className="app">
      <XPBar xp={xp} />
      {screen}
      {levelUpLevel !== null && <LevelUpBanner level={levelUpLevel} />}
    </div>
  )
}

export default App
