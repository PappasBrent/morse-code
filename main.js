const prompt = document.querySelector("#prompt"),
    answer = document.querySelector("input[name='answer'"),
    en = "abcdefghijklmnopqrstuvwxyz".split(""),
    morse = ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..".split(" "),
    progressBarFill = document.querySelector(".progress-bar-fill");
let letterIndex = 0,
    currentProgress = letterIndex * (100 / 26);

window.onload = () => {
    prompt.innerText = en[letterIndex];
    progressBarFill.style.width = `${currentProgress}%`;
}

function updateScore() {
    let text = answer.value;
    if (text == morse[letterIndex])
        letterIndex++;
    else
        letterIndex = 0;
    if (letterIndex == 26) {
        answer.style.opacity = 0;
        answer.blur();
    }
    currentProgress = letterIndex * (100 / 26);
    progressBarFill.style.width = `${currentProgress}%`;
    answer.value = "";
    prompt.innerText = (letterIndex == 26) ? "Good job!" : en[letterIndex];
}