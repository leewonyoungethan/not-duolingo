function LanguageSelect({ questionSets, onSelect }) {
  return (
    <div className="language-select">
      <h2 className="language-select__title">어떤 언어를 배울까요?</h2>
      <div className="language-select__grid">
        {Object.entries(questionSets).map(([key, { label, flag }]) => (
          <button
            key={key}
            type="button"
            className="language-select__option"
            onClick={() => onSelect(key)}
          >
            <span className="language-select__flag">{flag}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSelect
