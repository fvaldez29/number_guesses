let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



const generateTarget = () =>  Math.floor(Math.random() * 9);


const compareGuesses = (human, computer, target) => {
    target = Math.abs(human - computer);
    if(human > computer){
        return true;
    }
    else if(computer > human){
        return false;
    }
    return target;
}

const updateScore = winner =>{
    if(winner === "human"){
       humanScore++
    }
    else if(winner === "computer"){
        computerScore++
    }
}

const advanceRound = () => {
    return currentRoundNumber += 1;
  }



