const prompt = require('prompt-sync') ({ sigint: true});
const { gameStats, game } = require('./game.js');

//function to show the menu 
const showMenu = () => {
    let isRunning = true;

    while(isRunning) { // prints menu to the console if inRunning is true
    console.log('Menu:');
    console.log('1. Play Round');
    console.log('2. View Stats');
    console.log('3. Exit\n');
    
//variable that holds the user's choice for the menu
    const menuChoice = prompt('Choose an option (1-3): '.trim());

    //if statements for the users choice 
    if (menuChoice === '1') { 
        const userInput = prompt('Choose rock, paper, or scissors: '); 
        //checks if userInput is rock, paper, or scissors
        //.toLowerCase().trim() is so rock, paper, or scissors with capital letters and/or spaces is still understood as right (case-insensitive)
         if(userInput.toLowerCase().trim() !== 'rock' && userInput.toLowerCase().trim() !== 'paper' && userInput.toLowerCase().trim() !== 'scissors') {
            console.log('Invalid option, try again.');
         } else {
            game(userInput.toLowerCase().trim()); //runs the game function
         };

    } else if (menuChoice === '2') { //runs the gameStats function if number is 2
        gameStats();
    } else if (menuChoice === '3') { //stops running menu 
        isRunning = false;
    } else {
        console.log('Invalid option, try again.'); //prints this to the console if user inputs anything that is not rock, paper, or scissors
    };

    prompt('\nPress enter to continue'); //tells user to press enter after every input 
    console.clear(); //clear the console so the user will see the current menu clearly 

}
};

module.exports = { showMenu };

