// 1 a: Loop through the list nested in movieData,
// to print the title of each movie in the list.
// 1 b: Only print movies worth seeing, ie scores abouve 70.
// 1 c: Continuing on with 'b', do NOT print the movie if it begins with The
const movieData = {
    all: {
        list: [ 
            { title: 'Blade Runner 2049', score: 91 },
            { title: 'The Mountain Between Us', score: 54},
            { title: 'Victoria & Abdul', score: 67 },
            { title: 'My Little Pony', score: 71 },
            { title: 'The Florida Project', score: 96 }
        ]
    }
}

const printMovies = (arr) => {
    for(var i = 0; i < arr.length; i++){
        if(arr[i].score > 70){
        console.log(arr[i].title);
        }
    }
}

// printMovies(movieData.all.list)

const autoMobiles = [
    { info: 'Kelly Blue Book' },
    {
        sportsCars: [ 'ford mustang', 'cheverolet corvette', 'cheverolet camero', 'porsche 911' ],
        luxuryCars: [ 'mercedes benz', 'lexus es', 'cadillac cts', 'bmw3 series' ]
    }    
]

const printChevy = (arr) => {
    const cheveroletCars = []
    for(i = 0; i < arr.length; i++){
        if(arr[i].split(' ')[0] === 'cheverolet'){
        cheveroletCars.push(arr[i])
        }
    }
    return cheveroletCars;
}

// console.log(printChevy(autoMobiles[1].sportsCars))

//3 a: Given the citiesJSON data, access the cities, and print each item in the array,
// using string interperloation. IE the reponse should look like "Boston is in MA"
//3 b: - Create a function that takes a state abbreviation as a parameter, and returns
// the statement from 3 A if there is a corresponding city, otherwise it returns a statement
// that says no data found.
// ex: getCity('MA') returns "Boston is in MA"
// ex: getCity('MT) returns "No Data Found"

const citiesJSON = {
    meta_data: [23432, 4234, 234, 232, 43242 , 3231],
    payload: {
        url: '/api/cities',
        cities: [
            { city: 'Austin', state: 'TX' },
            { city: 'Denver', state: 'CO' },
            { city: 'San Jose', state: 'CA' },
            { city: 'Washington D.C.', state: 'DC' },
            { city: 'Seattle', state: 'WA' },
            { city: 'Boston', state: 'MA' }
        ]
    }
}

const printCities = (arr, state) => {
    
    const cityInfo = ''

    for(var i = 0; i < arr.length; i++){
			
       cityInfo.push(`${arr[i].city} is in ${arr[i].state}`);
         if(arr[i].state === state) {

         }
        }
         return cityInfo
}
 
 console.log(printCities(citiesJSON.payload.cities, 'CA'))