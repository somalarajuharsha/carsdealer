function problem4(inventory) {
    let year = [];
    for (let index = 0; index < inventory.length; index++) {
      year.push(inventory[index].car_year);
    }
    return year;
  }
  
module.exports = problem4;