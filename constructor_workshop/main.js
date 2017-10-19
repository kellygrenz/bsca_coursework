const tvCharacterOne = {
    name: 'Kramer', 
    show: 'Seinfeld', 
    rating: 0 
}

const tvCharacterTwo = {
    name: 'Gary', 
    show: 'Veep', 
    rating: 10
}

const tvCharacterThree = {
    name: 'larry', 
    show: 'Curb Your Enthusiasm', 
    rating: 8
}

function tvCharacter(name, show, rating){
    this.name = name
    this.show = show
    this.rating = rating 

}

const Friends = new tvCharacter('Phoebe', 'Friends', 9 )
// console.log(Friends)


function kellysCar(make, model, year){
    this.make = make
    this.model = model
    this.year = year

}

const newCar = new kellysCar('VW', 'Toureg', 2017)

// con


const createCar = () => {
    let result = []
    for(let i = 0; i < 10; i++){
        const carObj = {
            make: 'VW', 
            model: 'Rabbit',
            year: 2008
        }
        result.push(carObj)
    }
    return result
}

// console.log(createCar())

const createCarTwo = () => {
    let result = []
    for(let i = 0; i < 10; i++){
        result.push(new kellysCar('VW', 'Toureg', 2008))
    }
    return result
}

console.log(createCarTwo())

function Recipe(ingredients, instructions, time){
    this.ingredients = ingredients
    this.instructions = instructions
    this.time = time

}

const newRecipe = (numRecipes) => {
    let result = []
    for(let i = 0; i < numRecipes; i++){
        result.push(new Recipe({}, [], 0))
    }
    return result
    
}

const recipes = newRecipe(80)

recipes[40].ingredients.flour='4 cups'
console.log(recipes[40])