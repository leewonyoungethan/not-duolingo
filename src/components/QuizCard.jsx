function QuizCard({ question, selected, onSelect }) {
  return (
    <div className="quiz-card">
      <p className="quiz-card__prompt">이 단어의 뜻은 무엇일까요?</p>
      <h2 className="quiz-card__word">{question.word}</h2>
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
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuizCard
