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

let pet = {
    hunger: 50,
    thirst: 50,
    happiness: 50,
    cleanliness: 50,
    health: 100,
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
    }
}

function checkCondition() {
    if (pet.health >= 100){
        pet.health = 100;
    } 
    if (pet.hunger <= 0){
        pet.hunger = 0;
    } 
    if (pet.happiness <= 30) {
        image.src = "./images/pikaTired.png";
    } else {
        image.src = "./images/pikaNorm.png";
    }
}

function renderData() {
    health.textContent = `health: ${pet.health}`;
    thirst.textContent = `thirst: ${pet.thirst}`;
    hunger.textContent = `hunger: ${pet.hunger}`;
    happiness.textContent = `happiness: ${pet.happiness}`;
    cleanliness.textContent = `cleanliness: ${pet.cleanliness}`;
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