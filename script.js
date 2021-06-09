const word = document.getElementById('word'),
      text = document.getElementById('text'),
      scoreEl = document.getElementById('score'),
      timeEl = document.getElementById('time'),
      endgameEl = document.getElementById('end-game-container'),
      settingsBtn = document.getElementById('settings-btn'),
      settings = document.getElementById('settings'),
      settingsForm = document.getElementById('settings-form'),
      difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML= randomWord;
}

// Update score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';

    if(time === 0) {
        clearInterval(timeInterval);
        // End game
        gameOver();
    }
}

// Game over, show and screen
function gameOver() {
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;

    endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners

text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // Clear input
        e.target.value = '';

        time += 5;

        updateTime();
    }
});