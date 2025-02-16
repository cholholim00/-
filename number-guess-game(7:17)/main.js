 let computerNum = 0;
 let playButton = document.getElementById("play-button");
 let userInput = document.getElementById("user-input");
 let resultArea = document.getElementById("result-area");
 let correctAnswer = document.getElementById("Correct-answer");
 let resetButton = document.getElementById("reset-button");
 let chances =  3;
 let gameOver = false;
 let chanceArea = document.getElementById("chance-area");
 let history = [];

 playButton.addEventListener("click", play);
 resetButton.addEventListener("click",reset);
 userInput.addEventListener("focus",function() {
    userInput.value = "";
});

 function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
     console.log("정답 :",computerNum);
 }

 function play() {
    let userValue = userInput.value;

    if(userValue<1 || userValue>100) {
        resultArea.textContent = "☠️1과 100사이의 숫자를 입력해주세요☠️";
        return;
    }
    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해주세요!";
        return;
    }
    chances -- ;
    chanceArea.textContent = `남은 기회: ${chances}번`;
    console.log("chance",chances);

    if(userValue < computerNum) {
        resultArea.textContent = "🔼 Up!!!";
        
    }else if(userValue > computerNum) {
        resultArea.textContent = "🔽 Down!!!";
        
    }else {
        resultArea.textContent = "🎉 축하해요! 맞추셨습니다~!";
        gameOver = true;
        
    }

    history.push(userValue);

    if(chances < 1) {
        gameOver = true;
    }
    if(gameOver == true) {
        playButton.disabled = true;
    }
 }

 function reset() {
    // user input창이 깨끗하게 정리되고
    userInput.value = "";
    //새로운 번호가 생성
    pickRandomNum();

    resultArea.textContent = "결과값이 여기 나옵니다!";
 }
  pickRandomNum();