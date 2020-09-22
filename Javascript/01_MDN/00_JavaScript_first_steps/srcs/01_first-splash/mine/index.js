const input = document.querySelector(".guess_input");
const btn = document.querySelector("button");
const infoBox = document.querySelector(".info_box");
const answerBox = infoBox.querySelector(".answer_box");
const wrongBox = infoBox.querySelector(".wrong_box");
const prevInfo = infoBox.querySelector(".prev_info");
const wrongInfo = infoBox.querySelector(".wrong_info");
const limit_click = 10;
let ranNum = Math.floor(Math.random() * 100 + 1);

let answers = {
    count: 0,
    list: [],
};

function makeNewGameBtn() {
    const newBtn = document.createElement("button");

    btn.disabled = "true";
    input.value = "";
    input.disabled = "true";
    newBtn.innerHTML = "Start new game";
    newBtn.addEventListener("click", resetGame);
    infoBox.appendChild(newBtn);
}

function removePastMsg() {
    if (wrongInfo.childNodes.length >= 1 || wrongBox.childNodes.length >= 1) {
        let temp = wrongInfo.querySelector("div");
        wrongInfo.removeChild(temp);
        temp = wrongBox.querySelector("span");
        if (temp)
            wrongBox.removeChild(temp);
    }
}

function removeAllMsg() {
    while (prevInfo.firstChild) {
        prevInfo.removeChild(prevInfo.firstChild);
    }
    while (answerBox.firstChild) {
        answerBox.removeChild(answerBox.firstChild);
    }
}

function resetGame() {
    const newBtn = infoBox.querySelector("button");

    infoBox.removeChild(newBtn);
    btn.disabled = false;
    input.disabled = false;
    removePastMsg();
    removeAllMsg();
    ranNum = Math.floor(Math.random() * 100 + 1);
    answers.count = 0;
    answers.list = [];
    main();
}

function printAnswerBar() {
    const div = document.createElement("div");
    const text = "Congratulations! You got it right!";

    removePastMsg();
    div.innerText = text;
    answerBox.appendChild(div);
}

function printWrongAnswerBar(ranNum, submitVal) {
    const div = document.createElement("div");
    const text = "Wrong!";
    const span = document.createElement("span");
    let wrongInfoText;

    removePastMsg();
    if (ranNum > submitVal) {
        wrongInfoText = "Last guess was too low!";
    } else {
        wrongInfoText = "Last guess was too high!";
    }
    div.innerText = text;
    span.innerText = wrongInfoText;
    wrongInfo.appendChild(div);
    wrongBox.appendChild(span);
}

function terminateGame() {
    const div = document.createElement("div");
    const text = "Game Over!";

    removePastMsg();
    div.innerText = text;
    wrongInfo.appendChild(div);
    makeNewGameBtn();
}

answers.checkAnswers = function(submitVal) {
    if (ranNum === submitVal) {
        printAnswerBar();
        makeNewGameBtn();
    } else {
        if (answers.count === limit_click) {
            terminateGame();
        } else {
            printWrongAnswerBar(ranNum, submitVal);
        }
    }
}

answers.printPrevAnswers = function(submitVal) {
    const span = document.createElement("span");

    if (answers.list.length === 1) {
        span.innerHTML = "Previous guesses:";
    } else if (answers.list.length > 0) {
        span.innerHTML = " " + submitVal;
    }
    prevInfo.appendChild(span);
}

answers.submitAnswer = function() {
    const submitVal = Number(input.value);
    answers.count++;
    answers.list.push(submitVal);
    answers.printPrevAnswers(submitVal);
    answers.checkAnswers(submitVal);
}

function main() {
    btn.addEventListener("click", answers.submitAnswer);
}

main();