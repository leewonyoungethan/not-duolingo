function LevelUpBanner({ level }) {
  return (
    <div className="level-up">
      <div className="level-up__card">
        <div className="level-up__emoji">🎉</div>
        <p className="level-up__title">레벨 업!</p>
        <p className="level-up__level">Lv. {level}</p>
      </div>
    </div>
  )
}

export default LevelUpBanner
