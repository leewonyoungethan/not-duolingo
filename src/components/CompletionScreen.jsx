function CompletionScreen({ chapterTitle, correctCount, total, onContinue }) {
  return (
    <div className="completion-screen">
      <h2 className="completion-screen__title">챕터 완료! 🎉</h2>
      <p className="completion-screen__chapter">{chapterTitle}</p>
      <p className="completion-screen__score">
        {total}문제 중 {correctCount}개 정답
      </p>
      <button type="button" className="completion-screen__restart" onClick={onContinue}>
        계속하기
      </button>
    </div>
  )
}

export default CompletionScreen
