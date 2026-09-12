function QuizCard({ question, selected, onSelect, questionNumber, totalQuestions }) {
  return (
    <div className="quiz-card">
      <div className="quiz-card__progress">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <span
            key={i}
            className={`quiz-card__dot ${i < questionNumber ? 'is-done' : ''} ${
              i === questionNumber - 1 ? 'is-current' : ''
            }`}
          />
        ))}
      </div>
      <p className="quiz-card__prompt">이 단어의 뜻은 무엇일까요?</p>
      <h2 className="quiz-card__word">{question.word}</h2>
      <p className="quiz-card__pronunciation">[{question.pronunciation}]</p>
      <div className="quiz-card__choices">
        {question.choices.map((choice) => {
          const isSelected = selected === choice
          const isAnswer = choice === question.answer
          const showResult = selected !== null

          let state = ''
          if (showResult && isSelected) {
            state = isAnswer ? 'correct' : 'wrong'
          } else if (showResult && isAnswer) {
            state = 'correct'
          }

          return (
            <button
              key={choice}
              type="button"
              className={`quiz-card__choice ${state}`}
              disabled={showResult}
              onClick={() => onSelect(choice)}
            >
              {choice}
              {state === 'correct' && <span className="quiz-card__icon">✓</span>}
              {state === 'wrong' && <span className="quiz-card__icon">✗</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuizCard
