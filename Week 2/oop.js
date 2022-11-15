class Pet {
    constructor(firstname, surname, age, type, breed, colour, time) {
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.type = type;
    this.breed = breed;
    this.colour = colour;
    this.lastFed = time;
    }
    get petInfo () {
    return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (name) {
    const array = name.split(' ');
    this.firstname = array[0];
    this.surname = array[1];
    }
    feedPet (time) {
    this.lastFed = time;
    return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
    }
   }
   class CyberPet extends Pet {
    constructor(firstname, surname, age, type, breed, colour, time,cyberPetType,lastPlayedWith, lastCleaned){
    super(firstname, surname, age, type, breed, colour, time)
    this.cyberPetType = cyberPetType
    this.lastPlayedWith = lastPlayedWith
    this.lastCleaned = lastCleaned
    this.playedWith = 0
    this.fed = 0
    this.cleaned = 0

    }
    playWith (time) {
        if(typeof(time) == "number" & typeof(this.lastPlayedWith) == "number") {
        this.playedWith = this.playedWith - (time - this.lastPlayedWith)*7
        this.playedWith = Math.max(0,this.playedWith)
        } else {
        return "Error: time last played with inputs are not numbers."
    }
        this.lastPlayedWith = time;
        this.playedWith = this.playedWith + 40
        this.playedWith = Math.min(100,this.playedWith)
        this.statementPlayedWith = ""
        if(this.playedWith == 100){
            this.statementPlayedWith = this.firstname + `has already been played with.`
    };
        return `Last played with updated to: ${this.lastPlayedWith} for ${this.firstname}. Played with level is now ${this.playedWith.toFixed(2)}.\n ${this.statementPlayedWith}`
    }
    
    clean (time) {
        //time and this.lastCleaned are numbers saying the time last cleaned
        if(typeof(time) == "number" & typeof(this.lastCleaned) == "number") {
    this.cleaned = this.cleaned - (time - this.lastCleaned)*10
    this.cleaned = Math.max(0,this.cleaned)
        } else {return "Error: time last cleaned inputs are not numbers."
    }
    this.lastCleaned = time;
    this.cleaned = this.cleaned + 30
   
    
        this.cleaned = Math.min(100,this.cleaned)
        this.statementCleaned = ""
        if (this.cleaned== 100){
            this.statementCleaned = this.firstname + `has been fully cleaned.`
        }
        return `Last cleaned updated to: ${this.lastCleaned} for ${this.firstname}. Clean level is now ${this.cleaned.toFixed(2)}.\n ${this.statementCleaned}`
    }
    
    }

   const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
console.log(Bella.petInfo);
console.log(Bella.feedPet("feedTime"))
myCyberPet = new CyberPet("petName", "petSurname", "petAge", "petType", "GS", "B&T", "08:00", "cyberPetType1",9.5,9.7);
console.log(myCyberPet.feedPet("feedTime"))
console.log(myCyberPet.playWith(13))
console.log(myCyberPet.clean(10.3))
console.log(myCyberPet.clean(11))
// console.log(myCyberPet.clean("cleanTime"))
// console.log(myCyberPet.clean("cleanTime"))
//    Activity 1…
// Create a class called “Rental”.
// This class should have at least the name of the store, the store 
// address, the store contact number, and a list of available movies
// for rental within the constructor.
// Create an object instance called “test” from your class and output 
// it to the console to ensure it’s free from errors

// class Rental {
//     constructor(name, address, contactNo, moviesPrices){
//         this.name = name,
//         this.address = address,
//         this.contactNo = contactNo
//         this.moviesPrices = moviesPrices   
//     }
//     get rentalInfo () {
//         return `${this.name} is a rental shop located at ${this.address}. Its phone number is ${this.contactNo} and its available films are ${formatMoviesPrices(moviesPrices)}, with prices listed.`;
//         }
//     get strMovies () {
//         return `${this.moviesPrices.movies}`
//     }
//     get strPrices () {
//         return `${this.moviesPrices.prices}`
//     }
//     set newMovie (strNewMoviePrices) {
//         // console.log(this.moviesPrices[0])
//         this.moviesPrices.movies.push(strNewMoviePrices[0])
//         this.moviesPrices.prices.push(strNewMoviePrices[1])
//     }
// }

// formatMoviesPrices = (moviesPrices) => {
//     str = ""
//     // console.log(moviesPrices[0])
//     for(i = 0; i<moviesPrices.movies.length; i++){
//         str = str + "\n" + moviesPrices.movies[i] + " " + moviesPrices.prices[i]  
//     }
//     // console.log(str)
//     return str
// }
// moviesPrices = {
//     movies: ["mov1","mov2","mov3"],
//     prices:["price1","price2","price3"]
// }
// //process the movies into key value string
// test = new Rental("name1", "address1", "contactNo1", moviesPrices)
// // console.log(formatMoviesPrices(moviesPrices))

// // [["mov1"," £5"], ["\nmov2"," £5"],["\nmov3"," £3"]])
// console.log(test.rentalInfo)
// console.log("\n")
// console.log(test.strMovies)
// //have to decide which type of input to give it. array of movie and price here
// test.newMovie = ["mov4", "price4"]
// console.log("\n")
// console.log(test.strMovies)
// console.log(test.strPrices)


//could also list as objects with key values.


//you could also have a list of movies then a list of prices i.e. ["mov1","mov1","mov3"], ["prices1","prices2","prices3"]


// Activity 2…
// Write a function that can get all of the available 
// movies and output them to the console.
// Write a function which can add a new movie to 
// the list of available movie

// Activity 3…
// Movies also have prices, refactor your code so 
// that each movie also has an associated price 
// attached.
// Output a list of all movies, including their prices, 
// to the console when queried

// Stretch activity…
// Create a simple cyberpet.
// We should be able to choose from at least 2 types of pet.
// We should be able to play with, feed, and clean our pet.
// Remember that actions have consequences.