const stats = { // object to hold the stats 
    wins: 0,
    losses: 0,
    ties: 0
};

const gameStats = () => { //function to update the stats object
    const totalGames = stats.wins + stats.losses + stats.ties 
    if (totalGames === 0) { // if no game is played yet and stats is empty 
        console.log('Silly goose there are no stats to show. Play a game to get some stats!')
        return;
    }
    const winRate = Math.round((stats.wins / totalGames) * 100); //equation to get the win rate

    console.log(`Games Won: ${stats.wins}`);
    console.log(`Games Lost: ${stats.losses}`);
    console.log(`Games Tied: ${stats.ties}`);
    console.log(`Win Rate: ${winRate}`);
}

const game = (userInput) => { //function to play the game 
    let rps = ['rock', 'scissors', 'paper'];
    let randomWord = Math.round(Math.random() * 2); //chooses random word from rps array

    //if statements will compare user input with computer choice and output the winner and update the stats objects
    if (rps[randomWord] === 'rock' && userInput === 'rock' ||  rps[randomWord] === 'scissors' && userInput === 'scissors' || rps[randomWord] === 'paper' && userInput === 'paper') {
        console.log(`Computer chose ${rps[randomWord]} \nIt's a tie!`);
        stats.ties += 1;
        return
    } else if (rps[randomWord] === 'rock' && userInput === 'paper' ||  rps[randomWord] === 'scissors' && userInput === 'rock' || rps[randomWord] === 'paper' && userInput === 'scissors') {
        console.log(`Computer chose ${rps[randomWord]} \nComputer losses, you win!`);
        stats.wins += 1;
        return;
    } else if (rps[randomWord] === 'rock' && userInput === 'scissors' ||  rps[randomWord] === 'scissors' && userInput === 'paper' || rps[randomWord] === 'paper' && userInput === 'rock') {
        console.log(`Computer chose ${rps[randomWord]} \nComputer wins, you lose!`);
        stats.losses += 1;
        return;
    }; 

};

module.exports = { gameStats, game}