function problem5(inventory , year) {
    const old = [];
    for (let index = 0; index < inventory.length; index++) {
      if (inventory[index].car_year < year) {
        old.push(inventory[index]);
      }
    }
    return old;
  }

  module.exports = problem5;
  