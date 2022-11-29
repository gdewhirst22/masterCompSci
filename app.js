const health = document.getElementById("health");
const thirst = document.getElementById("thirst");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const givedrink = document.getElementById("drink");
const clean = document.getElementById("clean");
const image = document.getElementById("petimg");
const gameOverWin = document.getElementById("gameOverWin");
const tryAgain = document.getElementById("tryAgain");
feed.style.color = "grey"
givedrink.style.color = "grey"
clean.style.color = "grey"
play.style.color = "grey"

let pet = {
    hunger: 50,
    thirst: 50,
    happiness: 50,
    cleanliness: 50,
    health: 100,
    gameOverWin: false,
    petType: 1,
    arr: [],
    win: false,
    makeArr(hunger, thirst, happiness, cleanliness,health) {
        this.arr = [hunger, thirst, happiness, cleanliness,health]
    },
    setFromArr(arr){
        this.hunger= arr[0],
        this.thirst= arr[1],
        this.happiness= arr[2],
        this.cleanliness= arr[3],
        this.health= arr[4]
    },
    
    feedPet() {
        // con
        // this.hunger += 10;
        // this.cleanliness -= 10;
        // this.happiness -= 5;
        // pro
        this.hunger += 10;
        this.health += 10;
    },
    giveDrink() {
        // con
        // this.hunger -= 10;
        // this.cleanliness -= 10;
        // this.thirst += 10;
        // pro
        this.thirst += 5;
        this.health += 10;
    },
    play() {
        // con
        // this.hunger += 10;
        // this.cleanliness -= 10;
        // this.happiness -= 5;
        // pro
        this.happiness += 10;
        this.health += 10;
    },
    clean() {
        // // con
        // this.hunger += 10;
        // this.cleanliness += 10;
        // this.happiness -= 5;
        // pro
        this.cleanliness += 10;
        this.health += 10;
    },

    reset() {
    
        this.hunger = 50;
        this.thirst = 50;
        this.happiness = 50;
        this.cleanliness = 50;
        this.health = 100;
        this.gameOver = false
    } 
}

function checkCondition() {
    if (pet.health >= 100){
        pet.health = 100;
    } 
    if (pet.health <= 0){
        pet.health = 0
        pet.gameOver = true
    }
    if (pet.hunger >= 100){
        pet.hunger = 100;
    } 
    if (pet.hunger <= 0){
        pet.hunger = 0;
        pet.gameOver = true
    } 
    if (pet.thirst >= 100){
        pet.thirst = 100;
    } 
    if (pet.thirst <= 0){
        pet.thirst = 0;
        pet.gameOver = true
    } 
    if (pet.happiness >= 100){
        pet.happiness = 100;
    }
    if (pet.happiness <= 0){
        pet.happiness = 0;
        pet.gameOver = true
    }
    if (pet.cleanliness >= 100){
        pet.cleanliness = 100
    }
    if (pet.cleanliness <= 0){
        pet.cleanliness = 0
        pet.gameOver = true
    }

    if (pet.happiness <= 30) {
        image.src = "./images/pikaTired.png";
    } else {
        image.src = "./images/pikaNormal.png";
    }
    pet.win = pet.health >= 90 & pet.hunger >= 90 & pet.thirst >= 90 & pet.happiness >= 90 & pet.cleanliness >= 90
    // console.log(pet.win)
}

function renderData() {
    health.textContent = `health: ${Math.ceil(pet.health)}`;
    thirst.textContent = `quenchedness: ${Math.ceil(pet.thirst)}`;
    hunger.textContent = `nourishment: ${Math.ceil(pet.hunger)}`;
    happiness.textContent = `happiness: ${Math.ceil(pet.happiness)}`;
    cleanliness.textContent = `cleanliness: ${Math.ceil(pet.cleanliness)}`;
    if(pet.gamOverWin == true){
        // console.log(pet.gameOver)
    gameOverWin.textContent = `GAME OVER`
    tryAgain.textContent = "Press start to play again"
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    } 
    if(pet.win == true){
        gameOverWin.textContent = `YOU WIN`
    tryAgain.textContent = "Press start to play again"
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    }
}

feed.addEventListener("click", () => {
    if(resetTimer.textContent == "Reset Game"){
    pet.feedPet();
    checkCondition();
    flag = true;
    renderData();
    }
});
givedrink.addEventListener("click", () => {
    if(resetTimer.textContent == "Reset Game"){
    pet.giveDrink();
    checkCondition();
    flag = true;
    renderData();
    }
});

clean.addEventListener("click", () => {
    if(resetTimer.textContent == "Reset Game"){
    pet.clean();
    checkCondition();
    renderData();
    }
});
play.addEventListener("click", () => {
    if(resetTimer.textContent == "Reset Game"){
    pet.play();
    checkCondition();
    flag = true;
    renderData();
    }
});

renderData();

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(resetTimer.textContent == "Reset Game"){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
}
});
document.getElementById('tryAgain').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    
    gameOverWin.textContent = ""
    tryAgain.textContent = ""
    pet.reset()
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    if(resetTimer.textContent == "Reset Game"){
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 ';
    resetTimer.textContent = "Start Game"
    feed.style.color = "grey"
    givedrink.style.color = "grey"
    clean.style.color = "grey"
    play.style.color = "grey"
    for(i = 0; i<pet2.unique.length; i++){
        // window[.style.color = "black"
        window["attr" + (i+1)].style.color = "grey"
        // console.log(window["attr" + (i+1)])
    }
    //grey out buttons
    } else {
        resetTimer.textContent = "Reset Game"
    if(int!==null){
        clearInterval(int);
    }
    // 
   
    //remove grey out on buttons
    
    int = setInterval(displayTimer,10);
    gameOverWin.textContent = ""
    tryAgain.textContent = ""
    feed.style.color = "black"
    givedrink.style.color = "black"
    clean.style.color = "black"
    play.style.color = "black"
    for(i = 0; i<pet2.unique.length; i++){
        // window[.style.color = "black"
        window["attr" + (i+1)].style.color = "black"
    }
        
}
pet.reset()
renderData()
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        // console.log(pet.health)
        if(seconds == 60){
            seconds = 0;
            minutes++;
            
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
 
// pet.health -= 1/100 // one less health per second
//  if (pet.health >= 100){
//     pet.health = 100;
// } 
// if (pet.health <= 0){
//     pet.health = 0
// }
checkCondition()
checkCondition2()
// pet.healthRounded = Math.ceil(pet.health)
if(seconds % 5 == 0){
    if(ms % 1000 == 0){
        // console.log(seconds)
        // console.log(ms)

rand = Math.floor((Math.random()*6))
pet.makeArr(pet.hunger, pet.thirst, pet.happiness, pet.cleanliness,pet.health)
pet.arr[rand] = pet.arr[rand] -Math.ceil(Math.random()*40)/2
pet.setFromArr(pet.arr)
rand2 = Math.floor((Math.random()*(pet2.unique.length)))
pet2.unique[rand2] = pet2.unique[rand2] - Math.ceil(Math.random()*20)/2
// console.log(pet2.unique.length)
// console.log(pet2.unique)

// pet.healthRounded = Math.ceil(pet.health)
// pet2.setFromArr(pet2.arr)
// console.log(pet.arr)
// renderData2()
renderData2()
 renderData()
}
}
// console.log(pet.arr)

 timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
}


//second pet
//////////////////////
/////////////////////////
//////////////////////////

//input attributes

//enter your attributes

const input = document.getElementById("input");
const button = document.getElementById("submit")
let list = document.getElementsByTagName("ul")[0]
let list2 = document.getElementsByTagName("ul")[1]
button.addEventListener("click", ()=> {
    let listItem = document.createElement("p");
    //push starting value of 50
    pet2.unique.push(50)
    listItem.textContent = `${input.value}: ${Math.ceil(pet2.unique[pet2.unique.length-1])}` 
    list.appendChild(listItem)

    let listItem2 = document.createElement("button");
    listItem2.textContent = input.value;
    list2.appendChild(listItem2)
    // eval(input).textContent = `${input}: ${Math.ceil(pet2.unique[pet2.unique.length])}`
    input.value = ""
    window["attr" + pet2.unique.length + "Pet"] = listItem
    window["attr" + pet2.unique.length] = listItem2
    if(resetTimer.textContent == "Start Game"){
    window["attr" + pet2.unique.length].style.color = "grey"
    }
    // console.log(eval("attr" + pet2.unique.length + "Pet"))
    // attr4Pet = listItem
    renderData2()
    
    // for(i = 0; i<pet2.unique.length; i++){
    //     console.log(pet2.unique.length)
        //make html tags for each new attribute
        //make variables of each attribute value
        

    //create attr html entries



// console.log(str)
// str2 = document.getElementById(eval("attr" + (i+1)))
// console.log(str2)
}
)

    // let listItem2 = document.createElement("button");
    // listItem2.textContent = input.value;
    // list2.appendChild(listItem2)
    // // eval(input).textContent = `${input}: ${Math.ceil(pet2.unique[pet2.unique.length])}`
    // input.value = ""
    // let listItem = document.createElement("p");
    // //push starting value of 50
    // pet2.unique.push(50)
    // listItem.textContent = `${input.value}: ${Math.ceil(pet2.unique[pet2.unique.length-1])}` 
    // list.appendChild(listItem)
    
    // let listItem2 = document.createElement("button");
    // listItem2.textContent = input.value;
    // list2.appendChild(listItem2)
    // // eval(input).textContent = `${input}: ${Math.ceil(pet2.unique[pet2.unique.length])}`
    // input.value = ""
    // eval("attr" + (pet2.unique.length) + "Pet")= listItem2
    // eval("attr" + (pet2.unique.length)).textContent = listItem

//input control

// populate these with the list values


// const attr1 = document.getElementById("attr1");
// const attr2 = document.getElementById("attr2");
// const attr3 = document.getElementById("attr3");
// const attr4 = document.getElementById("attr3");
// const attr4Pet = document.getElementById("attr3Pet");
// const attr2Pet = document.getElementById("attr2Pet");
// const attr3Pet = document.getElementById("attr3Pet");




let pet2 = {
    // unique: [attribute1, attribute2, attribute3],
    unique: [50,50,50],
    attr1: 50,
    attr2: 50,
    attr3: 50,
    gameOverWin: false,
    petType: 2,
    arr: [],
    win: false,

    setUnique(arr){
        this.unique = arr
    },
    // attrFromUnique(unique){
        
    // },
    // makeArr(attribute1, attribute2, attribute3, cleanliness,health) {
    //     this.arr = [hunger, thirst, happiness, cleanliness,health]
    // },
    // setFromArr(arr){
    //     this.hunger= arr[0],
    //     this.thirst= arr[1],
    //     this.happiness= arr[2],
    //     this.cleanliness= arr[3],
    //     this.health= arr[4]
    // },

    //edit attributes buttons
    selectFeedButton(amt,j){
        if(j<this.unique.length){
        this.unique[j] += amt;
        }
        },

    reset2() {
        for(i = 0; i<length(this.unique); i++){

        this.unique[i] = 50
        this.gameOver = false
    }
    } 
}

function checkCondition2() {
    bool = true
    for(i = 0; i< pet2.unique.length; i++)
    { 
    if (pet2.unique[i] >= 100){
        pet2.unique[i] = 100;
        bool == (pet2.unique[i] >= 90) & bool
    } 
    if (pet2.unique[i] <= 0){
        pet2.unique[i] = 0
        pet2.gameOver = true
    }
}
    if (pet2.unique[2] <= 30) {
        image.src = "./images/pikaTired.png";
    } else {
        image.src = "./images/pikaNormal.png";
    }
    pet2.win = bool
    // console.log(pet2.win)
    }
// }

function renderData2() {
    for(i = 0; i<pet2.unique.length; i++){
        str = "attr" + (i+1) + "Pet"
        // console.log(eval("attr" + (i+1) + "Pet"))
        eval("attr" + (i+1) + "Pet").textContent = `${eval("attr" + (i+1)).textContent}: ${Math.ceil(pet2.unique[i])}: edit`
        // console.log(pet2.unique);
    // thirst.textContent = `quenchedness: ${Math.ceil(pet.thirst)}`;
    // hunger.textContent = `nourishment: ${Math.ceil(pet.hunger)}`;
    // happiness.textContent = `happiness: ${Math.ceil(pet.happiness)}`;
    // cleanliness.textContent = `cleanliness: ${Math.ceil(pet.cleanliness)}`;
    }
    // if(pet2.gamOverWin == true){
    //     // console.log(pet.gameOver)
    // gameOverWin.textContent = `GAME OVER`
    // tryAgain.textContent = "Press start to play again"
    // clearInterval(int);
    // [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    // timerRef.innerHTML = '00 : 00 : 00';
    // } 
    // if(pet2.win == true){
    //     gameOverWin.textContent = `YOU WIN`
    // tryAgain.textContent = "Press start to play again"
    // clearInterval(int);
    // [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    // timerRef.innerHTML = '00 : 00 : 00';
    // }
}

// const list = document.getElementsByTagName("pj")
// console.log(list)
// pet2.unique.push(50)
function setVars (){
// listItem = document.createElement("p");

// listItem.textContent = `${input.value}: ${Math.ceil(pet2.unique[pet2.unique.length-1])}` 
// //     list.appendChild(listItem)
//     let listItem2 = document.createElement("button");
// listItem2.textContent = input.value;
//     list2.appendChild(listItem2)
// console.log("attr" + pet2.unique.length + "Pet")
// str = eval("attr" + pet2.unique.length + "Pet")
// console.log(str)
// console.log(eval("attr" + pet2.unique.length + "Pet"))
// eval("attr" + (pet2.unique.length) + "Pet") = listItem
// eval("attr" + (pet2.unique.length)) = listItem2
// attr4Pet = listItem2

}
//has to include new elements

for(i = 0; i<pet2.unique.length; i++){
    // window[.style.color = "black"
    window["attr" + (i+1)].style.color = "grey"
    // console.log(window["attr" + (i+1)])
}
var input2 = document.createElement("input");
console.log(input2)
input2.setAttribute('text', "text");

document.addEventListener("click", (event) => {
    if(resetTimer.textContent == "Reset Game"){
    //events can be attr1,2,3 etc. Clean the string
    // console.log(event.target.textContent.slice(-1))
//    varr = eval(event.target.textContent.slice(-1))
//    console.log(event.target.textContent.slice(-1))
    rand = Math.ceil(Math.random()*40)
    pet2.selectFeedButton(rand, event.target.textContent.slice(-1)-1);
    // console.log(pet2.attr1)
    checkCondition2();
    flag = true;
    renderData2();
    }

}
)

// for(i = 0; i<pet2.unique.length; i++)
// {
//     bttn = "attr" + (i+1)
//     console.log(pet2.attr1Pet)
    
//     }
// });
// }


 renderData2();

// document.getElementById('startTimer').addEventListener('click', ()=>{
//     if(resetTimer.textContent == "Reset Game"){
//     if(int!==null){
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer,10);
// }
// });
// document.getElementById('tryAgain').addEventListener('click', ()=>{
//     if(int!==null){
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer,10);
    
//     gameOverWin.textContent = ""
//     tryAgain.textContent = ""
//     pet.reset()
// });

// document.getElementById('pauseTimer').addEventListener('click', ()=>{
//     clearInterval(int);
// });

// document.getElementById('resetTimer').addEventListener('click', ()=>{
//     if(resetTimer.textContent == "Reset Game"){
//     clearInterval(int);
//     [milliseconds,seconds,minutes,hours] = [0,0,0,0];
//     timerRef.innerHTML = '00 : 00 : 00 ';
//     resetTimer.textContent = "Start Game"
//     feed.style.color = "grey"
//     givedrink.style.color = "grey"
//     clean.style.color = "grey"
//     play.style.color = "grey"
//     //grey out buttons
//     } else {
//         resetTimer.textContent = "Reset Game"
//     if(int!==null){
//         clearInterval(int);
//     }
//     // 
   
//     //remove grey out on buttons
    
//     int = setInterval(displayTimer,10);
//     gameOverWin.textContent = ""
//     tryAgain.textContent = ""
//     feed.style.color = "black"
//     givedrink.style.color = "black"
//     clean.style.color = "black"
//     play.style.color = "black"
        
// }
// pet.reset()
// renderData()
// });