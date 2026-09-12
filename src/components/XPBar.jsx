const XP_PER_LEVEL = 50

function XPBar({ xp }) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1
  const progress = xp % XP_PER_LEVEL

  return (
    <div className="xp-bar">
      <span className="xp-bar__level">Lv. {level}</span>
      <div className="xp-bar__track">
        <div
          className="xp-bar__fill"
          style={{ width: `${(progress / XP_PER_LEVEL) * 100}%` }}
        />
      </div>
      <span className="xp-bar__xp">
        {progress} / {XP_PER_LEVEL} XP
      </span>
    </div>
  )
}

export default XPBar
