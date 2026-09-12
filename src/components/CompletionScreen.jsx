function CompletionScreen({ correctCount, total, onRestart }) {
  return (
    <div className="completion-screen">
      <h2 className="completion-screen__title">퀴즈 완료! 🎉</h2>
      <p className="completion-screen__score">
        {total}문제 중 {correctCount}개 정답
      </p>
      <button type="button" className="completion-screen__restart" onClick={onRestart}>
        다시 풀기
      </button>
    </div>
  )
}

export default CompletionScreen
