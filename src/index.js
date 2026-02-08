const { showMenu } = require('./menu.js')

const startGame = () => { //function to start the game 
    console.clear()  //clears the terminal to view the menu better
    console.log("Welcome to Evelins Rock, Paper, Scissors Game!\n");
    showMenu(); // function to show menu
    console.log("Goodbye!\n");
}

startGame()