// Create an object called pet with key values of petName, 
// typeOfPet, age and colour.
// Use dot notation to log a sentence that describes your pet.

const pet = {
    petName: "petName",
    typeOfPet: "cat",
    age: 11,
    colour: "colour",
    eat () {
        // console.log(`${pet.petName} is eating`)
        console.log(`${pet.petName} is eating`)
    },
    drink () {
        console.log(`${pet.petName} is drinking`)
    }
    
    
}

console.log(`My pet ${pet.typeOfPet} is called ${pet.petName}. It is ${pet.age} years old and is ${pet.colour}.`)
pet.colour = "colour2"
console.log(pet.colour)
pet.petFeatures = ["feature1", "feature2", "feature3"]
console.log(pet.petFeatures)
console.log(pet)
pet.eat()
pet.drink()
