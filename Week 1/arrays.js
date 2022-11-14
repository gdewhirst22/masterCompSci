let favHolidayDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain"
]

// console.log(favHolidayDestinations)

favHolidayDestinations[1] = "Florida, USA"

console.log(favHolidayDestinations)

console.log(favHolidayDestinations.length)
console.log(favHolidayDestinations.pop())

let favFilms = [
    "Casino Royale",
    "Return of the King",
    "Star Wars Episode IV",
    "Star Wars Episode V"
]
console.log(favFilms)
console.log(favFilms[2])
console.log(favFilms[0])

favFilms[1] = "The Godfather II"
console.log(favFilms)
console.log(favFilms.pop()) //return final element
console.log(favHolidayDestinations.shift()) //return first element
console.log(favFilms.shift())
console.log(favHolidayDestinations.map(function(str) {
return str.toUpperCase()
 }))
 console.log(favFilms.slice(0,1)) //return part of array from starting point to ending point
  console.log(favFilms.splice(0,2)) //remove part of array from starting point to ending point and put in new array
console.log(favHolidayDestinations.unshift(4,2)) //add new elements at point of first argument, as many as second argument

// Activity 5 JS
// Create a list of your favourite songs (3 of them). Log 
// them to the console. Add another two songs to the 
// list using a method and then remove the last one

favSongs = [
    "Song1",
    "Song2",
    "Song3"
]
favSongs.push("Song4", "Song5")
// favSongs[4] = "Song5"

console.log(favSongs)

 console.log(favSongs.slice(0,4))
str = favSongs.toString()
console.log(favSongs.toString().replace(/,/g,' '))

// prototyping is 
// essentially built in library functions for data types

let a = "hello"
let obj = {
    hello: "Jordan",
    jordan() {

    }
}

let favHolidayDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain"
]