const userPick = document.getElementById('user-pick');
const housePick = document.getElementById('house-pick');
const resultText = document.getElementById('result-text');
let score = 0;
function handleUserPick(userChoice) {
    document.querySelector('.game-board').style.display = 'none';
    document.querySelector('.result-board').classList.remove('hidden');
    document.querySelector('.result-center').classList.add('hidden'); 

    userPick.className = `choice-wrapper ${userChoice}`;
    userPick.innerHTML = `
    <div class="outter-container">
        <div class="circle-button">
        <div class="inner-container">
            <div class="inner-circle">
            <img src="images/icon-${userChoice}.svg" alt="${userChoice}">
            </div>
        </div>
        </div>
    </div>
    `;

    housePick.className = `choice-wrapper`;
    setTimeout(() => {
    const houseChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

    housePick.className = `choice-wrapper ${houseChoice}`;
    housePick.innerHTML = `
        <div class="outter-container">
        <div class="circle-button">
            <div class="inner-container">
            <div class="inner-circle">
                <img src="images/icon-${houseChoice}.svg" alt="${houseChoice}">
            </div>
            </div>
        </div>
        </div>
    `;

    const result = getResult(userChoice, houseChoice);
    resultText.textContent = result;

    if (result === 'YOU WIN') {
    score++;
    userPick.classList.add('winner');
    } else if (result === 'YOU LOSE') {
    score = Math.max(0, score - 1);
    housePick.classList.add('winner');
    }

    document.getElementById('score').innerText = score;
    document.querySelector('.result-center').classList.remove('hidden');
    }, 1000);

}

/*------------- Game logic---------------*/
function getResult(user, house) {
    if (user === house) return "DRAW";
    if (
    (user === 'rock' && house === 'scissors') ||
    (user === 'scissors' && house === 'paper') ||
    (user === 'paper' && house === 'rock')
    ) return "YOU WIN";
    return "YOU LOSE";
}

/*------------ Reset UI to play again--------------*/
function playAgain() {
    document.querySelector('.result-board').classList.add('hidden');
    document.querySelector('.game-board').style.display = 'flex';
    housePick.className = `choice-wrapper`;
    housePick.innerHTML = ``;
    userPick.classList.remove('winner');
    housePick.classList.remove('winner');


}

function openModal() {
    document.getElementById("rulesModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("rulesModal").classList.add("hidden");
}