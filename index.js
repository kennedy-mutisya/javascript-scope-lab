// Global variables
let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Function that adds a new burger
function addBurger() {
  let newBurger = "Flatburger";
  burgers.push(newBurger);
}

// if statement
if (true) {
  // Block-scoped variable
  let anotherNewBurger = "Maple Bacon Burger";

  // Add to burgers array
  burgers.push(anotherNewBurger);

  // Function to change the featured drink
  function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
  }
}
