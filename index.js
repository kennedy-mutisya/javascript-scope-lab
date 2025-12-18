// Global variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Function that adds a new burger
function addBurger() {
  const newBurger = "Flatburger";
  burgers.push(newBurger);
}

// if statement
if (true) {
  // Block-scoped variable
  const anotherNewBurger = "Maple Bacon Burger";

  // Add to burgers array
  burgers.push(anotherNewBurger);

  // Function to change the featured drink
  function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
  }
}
