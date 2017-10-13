const products = ['Apple', 'Avocado', 'Apricot', 'Mango', 'Spicy Ham', 'Feta Cheese', 'Nutella' ]

//console.log(products)

const pluralizer = (productsIn) => {
    for(i = 0; i < productsIn.length; i++){
         productsIn[i] += 's'
    }
    return productsIn
}

// console.log(pluralizer(products))

const pluralProducts = products.map(product => product + 's')

// console.log(pluralProducts)

const objectProducts = pluralProducts.map(product => {

    const newProduct = {name: product}

    return newProduct

})

// console.log(objectProducts)

const numbers = [1,2,3,4,5,6,7,8,9];

const printNumbers = (arr) => {
    let doublesArray = []
    for(let i = 0; i < arr.length; i++){
        doublesArray.push(arr[i] * 2)
    }
    
    return doublesArray
}

// console.log(printNumbers(numbers))

// ARRAY.map(function)
// const printNumbersMap = numbers.map(function(item){
//     return item * 2
// })

// console.log(printNumbersMap)

// const printNumbersMap = numbers.map((number) => {
//     return number * 2
// })

// console.log(printNumbersMap)

const printNumbersMap = numbers.map(number => number * 2)
// console.log(printNumbersMap)
 
const numbersFunc = (arr) => {
    let newArray = []
    
    for(let i = 0; i < arr.length; i++){
      
    newArray.push({ number: arr[i] * 2 })
    }
    return newArray
}

// console.log(numbersFunc(numbers))

const numbersFuncMap = numbers.map(n => {
    return { number: n * 2 }
})

// console.log(numbersFuncMap)

const numsGreaterThanFive = (arr) => {
    let greaterThanFive = []
    for(let i = 0; i < arr.length; i++){

        if(arr[i] > 5 &&  arr[i] < 9) {
            greaterThanFive.push({number: arr[i]})
        }
    }
    return greaterThanFive
}

console.log(numsGreaterThanFive(numbers))

const greaterThanFiveFilter = numbers.filter( num => {
    return num > 5 && num < 9
})

// console.log(greaterThanFiveFilter)


const mapAndFilterNumbers = numbers.filter(num =>{
    return num < 4
}).map(i => { 
    return {number: i}
})

console.log(mapAndFilterNumbers)

