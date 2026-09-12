function LessonPath({ language, units, completedCount, onSelectUnit, onChangeLanguage }) {
  return (
    <div className="lesson-path">
      <div className="lesson-path__header">
        <button type="button" className="lesson-path__back" onClick={onChangeLanguage}>
          ← 다른 언어
        </button>
        <h2 className="lesson-path__title">
          {language.flag} {language.label}
        </h2>
      </div>

      <div className="lesson-path__track">
        {units.map((unit, index) => {
          const isCompleted = index < completedCount
          const isCurrent = index === completedCount
          const isLocked = index > completedCount

          let state = 'locked'
          if (isCompleted) state = 'completed'
          else if (isCurrent) state = 'current'

          return (
            <div
              key={unit.id}
              className={`lesson-path__node ${index % 2 === 1 ? 'is-right' : ''}`}
            >
              <button
                type="button"
                className={`lesson-path__circle ${state}`}
                disabled={isLocked}
                onClick={() => onSelectUnit(index)}
              >
                {isCompleted ? '★' : isLocked ? '🔒' : index + 1}
              </button>
              <div className="lesson-path__info">
                <p className="lesson-path__chapter">{unit.title}</p>
                {isCurrent && <p className="lesson-path__story">{unit.story}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LessonPath
