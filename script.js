//This function is here to get the user's input and make the first letter
//capital and the rest lowercase.
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

//Get the player's input and store it into the playerSelection variable
let playerSelection = playerPlay();
//Get the computer's selection and store it into the computerSelection variable
let computerSelection = computerPlay();

 playRound(playerSelection, computerSelection);

 function playRound(playerSelection, computerSelection){
     if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
         console.log('Player Selects: ', playerSelection);
         console.log('Computer Selects: ', computerSelection);
         console.log('You win! Rock beats Scissors');
     }
     if(playerSelection == 'Rock' && computerSelection == 'Paper'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You Lose! Paper beats Rock');
     }
     if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You win! Paper beats Rock');
     }
     if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You Lose! Scissors beats Paper');
     }
     if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You win! Scissors beats Paper');  
     }
     if(playerSelection == 'Scissors' && computerSelection == 'Rock'){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('You lose! Rock beats Scissors');  
     }
     if(playerSelection == computerSelection){
        console.log('Player Selects: ', playerSelection);
        console.log('Computer Selects: ', computerSelection);
        console.log('It\'s a tie');
     }
 }