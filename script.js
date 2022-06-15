//Variable to keep track of the player score in the game
let playerScore = 0;
//Variable to keep track of the computer score in the game
let computerScore = 0;

function playerPlay(){
    //Prompt user for their selection and store in a variable playerSelect
    let playerSelect = prompt('Rock, Paper or Scissors?');
    //if the user didn't input anything this will alert the user and ask them again
    while(playerSelect == null){
        alert('Please enter Rock, Paper or Scissors');
        playerSelect = prompt('Rock, Paper or Scissors?');
    }
    //Convert everything but the first letter the user inputted to lowercase
    let lowercaseRestOfWord = playerSelect.slice(1).toLowerCase();
    //Convert the first letter the user inputted to uppercase
    let capitalLetter = playerSelect[0].toUpperCase();
    //Add the parts together to make the new word
    let newWord = capitalLetter + lowercaseRestOfWord;
    //while the input is not Rock, Paper or Scissors keept asking, this loop keeps
    //running until we get Rock, Paper or Scissors
    while(newWord !== 'Rock' && newWord !== 'Paper' && newWord !== 'Scissors'){
        alert('Please enter Rock, Paper or Scissors');
        playerSelect = prompt('Rock, Paper or Scissors?');
        //if the user didn't input anything this will alert the user and ask them again
        while(playerSelect == null){
            alert('Please enter Rock, Paper or Scissors');
            playerSelect = prompt('Rock, Paper or Scissors?');
        }
        //Convert everything but the first letter the user inputted to lowercase
        lowercaseRestOfWord = playerSelect.slice(1).toLowerCase();
        //Convert the first letter the user inputted to uppercase
        capitalLetter = playerSelect[0].toUpperCase();
        //Add the parts together to make the new word
        newWord = capitalLetter + lowercaseRestOfWord;
    }
    return newWord;
}

//This function is here to get the computer's selection, this function
//randomly picks Rock, Paper or Scissors
function computerPlay(){
    //Stores the answers in an array so we can access the answers and return them
    //as the computer's selection at the end of the function
    const selections = ['Rock', 'Paper', 'Scissors'];
    //The math floor and math random built in functions are used here to randomly
    //pick either 0, 1 or 2
    let randomSelect = Math.floor(Math.random() * 3);
    //The function randomly return either Rock, Paper or Scissors from the selections array 
    //because the randomSelect variable will be either 0, 1 or 2
    return selections[randomSelect];
 }

//Call the game function to start 5 rounds
game();

function game(){
    //Annouce to user in the console it is a 5 round game
    console.log('Best of 5 wins');
    //loop the game for 5 rounds
    for (let i = 0; i < 5; i++){
        //get the player selection and store in the playerSelection variable
        let playerSelection = playerPlay();
        //get the computer selection and store in the computerSelection variable
        let computerSelection = computerPlay();
        //play 1 round of the game with the selections as arguements
        playRound(playerSelection, computerSelection);
        //if the player score is 3 then the player has won best of 5 rounds
        if(playerScore == 3){
            console.log('Player wins');
            //reset the scores to 0 when a winner has been found so the game function
            //can be called again without having to refresh the page
            playerScore = 0;
            computerScore = 0;
            //Return to exit the loop so it doesn't do the full 5 rounds if someone
            //has won
            return
        }
        //if the computer score is 3 then the player has won best of 5 rounds
        if(computerScore == 3){
            console.log('Computer wins');
            //Reset the scores to 0 when a winner has been found so the game function
            //can be called again without having to refresh the page
            playerScore = 0;
            computerScore = 0;
            //Return to exit the loop so it doesn't do the full 5 rounds if someone
            //has won
            return
        }
     }
     //if 5 rounds have been played and no one has 3 points then annouce a winner based
     //on who has the most points.

     if(playerScore > computerScore){
        console.log('Player wins');
     }
     else if(computerScore > playerScore){
        console.log('Computer wins');
     }
     else{
        console.log('No one wins best of 5 :(');
     }
     //Reset the scores to 0 after 5 rounds so the game function can be called again
     //without having to refresh the page
     playerScore = 0;
     computerScore = 0;
}

 function playRound(playerSelection, computerSelection){
     if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
         console.log('Player Selects: ', playerSelection);
         console.log('Computer Selects: ', computerSelection);
         console.log('You win! Rock beats Scissors');
         playerScore++;
         console.log(`Player Score:${playerScore} Computer Score:${computerScore}`)
     }
     if(playerSelection == 'Rock' && computerSelection == 'Paper'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You Lose! Paper beats Rock');
        computerScore++;
        console.log(`Player Score:${playerScore} Computer Score:${computerScore}`)
     }
     if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You win! Paper beats Rock');
        playerScore++;
        console.log(`Player Score:${playerScore} Computer Score:${computerScore}`)
     }
     if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You Lose! Scissors beats Paper');
        computerScore++;
        console.log(`Player Score:${playerScore} Computer Score:${computerScore}`)
     }
     if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You win! Scissors beats Paper');
        playerScore++;
        console.log(`Player Score:${playerScore} Computer Score:${computerScore}`)
     }
     if(playerSelection == 'Scissors' && computerSelection == 'Rock'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You lose! Rock beats Scissors');
        computerScore++;
        console.log(`Player Score:${playerScore} Computer Score:${computerScore}`)  
     }
     if(playerSelection == computerSelection){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('It\'s a tie');
        console.log(`Player Score:${playerScore} Computer Score:${computerScore}`)
     }
 }