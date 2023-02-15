function problem3(inventory) {
    let type = [];
    for (let index = 0; index < inventory.length; index++) {
      type.push(inventory[index].car_model);
    }
    type.sort();
    return type;
  }
  
module.exports = problem3;