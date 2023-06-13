const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');
const scoreSelect = document.querySelector('#scoreSelect');
const playerOnePoint = document.querySelector('#playerOnePoint');
const playerTwoPoint = document.querySelector('#playerTwoPoint');
const resetScore = document.querySelector('#resetScore');
const ganador = document.querySelector('#ganador');
let scoreOne = 0;
let scoreTwo = 0;

let maxScore = 6;

const playerOneScores = () => {
    scoreOne++;
    playerOneScore.innerText = scoreOne;
    console.log(scoreOne, maxScore);
    checkWinner();
};

const playerTwoScores = () => {
    scoreTwo++;
    console.log('click!', scoreTwo);
    playerTwoScore.innerText = scoreTwo;
    checkWinner();
};

const disableScoreButtons = () => {
    playerOnePoint.removeEventListener('click', playerOneScores);
    playerTwoPoint.removeEventListener('click', playerTwoScores);
};

playerOnePoint.addEventListener('click', playerOneScores);
playerTwoPoint.addEventListener('click', playerTwoScores);

resetScore.addEventListener('click', () => {
    scoreOne = 0;
    scoreTwo = 0;
    playerOneScore.innerText = scoreOne;
    playerTwoScore.innerText = scoreTwo;
    ganador.innerHTML = '';
    ganador.style.display = 'none';
    scoreSelect.value = '6';
    playerOnePoint.addEventListener('click', playerOneScores);
    playerTwoPoint.addEventListener('click', playerTwoScores);
    playerOneScore.classList.remove('verde', 'rojo');
    playerTwoScore.classList.remove('verde', 'rojo');
});

scoreSelect.addEventListener('change', (e) => {
    maxScore = parseInt(e.target.value);
    console.log(maxScore);
});

checkWinner = () => {
    if (scoreOne === maxScore) {
        console.log('ganador 1');
        ganador.innerHTML = '<p>El ganador es <b>Jugador 1</b></p>';
        ganador.style.display = 'inline-block';
        playerOneScore.classList.add('verde');
        playerTwoScore.classList.add('rojo');
        disableScoreButtons();
    } else if (scoreTwo == maxScore) {
        console.log('ganador 2');
        ganador.innerHTML = '<p>El ganador es <b>Jugador 2</b></p>';
        ganador.style.display = 'inline-block';
        playerTwoScore.classList.add('verde');
        playerOneScore.classList.add('rojo');
        disableScoreButtons();
    }
};
