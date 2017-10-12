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

console.log(pluralProducts)

