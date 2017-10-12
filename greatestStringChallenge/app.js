

const fallArray = [
    'pumpkin',
    'spice',
    'is',
    'very',
    'nice',
    'happy',
    'fall'
]

// const greatestLength = (arr) => {
//     let greatestSoFar = 0;

//     for(i = 0; i < arr.length; i++){
//         if (greatestSoFar < arr[i].length) {
//             greatestSoFar = arr[i];
//           }
//           return arr[i]
//     }

// }

// console.log(greatestLength(fallArray))

const findGreatestString = (arr) => {
    let greatestSoFar = 0
    let indexOfWord = 0

    for(i = 0; i < arr.length; i++){
        let currentLengthOfWord = arr[i].length
        if (currentLengthOfWord > greatestSoFar) {
            greatestSoFar = arr[i].length;
            indexOfWord = i
          }
          
    }
    return `${arr[indexOfWord]} is of length ${greatestSoFar}` 

}

console.log(findGreatestString(fallArray))