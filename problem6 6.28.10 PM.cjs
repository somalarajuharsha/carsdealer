function problem6(inventory) {
    const brands = [];
    for (let index = 0; index < inventory.length; index++) {
      if (inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi') {
        brands.push(inventory[index]);
      }
    }
    return brands;
  }
  
module.exports = problem6;