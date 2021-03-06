//Variable to keep track of the player score in the game
let playerScore = 0;
//Variable to keep track of the computer score in the game
let computerScore = 0;

//Select the buttons and store in a variable
const rockButton = document.querySelector('.Rock');
const paperButton = document.querySelector('.Paper');
const scissorsButton = document.querySelector('.Scissors');
const showResults = document.querySelector('.Results');
const showSelections = document.querySelector(' .Selections');
const showScores = document.querySelector(' .Scores');
const showWinner = document.querySelector(' .Winner');

//Get the result of computerSelection
// let computerSelection = computerPlay();

//Play 1 round by clicking on the button
rockButton.addEventListener('click', (e)=> { 
        playRound(e.target.classList.value, computerPlay())
    });
paperButton.addEventListener('click', (e)=> { 
        playRound(e.target.classList.value, computerPlay())
    });
scissorsButton.addEventListener('click', (e)=> { 
        playRound(e.target.classList.value, computerPlay())
    });


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
// game();

// function game(){
//     //Annouce to user in the console it is a 5 round game
//     console.log('Best of 5 wins');
//     //loop the game for 5 rounds
//     for (let i = 0; i < 5; i++){
//         //get the player selection and store in the playerSelection variable
//         let playerSelection = playerPlay();
//         //get the computer selection and store in the computerSelection variable
//         let computerSelection = computerPlay();
//         //play 1 round of the game with the selections as arguements
//         playRound(playerSelection, computerSelection);
//         //if the player score is 3 then the player has won best of 5 rounds
//         if(playerScore == 3){
//             console.log('Player wins');
//             //reset the scores to 0 when a winner has been found so the game function
//             //can be called again without having to refresh the page
//             playerScore = 0;
//             computerScore = 0;
//             //Return to exit the loop so it doesn't do the full 5 rounds if someone
//             //has won
//             return
//         }
//         //if the computer score is 3 then the player has won best of 5 rounds
//         if(computerScore == 3){
//             console.log('Computer wins');
//             //Reset the scores to 0 when a winner has been found so the game function
//             //can be called again without having to refresh the page
//             playerScore = 0;
//             computerScore = 0;
//             //Return to exit the loop so it doesn't do the full 5 rounds if someone
//             //has won
//             return
//         }
//      }
//      //if 5 rounds have been played and no one has 3 points then annouce a winner based
//      //on who has the most points.

//      if(playerScore > computerScore){
//         console.log('Player wins');
//      }
//      else if(computerScore > playerScore){
//         console.log('Computer wins');
//      }
//      else{
//         console.log('No one wins best of 5 :(');
//      }
//      //Reset the scores to 0 after 5 rounds so the game function can be called again
//      //without having to refresh the page
//      playerScore = 0;
//      computerScore = 0;
// }

 function playRound(playerSelection, computerSelection){
      showWinner.textContent = '';
     if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
         showSelections.textContent = `Player Selects: ${playerSelection} \r\nComputer Selects: ${computerSelection}`
         showResults.appendChild(showSelections);
         playerScore++;
     }
     if(playerSelection == 'Rock' && computerSelection == 'Paper'){
         showSelections.textContent = `Player Selects: ${playerSelection} \r\nComputer Selects: ${computerSelection}`
         showResults.appendChild(showSelections);
         computerScore++;
     }
     if(playerSelection == 'Paper' && computerSelection == 'Rock'){
         showSelections.textContent = `Player Selects: ${playerSelection} \r\nComputer Selects: ${computerSelection}`
         showResults.appendChild(showSelections);
         playerScore++;
     }
     if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
         showSelections.textContent = `Player Selects: ${playerSelection} \r\nComputer Selects: ${computerSelection}`
         showResults.appendChild(showSelections);
         computerScore++;
     }
     if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
         showSelections.textContent = `Player Selects: ${playerSelection} \r\nComputer Selects: ${computerSelection}`
         showResults.appendChild(showSelections);
         playerScore++;
     }
     if(playerSelection == 'Scissors' && computerSelection == 'Rock'){
         showSelections.textContent = `Player Selects: ${playerSelection} \r\nComputer Selects: ${computerSelection}`
         showResults.appendChild(showSelections);
         computerScore++;
     }
     if(playerSelection == computerSelection){
         showSelections.textContent = `Player Selects: ${playerSelection} \r\nComputer Selects: ${computerSelection}`
         showResults.appendChild(showSelections);
     }
     updateResults();
 }

 function updateResults(){
   showSelections.appendChild(showScores);
   showScores.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`

   if(playerScore === 5){
      showWinner.textContent = `Player Wins by winning 5 rounds`;
      playerScore = 0;
      computerScore = 0;
   }
   if(computerScore === 5){
      showWinner.textContent = `Computer Wins by winning 5 rounds`;
      playerScore = 0;
      computerScore = 0;
   }
 }