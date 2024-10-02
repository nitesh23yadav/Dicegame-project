const rollBtn = document.getElementById('roll-btn');
const dice1Img = document.getElementById('dice1');
const dice2Img = document.getElementById('dice2');
const resultPara = document.getElementById('result');

resultPara.innerHTML="<b>Player 1 wins!</b> <span style='color:green'> Congratulations !</span>";
console.log(resultPara.innerHTML);


let dice1Num;
let dice2Num;

rollBtn.addEventListener('click', rollDice);

function rollDice() {
    dice1Num = Math.floor(Math.random() * 6) + 1;
    dice2Num = Math.floor(Math.random() * 6) + 1;

    updatediceImages();
    determineWinner();
}

function updatediceImages() {
    switch (dice1Num) {
        case 1:
            dice1Img.src = 'dice1 (2).png';
            break;
        case 2:
            dice1Img.src = 'dice2 (2).png';
            break;
        case 3:
            dice1Img.src = 'dice3 (2).png';
            break;
        case 4:
            dice1Img.src = 'dice4 (2).png';
            break;
        case 5:
            dice1Img.src = 'dice5 (2).png';
            break;
        case 6:
            dice1Img.src = 'dice6 (2).png';
            break;
    }

    switch (dice2Num) {
        case 1:
            dice2Img.src = 'dice1 (2).png';
            break;
        case 2:
            dice2Img.src = 'dice2 (2).png';
            break;
        case 3:
            dice2Img.src = 'dice3 (2).png';
            break;
        case 4:
            dice2Img.src = 'dice4 (2).png';
            break;
        case 5:
            dice2Img.src = 'dice5 (2).png';
            break;
        case 6:
            dice2Img.src = 'dice6 (2).png';
            break;
    }
}

function determineWinner() {
    if (dice1Num > dice2Num) {
        resultPara.textContent = 'Player 1 wins!';
    } else if (dice2Num > dice1Num) {
        resultPara.textContent = 'Player 2 wins!';
    } else {
        resultPara.textContent = 'It\'s a tie!';
    }
}