const storeInventory = [
    {name: "Catcher in the Rye", author: "J.D. Salinger", price: 10.00, genre: "Adult Fiction"},
    {name: "The Wind-Up Bird Chronicles", author: "Haruki Murakami", price: 15.00, genre: "Adult Fiction"},
    {name: "The Unbearable Lightness of Being", author: "Milan Kundera", price: 14.00, genre: "Adult Fiction"},
    {name: "Harry Potter: The Sorcerers Stone", author: "J.K. Rowling", price: 22.00, genre: "Youth Fiction"},
    {name: "In Cold Blood", author: "Truman Capote", price: 14.00, genre: "Non-Fiction"},
    {name: "A Brief History of Time", author: "Stephen Hawking", price: 18.00, genre: "Non-Fiction"},
    {name: "The Emperor of All Maladies", author: "Siddhartha Mukherjee", price: 20.00, genre: "Non-Fiction"},
    {name: "The Structure of Scientific Revolutions", author: "Thomas S. Khun", price: 16.00, genre: "Non-Fiction"},
    {name: "A Wrinkle in Time", author: "Madeleine L Engle", price: 14.00, genre: "Youth Fiction"},
    {name: "The House of the Scorpion", author: "Nancy Farmer", price: 16.00, genre: "Youth Fiction"},
    {name: "Mastering the Art of French Cooking", author: "Julia Child", price: 24.00, genre: "Food/Cooking"},
    {name: "Antifragile", author: "Nassim Nicholas Taleb", price: 20.00, genre: "Philosophy"}
  ]


  const printBookInfo = storeInventory.map(book => {
      return `${book.name} is by  ${book.author} and is  ${book.price} dollars`
  })

//   console.log(printBookInfo)

  const newFunction = (arr) => {
      let newArr = arr.map(x => {
        return `${x.name} is by  ${x.author} and is  ${x.price} dollars`
      })
      return newArr
  }

//   console.log(newFunction(storeInventory))

const nonFictionOnly = storeInventory.filter(book => {
    return book.genre === 'Non-Fiction'
})

// console.log(nonFictionOnly)

const nonFictionFunction = (arr) => {
    let newArr = arr.filter(x => {
        return x.genre === 'Non-Fiction'
    })
    return newArr
}
 
// console.log(nonFictionFunction(storeInventory))

const booksOverFifteen = storeInventory.filter(book => {
    return book.price > 15.00
})

// console.log(booksOverFifteen)

const bookOverFifteenFunc = (arr, price) => {
   
    let newArr = arr.filter(x => {
        return x.price > price
    })
    return newArr
}

// console.log(bookOverFifteenFunc(storeInventory, 15))

const shoppingCart = []

const addBookToCart = (nameOfBook) => {

    const book = storeInventory.filter(book => {
        return book.name === nameOfBook
    })
    shoppingCart.push(book[0])
}

addBookToCart('Catcher in the Rye')
addBookToCart('In Cold Blood')
addBookToCart('Antifragile')

const addPrices = (arr) => {
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i].price
    }
    return total
}

// console.log(addPrices(shoppingCart))

const printBookInfo = storeInventory.map(book => {
    return `${book.name} is by  ${book.author} and is  ${book.price} dollars`
})

//   console.log(printBookInfo)

const listBooks = (arr) => {
    for(let i = 0; i < arr.length; i++){
        return `${arr[i].name} is by  ${arr[i].author} and is ${arr[i].price} dollars`
    }

}

console.log(listBooks(shoppingCart))



