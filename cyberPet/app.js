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
const gameOver = document.getElementById("gameOver");
const tryAgain = document.getElementById("tryAgain");

let pet = {
    hunger: 50,
    thirst: 50,
    happiness: 50,
    cleanliness: 50,
    health: 100,
    gameOver: false,
    arr: [],
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
    
        this.hunger =50;
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
}

function renderData() {
    health.textContent = `health: ${Math.ceil(pet.health)}`;
    thirst.textContent = `quenchedness: ${Math.ceil(pet.thirst)}`;
    hunger.textContent = `nourishment: ${Math.ceil(pet.hunger)}`;
    happiness.textContent = `happiness: ${Math.ceil(pet.happiness)}`;
    cleanliness.textContent = `cleanliness: ${Math.ceil(pet.cleanliness)}`;
    if(pet.gameOver == true){
        // console.log(pet.gameOver)
    gameOver.textContent = `GAME OVER`
    tryAgain.textContent = "Press start to play again"
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    } 
}

feed.addEventListener("click", () => {
    pet.feedPet();
    checkCondition();
    flag = true;
    renderData();
});
givedrink.addEventListener("click", () => {
    pet.giveDrink();
    checkCondition();
    flag = true;
    renderData();
});

clean.addEventListener("click", () => {
    pet.clean();
    checkCondition();
    renderData();
});
play.addEventListener("click", () => {
    pet.play();
    checkCondition();
    flag = true;
    renderData();
});

renderData();

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});
document.getElementById('tryAgain').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    
    gameOver.textContent = ""
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
    } else {
        resetTimer.textContent = "Reset Game"
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    gameOver.textContent = ""
    tryAgain.textContent = ""
        
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
pet.healthRounded = Math.ceil(pet.health)
rand = Math.floor((Math.random()*6))
pet.makeArr(pet.hunger, pet.thirst, pet.happiness, pet.cleanliness,pet.health)
pet.arr[rand] = pet.arr[rand] -Math.ceil(Math.random()*40)/400
// console.log(pet.arr)
pet.setFromArr(pet.arr)
 renderData()
 timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
}