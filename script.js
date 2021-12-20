
function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
  }
}

let computerGuess;
let playerGuess;

function playRound(playerGuess, computerGuess){
  if(playerGuess ==='rock' && computerGuess === 'paper'){
    return 'You lose!, paper beats rock';
  }else if(playerGuess ==='scissors' && computerGuess === 'rock'){
    return 'You lose!, rock beats scissors';
  }else if(playerGuess ==='paper' && computerGuess === 'scissors'){
    return 'You lose!, scissors beats paper';
  }else if(playerGuess === computerGuess){
    return `Math tie`;
  }else{
    return `You Win ${playerGuess} beats ${computerGuess}`;
  }
}

function game(){
    playerGuess = prompt('Enter guess rock , paper, scissors').toLowerCase();
    computerGuess = computerPlay();
    console.log(computerGuess);
    return playRound(playerGuess, computerGuess);
}

for(let i = 0; i <= 5; i++){
  console.log(game());
}
