class Statistics {
    constructor() {
        this.wins = 0
        this.losses = 0 
        this.tied = 0
    }

    get totalGames() {
        return this.wins + this.losses + this.tied
    }

    get winRate() {
        return Math.round((this.wins / this.totalGames) * 100)
    }

    get stats() {
        console.log(
        `Current Statistics:
        Games Won: ${this.wins}
        Games Lost: ${this.losses}
        Games Tied: ${this.tied}
        Games.totalGames: ${this.totalGames}
        Win Rate: ${this.winRate}%`)
    }

}

const stat = new Statistics()
stat.totalGames
stat.winRate
stat.stats

