
let score = (JSON.parse(localStorage.getItem('score'))) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  displayScore();

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove == 'scissors'){
        if(computerMove === 'rock'){
        result = 'You lose.';    
    }
    else if(computerMove === 'paper'){
        result = 'You win.';    
    }
    else if(computerMove === 'scissors'){
        result = 'Its a tie';    
    }
    }

    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
        result = 'You win.';    
    }
    else if(computerMove === 'scissors'){
        result = 'You lose.';    
    }
    else if(computerMove === 'paper'){
        result = 'Its a tie';    
    }
    }

    else if(playerMove === 'rock'){
        if(computerMove === 'scissors'){
        result = 'You win.';    
    }
    else if(computerMove === 'paper'){
        result = 'You lose.';    
    }
    else if(computerMove === 'rock'){
        result = 'Its a tie';    
    }
    }

    if(result === 'You win.') {
        score.wins += 1; 
    }
    else if(result === 'You lose.'){
        score.losses += 1;
    }
    else if(result === 'Its a tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector(".js_moves").innerHTML = 
        `You<img src="${playerMove}-emoji.png" class="move_icon">
        <img src="${computerMove}-emoji.png" class="move_icon">Computer`

    document.querySelector(".js_result").innerHTML = 
        result;

    displayScore();

//     alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function displayScore() {
    document.querySelector(".js_score").innerHTML =
  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function deleteText() {
    document.querySelector(".js_moves").innerHTML = 
        '';
        
    document.querySelector(".js_result").innerHTML = 
        '';
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
}
else if(randomNumber >= 2/3 && randomNumber < 1){
     computerMove = 'scissors';
}

return computerMove;
}
 

