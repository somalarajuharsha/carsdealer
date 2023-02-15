function problem2(inventory) {
  if (inventory.length > 0) {
    const indexOfCar = inventory.length - 1;
    return `Last car is a ${inventory[indexOfCar].car_make} ${inventory[indexOfCar].car_model}`;
  }
}

module.exports = problem2;
