function Guesser(number, lives) {
    this.number = number
    this.lives = lives
}

Guesser.prototype.guess = function(n){
    if(n > this.number){
        console.log(`${n} is too big`)
        
            if(this.lives !== 0 ){
                this.lives = this.lives -1
                console.log(`You have ${this.lives}`)
            } else {
                console.log('OOps! You dont have anymore lives')
            }
        
    } else if (n < this.number){
        console.log(`${n} is too small`)
        if(this.lives !== 0 ){
            this.lives = this.lives -1
            console.log(`You have ${this.lives}`)
        } else {
            console.log('OOps! You dont have anymore lives')
        }
        
    } else {
        console.log(`${n} is the correct guess!`)
    }
}

const myGuess = new Guesser(10, 2)

myGuess.guess(50)
myGuess.guess(7)
myGuess.guess(10)