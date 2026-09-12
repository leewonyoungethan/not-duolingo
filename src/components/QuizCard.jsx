function QuizCard({
  question,
  selected,
  isChecked,
  isCorrect,
  onSelect,
  onCheck,
  onContinue,
  onExit,
  questionNumber,
  totalQuestions,
}) {
  const progressPercent = ((questionNumber - 1) / totalQuestions) * 100

  return (
    <>
      <div className="lesson-header">
        <button type="button" className="lesson-header__exit" onClick={onExit} aria-label="종료">
          ✕
        </button>
        <div className="lesson-header__track">
          <div className="lesson-header__fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className="quiz-card">
        <p className="quiz-card__prompt">이 단어의 뜻은 무엇일까요?</p>
        <h2 className="quiz-card__word">{question.word}</h2>
        <p className="quiz-card__pronunciation">[{question.pronunciation}]</p>
        <div className="quiz-card__choices">
          {question.choices.map((choice) => {
            const isSelected = selected === choice
            const isAnswer = choice === question.answer

            let state = ''
            if (isChecked && isSelected) {
              state = isAnswer ? 'correct' : 'wrong'
            } else if (isChecked && isAnswer) {
              state = 'correct'
            } else if (!isChecked && isSelected) {
              state = 'selected'
            }

            return (
              <button
                key={choice}
                type="button"
                className={`quiz-card__choice ${state}`}
                disabled={isChecked}
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

      <div className={`quiz-footer ${isChecked ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}`}>
        <div className="quiz-footer__inner">
          {isChecked ? (
            <>
              <p className="quiz-footer__feedback">
                {isCorrect ? '정답이에요! 🎉' : `아쉬워요! 정답은 "${question.answer}"예요`}
              </p>
              <button
                type="button"
                className={`quiz-footer__button ${isCorrect ? 'is-correct' : 'is-wrong'}`}
                onClick={onContinue}
              >
                계속하기
              </button>
            </>
          ) : (
            <button
              type="button"
              className="quiz-footer__button"
              disabled={selected === null}
              onClick={onCheck}
            >
              확인
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default QuizCard
