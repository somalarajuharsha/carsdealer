function problem1(inventory , vehicalId) {
  for (let index = 0; index < inventory.length; index++) {
    if (inventory[index].id === vehicalId) {
         return `Car 33 is a ${inventory[index].car_year} ${inventory[index].car_make} ${inventory[index].car_model}`;

    }
  }
}

module.exports = problem1;
