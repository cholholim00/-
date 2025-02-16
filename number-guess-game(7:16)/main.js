 let computerNum = 0;
 let playButton = document.getElementById("play-button");
 let userInput = document.getElementById("user-input");
 let resultArea = document.getElementById("result-area");
 let correctAnswer = document.getElementById("Correct answer");

 playButton.addEventListener("click", play);

 function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답 :",computerNum);
    correctAnswer.textContent = `정답은 ${computerNum}입니다!`;
 }

 function play() {
    let userValue = userInput.value;

    if(userValue < computerNum) {
        resultArea.textContent = "🔼 Up!!!"
        
    }else if(userValue > computerNum) {
        resultArea.textContent = "🔽 Down!!!"
        
    }else {
        resultArea.textContent = "🎉 축하해요! 맞추셨습니다~!"
        
    }
 }
 pickRandomNum();