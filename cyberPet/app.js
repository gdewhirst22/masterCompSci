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
    feedPet() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 10;
        this.happiness -= 5;
        // pro
        this.thirst += 10;
        this.health += 10;
    },
    giveDrink() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 10;
        this.thirst -= 10;
        // pro
        this.happiness += 5;
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
        pet.cleanliness
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
    thirst.textContent = `thirst: ${pet.thirst}`;
    hunger.textContent = `hunger: ${pet.hunger}`;
    happiness.textContent = `happiness: ${pet.happiness}`;
    cleanliness.textContent = `cleanliness: ${pet.cleanliness}`;
    if(pet.gameOver == true){
        console.log(pet.gameOver)
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
    
    gameOver.textContent = ""
    tryAgain.textContent = ""
    pet.reset()
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        console.log(pet.health)
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
tempHealth = pet.health -= 1/100 // one less health per second
 if (pet.health >= 100){
    pet.health = 100;
} 
if (pet.health <= 0){
    pet.health = 0
}
pet.health = tempHealth
pet.healthRounded = Math.ceil(pet.health)
 renderData()
 timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
}