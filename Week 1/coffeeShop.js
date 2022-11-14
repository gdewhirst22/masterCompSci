
// Activity 5 JS
// Create an object called coffee shop with key values of branch, 
// drinks with prices and food with prices. Add methods called 
// drinksOrdered and foodOrdered. They should return a string 
// saying [Your order] is … with all items chosen with costs, and the 
// total cost
function add(accumulator, a) {
    return accumulator + a;
  }
const coffeeShop = {
    branch: "branch",
    drinks: {
        drinksList: ["drink1", "drink2","drink3"],
        drinksPrices: [1, 2, 4],
    },

    food: {
        foodList: ["food1", "food2"],
        foodPrices: [1, 3,],
    },
    drinksOrdered () {
        totalCost = coffeeShop.drinks.drinksPrices.reduce(add, 0); // with initial value to avoid when the array is empty
        console.log(`You have ordered ${coffeeShop.drinks.drinksList}. It cost £${totalCost}.`)
    },
    foodOrdered () { 
        totalCostF = coffeeShop.food.foodPrices.reduce(add, 0); // with initial value to avoid when the array is empty
        console.log(`You have ordered ${coffeeShop.food.foodList}. It cost £${totalCostF}.`)
    }
}
coffeeShop.drinksOrdered()
coffeeShop.foodOrdered()