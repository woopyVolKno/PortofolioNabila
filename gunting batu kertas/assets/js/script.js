function game() {
    const buttons = document.querySelectorAll('.game-button')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const btnId = button.id;
            // console.log(btnId)
            buttonPlayer(btnId);
        })
    })
}

game();

function buttonPlayer(btnId) {
    const hasil = document.getElementById('hasil')
    const choices = ['btn-batu', 'btn-gunting', 'btn-kertas'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    const imgBot = document.getElementById('img-bot');
    imgBot.src = `assets/img/${randomChoice}.png`;

    if (btnId === randomChoice) {
        hasil.textContent = 'Seri';
    } else if (
        (btnId === 'btn-batu' && randomChoice === 'btn-gunting') ||
        (btnId === 'btn-gunting' && randomChoice === 'btn-kertas') ||
        (btnId === 'btn-kertas' && randomChoice === 'btn-batu')
    ) {
        hasil.textContent = "Menang";
    } else {
        hasil.textContent = "Kalah";
    }
}