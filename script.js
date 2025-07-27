document.getElementById("startBtn").addEventListener("click", () => {
  // 仮の認識結果＆話速処理（後でApp Inventor連携可）
  const mockResult = "今日はとても楽しい授業でした";
  const wordCount = mockResult.length; // 仮の語数（後で改良）
  const speed = (wordCount / 10).toFixed(2); // 10秒間と仮定

  document.getElementById("result").textContent = `認識結果: ${mockResult}`;
  document.getElementById("speedDisplay").textContent = `話速: ${speed}語/秒`;

  // 話速に応じたコメント生成（仮）
  let comment = "";
  const score = document.getElementById("speedScore").value;

  if (score >= 4) {
    comment = "とてもテンポよく話せています！";
  } else if (score >= 2) {
    comment = "もう少しハキハキ話すと伝わりやすくなりますよ！";
  } else {
    comment = "ゆっくりすぎるかも…緊張してない？";
  }

  document.getElementById("feedbackComment").textContent = `AIコメント: ${comment}`;
});