console.log("hello world");
console.log("hello".length);

const greeting = "hello";
console.log(greeting);
console.log("Hello, what is your name?".length);
// calculator
num = 55.5676
console.log("Hello".toUpperCase());
console.log(" Hello".trim());

console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.toPrecision(3));

const worldString = "Hello, world";
console.log(worldString.blink());//
num = Math.sqrt(2)
console.log(num)
console.log(Number.isFinite(num))

let modelOfCar = "Volvo"
firstName = "Mark"
occupation = "Software Developer"
// console.log("Hi, my name is " +firstName+". I'm a "+occupation+" and I drive a " +  modelOfCar+".")
console.log(`Hi, my name is ${firstName}. I'm a ${occupation} and I drive a ${modelOfCar}.`)

age = "28"
firstName = "George"
favouriteColour = "Blue"
console.log(`Hi, my name is ${firstName}. I'm ${age} 
years old and my favourite colour is ${favouriteColour}.`)

breakfast = "cereal"
lunch = "a sandwich"
dinner = "a burrito"
console.log(`Today for breakfast I will eat ${breakfast}. For lunch I'll have ${lunch} 
and for dinner I'll eat ${dinner}.`)

breakfast = "toast"
lunch = "pasta"
dinner = "a burger"
console.log(`Today for breakfast I will eat ${breakfast}. For lunch I'll have ${lunch} 
and for dinner I'll eat ${dinner}.`)

todaysDate = new Date();
myBirthday = new Date(2023,01,22,0,0,0,0)
console.log(todaysDate);
console.log(myBirthday);
difference = myBirthday-todaysDate
console.log(Math.ceil(difference/86400000)) //divide by the number of miliseconds and round to next day
//displays

todaysDate = new Date();
myBirth = new Date(1994,01,22,0,0,0,0)
console.log(todaysDate);
console.log(myBirth);
difference = todaysDate-myBirth
console.log(Math.floor(difference/86400000)) //divide by the number of miliseconds and round to next day
//displays

let hunger = "full"
if (hunger == "hungry"){
    console.log("yes I'm hungry");
    } else if (hunger == "full"){
        console.log("no I'm full");
    } else {
        console.log("go on then");
    }

    let music = "disco"
    if (music == "classical"){
        console.log("Oh, how relaxing");
        } else if (music == "disco"){
            console.log("Where are my dancing shoes");
        } else if (music == "dance"){
            console.log("Where's the party");
        } else {
            console.log("Turn it down");
        }

        age = 15
        if (age > 17){
            console.log("I can serve you");
            } else {
                console.log("You aren't old enough");
            }

                let age = 28
                country = "UK"
        if (age > 17 && country == "UK"){
            console.log("I can serve you");
            } else {
                console.log("You aren't old enough or aren't British");
            }

                let day = "Friday"
        if (day == "Sunday" | day == "Saturday"){
            console.log("Yay it's the weekend");
            } else {
                console.log("Oh no, work again");
            }
            // switch statements
        topping = "mushroom"
        switch(topping){
            case "pepperoni":
            case "spicy beef": 
                console.log("These are important ingredients for my pizza")
                break
            case "chili peppers":
            case "chicken": 
                console.log(`I don't mind having ${topping}`)
                break
            case "mushroom":
            case "pineapple": 
                console.log(`${topping} should not be on my pizza`)
                break
            default:
                console.log("")
        }
            
        password = "1234567"
        if(password.length <= 7){
            console.log("The password is too short")
        } else{
            console.log("The password is long enough")
        }

        num = "12521"
        console.log(num.substr(0,Math.floor(num.length/2)))
        // if(num % 2 == 0){
        // end = num.substr(Math.ceil(num.length/2))
        // } else {
            end = num.substr(Math.ceil(num.length/2))
        // }
        console.log(end)
        
        if(num.substr(0,Math.floor(num.length/2)) == end.split("").reverse().join("")){
            console.log("The number is a palindrone")
        } else{
            console.log("The number is not palindrone")
        }

        let num = 5
        if(num %3 == 0 && num %5 == 0){
            console.log("fizz buzz")
        } else if(num %3 == 0){
            console.log("buzz")
        } else if(num %5 == 0){
            console.log("fizz")
        } else{
            console.log("num")
        }

        let time = 23
        let placeOfWork = "Code Nation"
        let townOfHome = "Manchester"
        if(time < 9 && time >= 8 || time >= 18 && time < 19){
            console.log("I'm commuting")
        }
        if(time < 8 && time >= 0 || time >= 19 && time < 24){
            console.log("I'm at home")
        }
        if(time >= 9 && time < 18){
            console.log("I'm at work")
        }

string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
index = 0
// console.log(string.substring(10,11))
// console.log(string.length)
for (let i = 0; i < string.length; i++) {
    switch(string.substring(i,i+1)){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            index = i+1
            //gives the array index on last vowel plus 1 
            //because array starts at 0
            //console.log(string.substring(i,i+1))
            break
    }
  }
  console.log(index)

// Create a variable called word that takes a 
// string. Create an if statement that checks if the 
// last letter is the same as the first. If it is return 
// true, otherwise return false

word = "stringexamples"
// console.log(word.substring(0,1))
if(word.substring(0,1) == word.substring(word.length-1)){
    console.log("true")
} else {
    console.log("false")
}

num1 = 5
num2 = 3
if( (num1+num2) %2 ==0){
    console.log(num1+num2)
} else {
    console.log(num1*num2)
}

